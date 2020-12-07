<!---监管-污水站----->
<template>
    <div class="main">
        <!-- 筛选项 -->
        <div class="search-box">
            <area-type></area-type>

            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="业主类型">
                    <el-select v-model="formInline.type" placeholder="请选择" class="w100">
                        <el-option label="政府" value="政府"></el-option>
                        <el-option label="企业" value="企业"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">筛选</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button>导出表格</el-button>
                </el-form-item>
            </el-form>
        </div>

        <!-- 表格 -->
        <el-table :data="tableData" border style="width: 100%" max-height="700">
            <el-table-column prop="tab1" label="业主名称"></el-table-column>
            <el-table-column prop="tab2" width="80px" label="业主类型"></el-table-column>
            <el-table-column prop="tab3" label="所属区域"></el-table-column>
            <el-table-column prop="tab4" label="详细地址"></el-table-column>
            <el-table-column prop="tab5" width="80px" label="污水站数量"></el-table-column>
            <el-table-column prop="tab6" width="80px" label="处理水量m³/d"></el-table-column>
            <el-table-column prop="tab7" width="80px" label="总能耗KW.h"></el-table-column>
            <el-table-column prop="tab8" width="80px" label="单水能耗KW.h/m³"></el-table-column>
            <el-table-column width="320px" label="健康评价">
                <template>
                    <el-button size="mini">综合评分：86</el-button>
                    <el-button size="mini">评分等级：良</el-button>
                    <el-button type="primary" size="mini">查看</el-button>
                </template>
            </el-table-column>
            <el-table-column width="120px" prop="tab9" label="开通时间"></el-table-column>
            <el-table-column width="180px" label="操作">
                <template>
                    <el-button type="primary" size="mini" @click="dialogTableVisible = true">查看</el-button>
                    <el-button size="mini" type="danger">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 弹框内容 -->
        <el-dialog title="松坝社区污水站" :visible.sync="dialogTableVisible">
            <sewage-info></sewage-info>
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
import sewageInfo from "../companyInfo/index";

export default {
    data() {
        const item = {
            tab1: "松坝社区污水站",
            tab2: "企业",
            tab3: "陕西省/安康市/高新区",
            tab4: "陕西省安康市高新技术产业开发区科技路",
            tab5: 2,
            tab6: 355,
            tab7: 4232,
            tab8: 5345,
            tab9: "2020-09-23",
            tab10: "AAO/MBR",
            tab11: 0,
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
            dialogTableVisible: false,
        };
    },
    components: { areaType, sewageInfo },
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
</style>