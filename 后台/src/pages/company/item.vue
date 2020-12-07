<!---业主-项目管理----->
<template>
    <div class="main">
        <!-- 筛选项 -->
        <div class="search-box">
            <el-form :inline="true" :model="formInline" class="demo-form-inline fl">
                <el-form-item>
                    <el-input placeholder="请输入关键词" v-model="input3" class="input-with-select">
                        <el-select v-model="select" slot="prepend" placeholder="请选择">
                            <el-option label="项目名称" value="1"></el-option>
                            <el-option label="项目负责人" value="2"></el-option>
                            <el-option label="联系方式" value="3"></el-option>
                            <el-option label="项目施工方" value="4"></el-option>
                        </el-select>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">筛选</el-button>
                </el-form-item>
            </el-form>
            <el-button type="primary" class="fr" @click="addItem = true">添加</el-button>
        </div>

        <!-- 表格 -->
        <el-table :data="tableData" border style="width: 100%" max-height="700">
            <el-table-column prop="tab1" label="项目名称"></el-table-column>
            <el-table-column prop="tab2" width="120px" label="项目负责人"></el-table-column>
            <el-table-column prop="tab3" width="120px" label="联系方式"></el-table-column>
            <el-table-column prop="tab4" label="项目施工方"></el-table-column>
            <el-table-column prop="tab5" width="100px" label="污水站数量"></el-table-column>
            <el-table-column prop="tab6" width="100px" label="设备数量"></el-table-column>
            <el-table-column prop="tab7" width="150px" label="创建人"></el-table-column>
            <el-table-column prop="tab8" width="150px" label="创建时间"></el-table-column>
            <el-table-column width="120px" label="附件">
                <el-button type="primary" size="mini">3</el-button>
            </el-table-column>
            <el-table-column width="180px" label="操作">
                <template>
                    <el-button type="primary" size="mini" @click="addItem = true">编辑</el-button>
                    <el-button size="mini" type="danger">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 弹框内容 -->
        <el-dialog title="创建项目" :visible.sync="addItem">
            <add-item></add-item>
        </el-dialog>

        <!-- 分页 -->
        <div class="block">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage3"
                :page-size="100"
                layout="prev, pager, next, jumper"
                :total="1000"
            ></el-pagination>
        </div>
    </div>
</template>

<script>
import areaType from "~/components/areaType";
import addItem from "./addItem";

export default {
    data() {
        const item = {
            tab1: "洪启山污水处理项目",
            tab2: "李然",
            tab3: "15190037586",
            tab4: "西汉市住第四建设大队",
            tab5: 2,
            tab6: 5,
            tab7: "白亚如",
            tab8: "2020-09-23",
        };
        return {
            formInline: {
                type: "",
                status: "",
                machine: "",
                duringTime: "",
            },
            tableData: Array(10).fill(item),
            tabPosition: "列表",
            currentPage3: 5,
            addItem: false,

            input3: "",
            select: "项目名称",
            input: "",
        };
    },
    components: { areaType, addItem },
    methods: {
        onSubmit() {
            console.log("submit!");
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
    },
};
</script>

<style lang="less" scoped>
.block {
    text-align: center;
    margin: 15px auto 0;
}
.w100 {
    width: 120px;
}
.tab-type {
    position: absolute;
    top: 0;
    right: 0;
}
.search-box {
    position: relative;
}
.el-select {
    width: 120px;
}

.input-with-select .el-input-group__prepend {
    background-color: #fff;
}
.el-input {
    width: 400px;
}
</style>