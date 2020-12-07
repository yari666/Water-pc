<!---业主-添加/编辑项目----->

<template>
    <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="设备名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="设备工艺">
            <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="所属污水站">
            <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="设计出水量m³">
            <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>


<script>
export default {
    data() {
        return {
            form: {
                name: "",
                region: "",
                date1: "",
                date2: "",
                delivery: false,
                type: [],
                resource: "",
                desc: "",
            },
        };
    },
    methods: {
        onSubmit() {
            console.log("submit!");
        },
    },
};
</script>

<style lang="less" scoped>
.box {
    .el-form-item {
        float: left;
        width: 50%;
    }
}
</style>