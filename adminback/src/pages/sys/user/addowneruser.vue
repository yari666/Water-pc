<!----业主 添加/编辑项目----->

<template>
  <div>
    <el-form ref="formRef" :model="form" :rules="formRules" label-width="100px">
      <el-tabs type="border-card">
        <el-tab-pane label="账号信息">
          <el-form-item label="账号/手机号" prop="mobilePhone">
            <el-input v-model="form.mobilePhone"></el-input>
          </el-form-item>
          <el-form-item label="真实名称" prop="realName">
            <el-input v-model="form.realName"></el-input>
          </el-form-item>
          <el-form-item label="角色" prop="roleId">
            <el-select v-model="form.roleId" placeholder="请选择">
              <el-option
                v-for="item in roleIdList"
                :key="item.id"
                :label="item.roleName"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="业主类型" prop="ownerType">
            <el-select
              v-model="form.ownerType"
              placeholder="请选择"
              @change="changeValue"
            >
              <el-option
                v-for="item in ownerTypeList"
                :key="item.key"
                :label="item.value"
                :value="item.key"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="开通时间" prop="turnonDate">
            <el-date-picker
              v-model="form.turnonDate"
              type="date"
              placeholder="选择日期"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="到期时间" prop="expirationDate">
            <el-date-picker
              v-model="form.expirationDate"
              type="date"
              placeholder="选择日期"
            >
            </el-date-picker>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="基础信息">
          <el-form-item :label="ownerLabel.companyName" prop="companyName">
            <el-input v-model="form.companyName"></el-input>
          </el-form-item>
          <el-form-item label="简称" prop="companyShortenedForm">
            <el-input v-model="form.companyShortenedForm"></el-input>
          </el-form-item>
          <el-form-item
            :label="ownerLabel.companyLegalPerson"
            prop="companyLegalPerson"
          >
            <el-input v-model="form.companyLegalPerson"></el-input>
          </el-form-item>
          <el-form-item label="联系方式" prop="companyMobilePhone">
            <el-input v-model="form.companyMobilePhone"></el-input>
          </el-form-item>
          <el-form-item label="区域" prop="area">
            <el-cascader
              v-model="form.area"
              :options="areaList"
              :props="{
                checkStrictly: true,
                value: 'Value',
                label: 'Value',
                children: 'Children',
              }"
              clearable
            ></el-cascader>
          </el-form-item>
          <el-form-item label="详细地址" prop="address">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item
            v-if="isOwner"
            label="注册资金"
            prop="companyRegisteredCapital"
          >
            <el-input v-model="form.companyRegisteredCapital"></el-input>
          </el-form-item>
          <el-form-item
            v-if="isOwner"
            label="业务范围"
            prop="companyBusinessScope"
          >
            <el-input v-model="form.companyBusinessScope"></el-input>
          </el-form-item>
        </el-tab-pane>
      </el-tabs>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="$emit('closeownerdialog', false)">取 消</el-button>
      <el-button type="primary" @click="onSubmit">确 定</el-button>
    </span>
  </div>
</template>

<script>
import {
  createOwnerUser,
  updateOwnerUser,
  getOwnerType,
} from "~/api/sys/user/user";
import { getAreaList } from "~/api/sys/dictionary/dictionary";
import { getRoleDropdown } from "~/api/sys/role/role";

export default {
  data() {
    return {
      form: {
        id: "",
        realName: "",
        mobilePhone: "",
        turnonDate: "",
        expirationDate: "",
        // 写死，表示业主账号
        userType: 1,
        roleId: undefined,
        ownerType: -1,
        area: [],
        companyName: "",
        companyLegalPerson: "",
        companyMobilePhone: "",
        address: "",
        companyBusinessScope: "",
        companyRegisteredCapital: 0,
        companyShortenedForm: "",
      },
      isOwner: true,
      roleIdList: [],
      areaList: [],
      ownerTypeList: [],
      formRules: {
        mobilePhone: [
          { required: true, message: "请输入账号/手机号", trigger: "blur" },
        ],
        realName: [
          { required: true, message: "请输入真实名称", trigger: "blur" },
        ],
        roleId: [{ required: true, message: "请选择角色", trigger: "blur" }],
        turnonDate: [
          { required: true, message: "请选择开通时间", trigger: "blur" },
        ],
        expirationDate: [
          { required: true, message: "请选择到期时间", trigger: "blur" },
        ],
        companyName: [
          { required: true, message: "请输入单位名称", trigger: "blur" },
        ],
        companyRegisteredCapital: [
          { required: true, message: "请输入注册资金", trigger: "blur" },
        ],
        area: [{ required: true, message: "请选择区域", trigger: "blur" }],
        ownerType: [
          { required: true, message: "请选择业主类型", trigger: "blur" },
        ],
      },
      ownerLabel: {
        companyName: "企业名称",
        companyLegalPerson: "企业法人",
      },
    };
  },
  props: {
    refreshList: {
      type: Function,
      default: null,
    },
    openType: String,
    formData: {
      type: Object,
      default: function() {
        return {
          id: "",
          realName: "",
          mobilePhone: "",
          turnonDate: "",
          expirationDate: "",
          // 写死，表示业主账号
          userType: 1,
          roleId: undefined,
          ownerType: -1,
          area: [],
          companyName: "",
          companyLegalPerson: "",
          companyMobilePhone: "",
          address: "",
          companyShortenedForm: "",
          companyBusinessScope: "",
          companyRegisteredCapital: 0,
        };
      },
    },
  },
  created() {
    if (this.openType == "edit") {
      this.form = this.formData;
    } else {
      this.form.realName = "";
      this.form.mobilePhone = "";
      this.form.turnonDate = "";
      this.form.turnonDate = "";
      this.form.roleId = undefined;
      this.form.userType = 1;
      this.form.area = [];
      this.form.ownerType = -1;
      this.form.companyName = "";
      this.form.companyLegalPerson = "";
      this.form.companyMobilePhone = "";
      this.form.address = "";
      this.form.companyShortenedForm = "";
    }

    this.getRoleList();
    this.getAreaList();
    this.getOwnerType();
  },
  methods: {
    changeValue(val) {
      if (val === 0) {
        // 业主
        this.isOwner = true;
        this.ownerLabel.companyName = "企业名称";
        this.ownerLabel.companyLegalPerson = "企业法人";
      } else {
        this.isOwner = false;
        this.ownerLabel.companyName = "单位名称";
        this.ownerLabel.companyLegalPerson = "负责人";
      }
    },
    // 得到角色下拉列表
    async getRoleList() {
      const { data: result } = await getRoleDropdown(this.$http);

      if (result !== undefined) {
        this.roleIdList = result;
      }
    },
    // 获取业主类型
    async getOwnerType() {
      const { data: result } = await getOwnerType(this.$http);

      if (result !== undefined) {
        this.ownerTypeList = result;
      }
    },
    // 获取区域
    async getAreaList() {
      const { data: result } = await getAreaList(this.$http);

      if (result !== undefined) {
        this.areaList = result;
      }
    },
    // 提交数据
    onSubmit() {
      while (this.form.area.length < 3) {
        this.form.area.push("");
      }

      this.$refs.formRef.validate(async (valid) => {
        if (!valid) {
          return;
        }
        if (this.openType != "edit") {
          const { data: result } = await createOwnerUser(this.$http, this.form);

          if (result !== undefined && result.id !== "") {
            this.$message.success("添加业主账号成功");

            this.$emit("closeownerdialog", false);
            if (this.refreshList) {
              this.refreshList();
            }
          } else {
            this.$message.success("添加业主账号失败");
          }
        } else {
          const { data: result } = await updateOwnerUser(this.$http, this.form);

          if (result !== undefined && result.id !== "") {
            this.$message.success("修改业主账号成功");

            this.$emit("closeownerdialog", false);
            if (this.refreshList) {
              this.refreshList();
            }
          } else {
            this.$message.success("修改业主账号失败");
          }
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  .el-form-item {
    float: left;
    width: 40%;
  }
}
.el-select,
.el-cascader {
  width: 100%;
}
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
}
</style>
