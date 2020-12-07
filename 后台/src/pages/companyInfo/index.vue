<!--业主信息-->

<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="基本信息" name="0">
            <base-info></base-info>
        </el-tab-pane>
        <el-tab-pane label="项目列表[3]" name="1">项目列表</el-tab-pane>
        <el-tab-pane label="污水站[3]" name="2">污水站</el-tab-pane>
        <el-tab-pane label="健康评价" name="3">
            <jkpj></jkpj>
        </el-tab-pane>
        <el-tab-pane label="问题处理" name="4">问题处理</el-tab-pane>
    </el-tabs>
</template>

<script>
import baseInfo from "./baseInfo";
import jkpj from "~/components/jkpj";

export default {
    data() {
        return {
            activeName: "0",
        };
    },
    components: { baseInfo, jkpj },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
    },
};
</script>