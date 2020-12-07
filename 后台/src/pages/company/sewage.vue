<!---业主-污水站管理----->
<template>
    <div class="main">
        <!-- 筛选项 -->
        <div class="search-box">
            <el-form
                :inline="true"
                :model="formInline"
                class="demo-form-inline fl"
            >
                <el-form-item label="状态">
                    <el-select
                        v-model="formInline.status"
                        placeholder="请选择"
                        class="w100"
                    >
                        <el-option label="在线" value="在线"></el-option>
                        <el-option label="故障" value="故障"></el-option>
                        <el-option label="异常" value="异常"></el-option>
                        <el-option label="离线" value="离线"></el-option>
                        <el-option label="维修中" value="维修中"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="工艺">
                    <el-select
                        v-model="formInline.machine"
                        placeholder="请选择"
                    >
                        <el-option label="AOO" value="AOO"></el-option>
                        <el-option label="MBR" value="MBR"></el-option>
                        <el-option label="AOO+MBR" value="AOO+MBR"></el-option>
                        <el-option
                            label="小型过滤罐"
                            value="小型过滤罐"
                        ></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="健康评分">
                    <el-select v-model="formInline.status" placeholder="请选择">
                        <el-option label="优" value="优"></el-option>
                        <el-option label="良" value="良"></el-option>
                        <el-option label="差" value="差"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="所属项目">
                    <el-select v-model="formInline.status" placeholder="请选择">
                        <el-option label="项目A" value="项目A"></el-option>
                        <el-option label="项目B" value="项目B"></el-option>
                        <el-option label="项目C" value="项目C"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="运维方">
                    <el-select v-model="formInline.status" placeholder="请选择">
                        <el-option label="公司A" value="公司A"></el-option>
                        <el-option label="公司B" value="公司B"></el-option>
                        <el-option label="公司C" value="公司C"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="污水站">
                    <el-input
                        placeholder="请输入污水站名称"
                        v-model="input"
                        clearable
                        style="width: 200px"
                    >
                    </el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit">筛选</el-button>
                </el-form-item>
            </el-form>
            <el-button type="primary" class="fr" @click="addSewage = true"
                >添加</el-button
            >
        </div>

        <!-- 表格 -->
        <el-table
            :data="tableData"
            show-summary
            border
            style="width: 100%"
            max-height="700"
        >
            <el-table-column prop="tab1" label="污水站名称/区域"
                ><template>
                    <b>陕西省安康市汉滨区谭坝镇松坝社区污水站A</b>
                    <p>陕西省/安康市/汉滨区</p>
                </template></el-table-column
            >

            <el-table-column prop="tab2" label="所属项目"></el-table-column>

            <el-table-column
                prop="tab3"
                width="100px"
                label="处理水量m³/d"
            ></el-table-column>

            <el-table-column
                prop="tab4"
                width="100px"
                label="总能耗KW.h"
            ></el-table-column>

            <el-table-column
                prop="tab5"
                label="单水能耗KW.h/m³"
                width="100px"
            ></el-table-column>

            <el-table-column
                prop="tab6"
                label="当前状态/时间"
                width="100px"
            ></el-table-column>

            <el-table-column width="320px" label="健康评价">
                <template>
                    <el-button size="mini">综合评分：86</el-button>
                    <el-button size="mini">评分等级：良</el-button>
                    <el-button type="primary" size="mini">查看</el-button>
                </template>
            </el-table-column>

            <el-table-column
                prop="tab8"
                label="设备数量/工艺"
                width="100px"
            ></el-table-column>

            <el-table-column prop="tab9" label="运维方"></el-table-column>

            <el-table-column label="操作" width="320px">
                <template>
                    <el-button size="mini" @click="dialogTableVisible = true"
                        >查看</el-button
                    >
                    <el-button
                        type="primary"
                        size="mini"
                        @click="addSewage = true"
                        >编辑</el-button
                    >
                    <el-button size="mini" type="danger">删除</el-button>
                    <el-button size="mini" type="success">发起工单</el-button>
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
        <el-dialog title="创建污水站" :visible.sync="addSewage">
            <add-sewage></add-sewage>
        </el-dialog>

        <el-dialog title="松坝社区污水站" :visible.sync="dialogTableVisible">
            <sewage-info></sewage-info>
        </el-dialog>
    </div>
</template>

<script>
import areaType from "~/components/areaType";
import addSewage from "./addSewage";
import sewageInfo from "../sewageInfo/index";

export default {
    data() {
        const item = {
            tab1: "污水站A/",
            tab2: "项目A",
            tab3: 500,
            tab4: 34423,
            tab5: 6654,
            tab6: "离线 1小时",
            tab7: "白亚如",
            tab8: "2 AOO/MBR",
            tab9: "XXXXXXX公司【第三方】",
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
            addSewage: false,
            dialogTableVisible: false,

            input3: "",
            select: "项目名称",
            input: "",
        };
    },
    components: { areaType, addSewage, sewageInfo },
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