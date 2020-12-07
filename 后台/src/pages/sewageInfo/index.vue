<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="基本信息" name="0">
            <base-info></base-info>
        </el-tab-pane>
        <el-tab-pane label="预警通知[3]" name="1">
            <list1 :type="1"></list1>
        </el-tab-pane>
        <el-tab-pane label="维修记录[3]" name="2">
            <list1 :type="2"></list1>
        </el-tab-pane>
        <el-tab-pane label="巡检记录[2]" name="3">
            <list1 :type="3"></list1>
        </el-tab-pane>
        <el-tab-pane label="监查记录[3]" name="4">
            <list1 :type="4"></list1>
        </el-tab-pane>
        <el-tab-pane label="健康评价" name="5">
            <jkpj></jkpj>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
import baseInfo from "./baseInfo";
import jkpj from "~/components/jkpj";
import list1 from "~/components/list1";

export default {
    data() {
        return {
            activeName: "0",
        };
    },
    components: { baseInfo, list1, jkpj },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
    },
};
</script>