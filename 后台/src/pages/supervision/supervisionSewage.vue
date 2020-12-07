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
                <el-form-item label="状态">
                    <el-select v-model="formInline.status" placeholder="请选择" class="w100">
                        <el-option label="在线" value="在线"></el-option>
                        <el-option label="故障" value="故障"></el-option>
                        <el-option label="异常" value="异常"></el-option>
                        <el-option label="离线" value="离线"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="工艺">
                    <el-select v-model="formInline.machine" placeholder="请选择" class="w100">
                        <el-option label="AOO" value="AOO"></el-option>
                        <el-option label="MBR" value="MBR"></el-option>
                        <el-option label="AOO+MBR" value="AOO+MBR"></el-option>
                        <el-option label="小型过滤罐" value="小型过滤罐"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="持续时间">
                    <el-select v-model="formInline.duringTime" placeholder="请选择" class="w100">
                        <el-option label="持续3天" value="持续3天"></el-option>
                        <el-option label="持续5天" value="持续5天"></el-option>
                        <el-option label="持续7天" value="持续7天"></el-option>
                        <el-option label="持续10天以上" value="持续10天以上"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">筛选</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button>导出表格</el-button>
                </el-form-item>
            </el-form>

            <!-- tab切换 -->
            <el-radio-group class="tab-type" v-model="tabPosition">
                <el-radio-button label="列表">列表</el-radio-button>
                <el-radio-button label="地图">地图</el-radio-button>
            </el-radio-group>
        </div>

        <!-- 表格 -->
        <el-table :data="tableData" show-summary border style="width: 100%" max-height="700">
            <el-table-column prop="tab1" width="150px" label="污水站名称"></el-table-column>
            <el-table-column label="所属业主/区域">
                <template>
                    <b>陕西省安康市汉滨区谭坝镇松坝社区 [政府]</b>
                    <p>陕西省/安康市/汉滨区</p>
                </template>
            </el-table-column>
            <el-table-column prop="tab3" width="80px" label="处理水量m³/d"></el-table-column>
            <el-table-column prop="tab4" width="80px" label="总能耗KW.h"></el-table-column>
            <el-table-column prop="tab5" width="80px" label="单水能耗KW.h/m³"></el-table-column>
            <el-table-column width="80px" label="当前状态">
                <el-tag type="success">在线</el-tag>
            </el-table-column>
            <el-table-column width="80px" prop="tab7" label="持续时间"></el-table-column>
            <el-table-column width="320px" label="健康评价">
                <template>
                    <el-button size="mini">综合评分：86</el-button>
                    <el-button size="mini">评分等级：良</el-button>
                    <el-button type="primary" size="mini">查看</el-button>
                </template>
            </el-table-column>
            <el-table-column width="70px" prop="tab9" label="设备数量/套"></el-table-column>
            <el-table-column width="100px" prop="tab10" label="设备工艺"></el-table-column>
            <el-table-column width="80px" label="监控点">
                <template>
                    <el-button type="primary" size="mini">查看</el-button>
                </template>
            </el-table-column>
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
import sewageInfo from "../sewageInfo/index";

export default {
    data() {
        const item = {
            tab1: "松坝社区污水站",
            tab2: "",
            tab3: 200,
            tab4: 3244,
            tab5: 355,
            tab6: 0,
            tab7: "30天",
            tab8: 0,
            tab9: 2,
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