<!---主框架----->
<template>
    <el-container>
        <!---侧栏----->
        <el-aside style="width: 224px">
            <div class="logo"></div>
            <el-menu :default-openeds="['1', '3']" color="#6F80A7">
                <el-menu-item index="1">
                    <span slot="title">控制台</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <span slot="title">污水站</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <span slot="title">业主数据</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <span slot="title">巡查管理</span>
                </el-menu-item>
            </el-menu>
        </el-aside>

        <el-container>
            <!---顶部----->
            <el-header style="height: 68px">
                <div class="fr">
                    <div class="company fl">
                        <el-dropdown>
                            <i
                                class="el-icon-settingw"
                                style="margin-right: 15px"
                            ></i>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>查看</el-dropdown-item>
                                <el-dropdown-item>新增</el-dropdown-item>
                                <el-dropdown-item>删除</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                    <div class="weather fl">
                        <i class="el-icon-sunny"></i>晴 24℃
                    </div>
                    <div class="user fl">
                        <el-avatar :size="30" :src="circleUrl"></el-avatar>
                        admin
                    </div>

                    <div class="email fl"><i class="icons"></i></div>
                    <div class="ksh fl"><i class="icons"></i></div>
                    <i class="el-icon-setting setting"></i>
                </div>
            </el-header>

            <!---主内容----->
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<style lang="less" scope>
.el-container {
    height: 100vh;
    width: 100%;
    overflow: hidden;
}

.icons {
    background: url(../assets/img/icons.png) no-repeat;
}

.el-header {
    color: #535353;
    line-height: 68px;
    text-align: right;
    font-size: 14px;
    background: #ffffff;
    box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.08);
    z-index: 1;
    .company,
    .weather,
    .user,
    .email,
    .ksh {
        padding: 0 13px;
        height: 18px;
        line-height: 18px;
        margin-top: 25px;
        border-right: 1px solid #dfdfdf;
    }
    .weather {
        i {
            font-size: 20px;
            color: #ffa200;
            vertical-align: -2px;
            margin-right: 10px;
        }
    }
    .user {
        .el-avatar {
            margin-right: 10px;
            margin-top: -6px;
            float: left;
        }
    }
    .email {
        i {
            width: 16px;
            height: 10px;
            display: block;
            margin-top: 4px;
        }
    }
    .ksh {
        i {
            width: 21px;
            height: 17px;
            display: block;
            background-position: -55px 0;
        }
    }
    .setting {
        font-size: 20px;
        padding-left: 13px;
    }
}

.el-aside {
    background: linear-gradient(153deg, #23283c 0%, #2a355a 100%);
    box-shadow: 3px 3px 14px rgba(0, 0, 0, 0.16);
    font-size: 14px;
}
.logo {
    background: url(../assets/img/logo.png) no-repeat;
    background-size: contain;
    width: 170px;
    height: 48px;
    margin: 16px 25px;
}

.el-menu-item:focus,
.el-menu-item:hover,
.el-submenu__title:focus,
.el-submenu__title:hover {
    background-color: #48596f;
}

.el-menu {
    background-color: transparent;
    border: none;
    .el-menu-item {
        height: 50px;
        line-height: 50px;
        color: #6f80a7;
        &:hover,
        &:focus {
            color: #fff;
            border-left: 2px solid #10c2de;
            background: linear-gradient(
                91deg,
                rgba(8, 153, 175, 0.27) 0%,
                rgba(0, 55, 64, 0.09) 58%,
                rgba(3, 15, 29, 0) 100%
            );
        }
    }
}
.el-main {
    background: #f9f9f9;
    padding: 4px;
}
</style>


<script>
export default {
    data() {
        return {
            circleUrl:
                "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        };
    },
};
</script>