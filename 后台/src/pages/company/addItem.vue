<!---业主-添加/编辑项目----->

<template>
    <el-form ref="form" :model="form" label-width="90px">
        <el-form-item label="项目名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>

        <div class="box">
            <el-form-item label="项目负责人">
                <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="联系方式">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
        </div>

        <el-form-item label="项目施工方">
            <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="备注">
            <el-input type="textarea" v-model="form.desc"></el-input>
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