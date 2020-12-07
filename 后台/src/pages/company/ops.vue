<!---业主-运维管理----->
<template>
    <div class="main">
        <!-- 筛选项 -->
        <div class="search-box">
            <el-form
                :inline="true"
                :model="formInline"
                class="demo-form-inline fl"
            >
                <el-form-item label="污水站">
                    <el-select v-model="value" filterable placeholder="请选择">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item>
                    <el-input
                        placeholder="请输入关键词"
                        v-model="input3"
                        class="input-with-select"
                    >
                        <el-select
                            v-model="select"
                            slot="prepend"
                            placeholder="请选择"
                        >
                            <el-option label="运维方名称" value="1"></el-option>
                            <el-option label="负责人" value="2"></el-option>
                            <el-option label="联系方式" value="3"></el-option>
                        </el-select>
                    </el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit">筛选</el-button>
                </el-form-item>
            </el-form>
            <el-button type="primary" class="fr" @click="addMachine = true"
                >添加</el-button
            >
        </div>

        <!-- 表格 -->
        <el-table :data="tableData" border style="width: 100%" max-height="700">
            <el-table-column prop="tab1" label="运维方名称"
                ><template>
                    <b>陕西省安康市汉滨区谭坝镇松坝社区污水站A</b>
                    <p>陕西省/安康市/汉滨区</p>
                </template></el-table-column
            >

            <el-table-column
                prop="tab2"
                width="120px"
                label="负责人"
            ></el-table-column>

            <el-table-column
                prop="tab3"
                label="联系方式"
                width="120px"
            ></el-table-column>

            <el-table-column prop="tab4" label="运维内容"></el-table-column>

            <el-table-column
                prop="tab5"
                width="100px"
                label="维修工单"
            ></el-table-column>

            <el-table-column
                prop="tab6"
                width="100px"
                label="巡检工单"
            ></el-table-column>

            <el-table-column
                prop="tab7"
                label="添加时间/人"
                width="140px"
            ></el-table-column>

            <el-table-column prop="tab8" label="备注"></el-table-column>

            <el-table-column label="操作" width="200px">
                <template>
                    <el-button
                        type="primary"
                        size="mini"
                        @click="addMachine = true"
                        >编辑</el-button
                    >
                    <el-button size="mini" type="danger">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

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

        <!-- 弹框内容 -->
        <el-dialog title="创建设备/套" :visible.sync="addMachine">
            <add-machine></add-machine>
        </el-dialog>
    </div>
</template>

<script>
import areaType from "~/components/areaType";
import addMachine from "./addMachine";

export default {
    data() {
        const item = {
            tab1: "XXXXXX公司",
            tab2: "王浩",
            tab3: 15190024234,
            tab4: "无",
            tab5: 10,
            tab6: 3,
            tab7: "2020-01-01 xxxx",
            tab8: "无",
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
            addMachine: false,

            input3: "",
            select: "运维方名称",
            input: "",

            options: [
                {
                    value: "选项1",
                    label: "污水站A",
                },
                {
                    value: "选项2",
                    label: "污水站B",
                },
                {
                    value: "选项3",
                    label: "污水站C",
                },
                {
                    value: "选项4",
                    label: "污水站D",
                },
                {
                    value: "选项5",
                    label: "污水站E",
                },
            ],
            value: "",
        };
    },
    components: { areaType, addMachine },
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