<!---首页----->

<template>
    <div class="main">
        <table border="0" cellspacing="25" cellspadding="3">
            <tr>
                <td rowspan="2" class="con1">
                    <div class="box">
                        <div class="title">概况总览</div>
                        <ul>
                            <li>
                                <div class="top">
                                    <b>138</b><span>日处理量 m³/天</span>
                                </div>
                                <div class="bottom co1">
                                    <i></i>
                                    <b>45</b>
                                    <span>业主数量</span>
                                </div>
                            </li>
                            <li>
                                <div class="top">
                                    <b>456781</b><span>总处理量 m³</span>
                                </div>
                                <div class="bottom co2">
                                    <i></i>
                                    <b>487</b>
                                    <span>污水站</span>
                                </div>
                            </li>
                            <li>
                                <div class="top">
                                    <b>99%</b><span>水质达标</span>
                                </div>
                                <div class="bottom co3">
                                    <i></i>
                                    <b>1250</b>
                                    <span>设备/套</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="line"></div>

                    <div class="status-box">
                        <div class="title">状态统计</div>
                        <div
                            id="statusEchart"
                            class="fl"
                            style="width: 65%; height: 220px"
                        ></div>
                        <ul class="fr">
                            <li><i class="online"></i>在线<b>240</b></li>
                            <li><i class="err"></i>故障<b>42</b></li>
                            <li><i class="warn"></i>异常<b>89</b></li>
                            <li><i class="offline"></i>离线<b>45</b></li>
                        </ul>
                    </div>
                </td>
                <td colspan="2" class="con2">
                    <ul class="tab1">
                        <li
                            v-for="(item, index) in tabData"
                            :key="index"
                            @click="changeTab(index)"
                            :class="tabIndex == index ? 'active' : ''"
                        >
                            {{ item }}
                        </li>
                    </ul>
                    <ul class="tab2">
                        <li class="active">当年统计</li>
                        <li>当月统计</li>
                    </ul>

                    <div class="statis_box">
                        <div
                            id="waterEchart"
                            style="width: 100%; height: 220px"
                        ></div>
                        <div id="singleWaterEchart"></div>
                        <div id="energyEchart"></div>
                        <div id="statis"></div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="con3">
                    <div class="title">污水站超时未解决</div>
                    <div class="dropmore">
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                3天
                                <i
                                    class="el-icon-arrow-down el-icon--right"
                                ></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>3天</el-dropdown-item>
                                <el-dropdown-item>5天</el-dropdown-item>
                                <el-dropdown-item>7天</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <div class="more">更多</div>
                    </div>
                    <div class="box">
                        <div class="fl">
                            <div class="circle">135</div>
                        </div>
                        <ul class="fr">
                            <li>
                                松坝社区污水站
                                <span class="err">故障 3 天</span>
                            </li>
                            <li>
                                松坝社区污水站
                                <span class="err">故障 3 天</span>
                            </li>
                            <li>
                                松坝社区污水站
                                <span class="err">故障 3 天</span>
                            </li>
                            <li>
                                松坝社区污水站
                                <span class="err">故障 3 天</span>
                            </li>
                            <li>
                                松坝社区污水站
                                <span class="err">故障 3 天</span>
                            </li>
                            <li>
                                松坝社区污水站
                                <span class="err">故障 3 天</span>
                            </li>
                        </ul>
                    </div>
                </td>

                <td class="con4">
                    <div class="title">当天预警通知</div>
                    <div class="dropmore">
                        <div class="more">更多</div>
                    </div>

                    <table
                        class="tblist"
                        border="0"
                        cellspacing="0"
                        cellspadding="0"
                    >
                        <tr>
                            <td class="err">
                                <i class="el-icon-error"></i>故障
                            </td>
                            <td>松坝社区污水站</td>
                            <td class="offline">2020.01.01 15:20</td>
                        </tr>
                        <tr>
                            <td class="warn">
                                <i class="el-icon-warning"></i>异常
                            </td>
                            <td>松坝社区污水站</td>
                            <td class="offline">2020.01.01 15:20</td>
                        </tr>
                        <tr>
                            <td class="err">
                                <i class="el-icon-error"></i>故障
                            </td>
                            <td>松坝社区污水站</td>
                            <td class="offline">2020.01.01 15:20</td>
                        </tr>
                        <tr>
                            <td class="err">
                                <i class="el-icon-error"></i>故障
                            </td>
                            <td>松坝社区污水站</td>
                            <td class="offline">2020.01.01 15:20</td>
                        </tr>
                        <tr>
                            <td class="offline">
                                <i class="el-icon-remove"></i>离线
                            </td>
                            <td>松坝社区污水站</td>
                            <td class="offline">2020.01.01 15:20</td>
                        </tr>
                        <tr>
                            <td class="err">
                                <i class="el-icon-error"></i>故障
                            </td>
                            <td>松坝社区污水站</td>
                            <td class="offline">2020.01.01 15:20</td>
                        </tr>
                    </table>
                </td>
            </tr>

            <tr>
                <td class="con5">
                    <div class="title">巡查记录</div>
                    <div class="dropmore">
                        <div class="more">更多</div>
                    </div>
                    <table
                        class="tblist"
                        border="0"
                        cellspacing="0"
                        cellspadding="0"
                    >
                        <tr>
                            <td class="online">松坝社区污水站</td>
                            <td>2020.01.01 15:20</td>
                            <td class="online">王浩</td>
                            <td class="right">合格</td>
                        </tr>
                        <tr>
                            <td class="online">松坝社区污水站</td>
                            <td>2020.01.01 15:20</td>
                            <td class="online">王浩</td>
                            <td class="right">合格</td>
                        </tr>
                        <tr>
                            <td class="online">松坝社区污水站</td>
                            <td>2020.01.01 15:20</td>
                            <td class="online">王浩</td>
                            <td class="right">合格</td>
                        </tr>
                        <tr>
                            <td class="online">松坝社区污水站</td>
                            <td>2020.01.01 15:20</td>
                            <td class="online">王浩</td>
                            <td class="right">合格</td>
                        </tr>
                        <tr>
                            <td class="online">松坝社区污水站</td>
                            <td>2020.01.01 15:20</td>
                            <td class="online">王浩</td>
                            <td class="err">不合格</td>
                        </tr>
                        <tr>
                            <td class="online">松坝社区污水站</td>
                            <td>2020.01.01 15:20</td>
                            <td class="online">王浩</td>
                            <td class="right">合格</td>
                        </tr>
                    </table>
                </td>

                <td class="con6">
                    <div class="title">问题排行表统计</div>
                    <ul class="dropmore tab2">
                        <li>全部</li>
                        <li>本月</li>
                        <li>本周</li>
                    </ul>
                    <div
                        id="problemEchart"
                        style="width: 100%; height: 220px"
                    ></div>
                </td>

                <td class="con7">
                    <div class="title">问题处理速度分析</div>
                    <ul class="dropmore tab2">
                        <li>全部</li>
                        <li>本月</li>
                        <li>本周</li>
                    </ul>
                    <div
                        id="problemDealEchart"
                        style="width: 100%; height: 220px"
                    ></div>
                </td>
            </tr>
        </table>
    </div>
</template>

<style lang="less" scoped>
.main {
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-weight: 400;
    .err {
        color: #ff0000;
    }
    .warn {
        color: #ffa200;
    }
    .offline {
        color: #aaa;
    }
    .online {
        color: #078dd4;
    }
    .right {
        color: #0a9400;
    }
    .icons {
        background: url(../assets/img/icons.png) no-repeat;
    }

    table {
        width: 100%;
        height: 100%;
        td {
            width: 27.6%;
            height: 250px;
            background: #ffffff;
            box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.04);
            border-radius: 8px;
            vertical-align: top;
            .tab2 {
                float: right;
                li {
                    float: left;
                    height: 16px;
                    line-height: 16px;
                    font-size: 12px;
                    color: #aaaaaa;
                    cursor: pointer;
                    padding: 0 10px;
                    border-right: 1px solid #aaaaaa;
                    &:last-child {
                        border: none;
                        padding-right: 0;
                    }
                    &.active {
                        color: #666;
                    }
                }
            }

            .dropmore {
                position: absolute;
                top: 16px;
                right: 16px;
                line-height: 26px;
            }

            .more {
                float: right;
                color: #078dd4;
                margin-left: 30px;
            }

            .tblist {
                width: calc(~"100% - 6px");
                height: auto;
                margin: 16px 3px;
                tr {
                    &:nth-child(2n) {
                        td {
                            background: rgba(245, 245, 245, 0.62);
                        }
                    }
                }
                td {
                    height: 34px;
                    box-shadow: none;
                    width: auto;
                    border-radius: 0px;
                    vertical-align: middle;
                    padding-left: 20px;
                }
            }

            &.con1 {
                ul {
                    display: flex;
                    flex-wrap: wrap;
                    align-content: flex-center;
                    align-items: center;
                    justify-content: space-around;
                    li {
                        width: 32%;
                        text-align: center;
                        .top {
                            b {
                                font-size: 40px;
                                font-family: Bahnschrift;
                                font-weight: bold;
                                line-height: 56px;
                                color: #032447;
                                display: block;
                            }
                            span {
                                font-size: 12px;
                                line-height: 16px;
                                color: #606060;
                            }
                        }

                        .bottom {
                            font-size: 30px;
                            line-height: 70px;
                            height: 72px;
                            border-radius: 5px;
                            margin: 45px 20px 30px;
                            position: relative;
                            i {
                                display: block;
                                width: 36px;
                                height: 36px;
                                position: absolute;
                                left: -18px;
                                top: 18px;
                                background: #fff;
                                &::before {
                                    content: "";
                                    position: absolute;
                                    display: block;
                                    width: 36px;
                                    height: 36px;
                                    background: url(../assets/img/icons.png)
                                        no-repeat;
                                }
                            }
                            span {
                                font-size: 12px;
                                line-height: 16px;
                                color: #52546d;
                                position: absolute;
                                right: 5px;
                                bottom: 5px;
                            }
                            b {
                                font-weight: 400;
                            }
                            &.co1 {
                                color: #078dd4;
                                text-shadow: 0px 6px 3px rgba(7, 141, 212, 0.16);
                                border: 1px solid rgba(7, 141, 212, 0.5);
                                i::before {
                                    background-position: 0 -93px;
                                }
                            }
                            &.co2 {
                                color: #21b4cb;
                                text-shadow: 0px 6px 3px
                                    rgba(49, 209, 234, 0.16);

                                border: 1px solid rgba(49, 209, 234, 0.5);
                                i::before {
                                    background-position: -54px -93px;
                                }
                            }
                            &.co3 {
                                color: #e17000;
                                text-shadow: 0px 6px 3px
                                    rgba(234, 141, 49, 0.16);

                                border: 1px solid rgba(234, 141, 49, 0.5);
                                i::before {
                                    background-position: -107px -93px;
                                }
                            }
                        }
                    }
                }

                .line {
                    margin: 0 6px 20px;
                    height: 1px;
                    background: linear-gradient(
                        270deg,
                        #ffffff 0%,
                        #d6d6d6 53%,
                        #fcfcfc 100%
                    );
                }

                .status-box {
                    .fr {
                        width: 30%;

                        li {
                            width: 100%;
                            height: 50px;
                            line-height: 50px;
                            font-size: 12px;
                            color: #3d3d3d;
                            text-align: left;
                            i {
                                width: 18px;
                                height: 5px;
                                display: inline-block;
                                margin-right: 10px;
                                border-radius: 3px;
                                &.online {
                                    background: linear-gradient(
                                        90deg,
                                        #078dd4 0%,
                                        #00d2cb 100%
                                    );
                                }
                                &.err {
                                    background: linear-gradient(
                                        90deg,
                                        #d407c0 0%,
                                        #d358e1 100%
                                    );
                                }
                                &.warn {
                                    background: linear-gradient(
                                        90deg,
                                        #d45907 0%,
                                        #ffcc65 100%
                                    );
                                }
                                &.offline {
                                    background: linear-gradient(
                                        90deg,
                                        #717171 0%,
                                        #cecece 100%
                                    );
                                }
                            }
                            b {
                                margin-left: 10px;
                                font-size: 28px;
                                font-weight: 400;
                                color: #1a1a1a;
                            }
                        }
                    }
                }
            }

            &.con2 {
                padding: 16px 16px 0;
                .tab1 {
                    li {
                        float: left;
                        width: 140px;
                        height: 36px;
                        line-height: 36px;
                        border-radius: 20px;
                        color: #aaaaaa;
                        background: rgba(0, 189, 219, 0.04);
                        text-align: center;
                        cursor: pointer;
                        margin-right: 14px;
                        &.active {
                            background: #00bddb;
                            color: #ffffff;
                        }
                    }
                }
                .statis_box {
                    margin-top: 30px;
                }
            }

            &.con3 {
                position: relative;
                .dropmore {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    line-height: 26px;
                    .el-dropdown {
                        display: inline-block;
                        padding: 0 15px;
                        height: 26px;
                        border: 1px solid #dedede;
                        border-radius: 13px;
                        font-size: 12px;
                        color: #078dd4;
                    }
                }
                .box {
                    .fl {
                        width: 134px;
                        height: 134px;
                        line-height: 134px;
                        background: url(../assets/img/icons.png) no-repeat;
                        background-position: 0 -155px;
                        text-align: center;
                        text-shadow: 0px 3px 6px rgba(0, 144, 154, 0.4);
                        margin-left: calc(~"(50% - 150px)/2");
                        margin-top: 50px;
                        font-size: 36px;
                        font-family: Bahnschrift;
                        font-weight: 400;
                        color: #00909a;
                    }
                    .fr {
                        width: 50%;
                    }
                    ul {
                        margin: 16px;
                        li {
                            padding: 0 5px 0 20px;
                            box-sizing: border-box;
                            height: 32px;
                            line-height: 32px;
                            font-size: 13px;
                            border-bottom: 1px dotted #dfdfdf;
                            span {
                                float: right;
                            }
                        }
                    }
                }
            }

            &.con4 {
                position: relative;

                i {
                    margin-right: 10px;
                    font-size: 18px;
                    vertical-align: -2px;
                }
            }

            &.con5 {
                position: relative;
                .dropmore {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    line-height: 26px;
                }
                ul {
                    margin: 16px 3px;
                    li {
                        padding: 0 5px 0 20px;
                        box-sizing: border-box;
                        height: 34px;
                        line-height: 34px;
                        font-size: 13px;
                        &:nth-child(2n) {
                            background: rgba(245, 245, 245, 0.62);
                        }
                        .fl {
                            margin-right: 22px;
                            i {
                                margin-right: 10px;
                                font-size: 18px;
                                vertical-align: -2px;
                            }
                        }
                    }
                }
            }

            &.con6 {
                position: relative;
            }

            &.con7 {
                position: relative;
            }
        }
    }
    .title {
        height: 20px;
        font-size: 16px;
        line-height: 20px;
        color: #535353;
        margin: 12px;
    }
}
</style>

<script>
var echarts = require("echarts");

export default {
    data() {
        return {
            tabData: [
                "处理水量健康表",
                "单水能耗健康表",
                "能耗健康表",
                "污水站健康表",
            ],
            tabIndex: 0,
            dateTab: ["年统计", "月统计"],
            dateTabIndex: 0,

            dataList: [
                {
                    xname: [],
                    list: [[], [], [], []],
                },
                {
                    xname: [],
                    list: [[], [], [], []],
                },
            ],
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.getData();
            this.statusEchart();
            this.problemEchart();
            this.problemDealEchart();
        });
    },
    methods: {
        // 生成n个随机数
        getRandom(n, m) {
            var arr = [];
            for (let i = 0; i < n; i++) {
                arr.push(parseInt(Math.random() * m));
            }

            return arr;
        },
        getData() {
            for (let i = 1; i <= 31; i++) {
                this.dataList[1].xname.push(i + "日");

                if (i <= 12) this.dataList[0].xname.push(i + "月");

                for (let j = 0; j < 4; j++) {
                    this.dataList[1].list[j] = this.getRandom(31, 100);
                    if (i <= 12)
                        this.dataList[0].list[j] = this.getRandom(12, 100);
                }
            }

            this.waterEchart();
        },
        // 处理水量健康表
        waterEchart() {
            var myChart = echarts.init(document.getElementById("waterEchart"));

            var option = {
                color: ["#3264C7"],
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        // 坐标轴指示器，坐标轴触发有效
                        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter: function (params) {
                        var relVal = params[0].name;
                        for (var i = 0, l = params.length; i < l; i++) {
                            relVal +=
                                "<br/>" +
                                params[i].marker +
                                params[i].seriesName +
                                " : " +
                                params[i].value +
                                "万m³";
                        }
                        return relVal;
                    },
                },
                grid: {
                    left: 40,
                    top: 30,
                    right: 10,
                    bottom: 30,
                },
                xAxis: {
                    data: this.dataList[this.dateTabIndex].xname,
                    axisTick: {
                        alignWithLabel: true,
                    },
                    nameTextStyle: {
                        color: "#07a9e0",
                    },
                    splitLine: {
                        show: false,
                    },
                    //设置轴线的属性
                    axisLine: {
                        lineStyle: {
                            color: "#82B6E2",
                        },
                    },
                },
                yAxis: {
                    type: "value",
                    nameTextStyle: {
                        color: "#07a9e0",
                    },
                    splitLine: {
                        show: false,
                    },
                    //设置轴线的属性
                    axisLine: {
                        lineStyle: {
                            color: "#82B6E2",
                        },
                    },
                },
                series: [
                    {
                        name: "总出水量",
                        type: "bar",
                        barWidth: "60%",
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        offset: 0,
                                        color: "rgba(28, 122, 204, 1)",
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(49, 206, 234, 1)",
                                    },
                                ]
                            ),
                        },
                        data: this.dataList[this.dateTabIndex].list[0],
                    },
                ],
            };

            myChart.setOption(option);
        },

        // 单水能耗健康表
        singleWaterEchart() {
            var myChart = echarts.init(
                document.getElementById("singleWaterEchart")
            );

            var option = {
                color: ["#3264C7"],
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        // 坐标轴指示器，坐标轴触发有效
                        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter: function (params) {
                        var relVal = params[0].name;
                        for (var i = 0, l = params.length; i < l; i++) {
                            relVal +=
                                "<br/>" +
                                params[i].marker +
                                params[i].seriesName +
                                " : " +
                                params[i].value +
                                "KW·h/m³";
                        }
                        return relVal;
                    },
                },
                grid: {
                    left: 40,
                    top: 30,
                    right: 60,
                    bottom: 20,
                },
                xAxis: {
                    data: this.dataList[this.dateTabIndex].xname,
                    axisTick: {
                        alignWithLabel: true,
                    },
                    nameTextStyle: {
                        color: "#07a9e0",
                    },
                    splitLine: {
                        show: false,
                    },
                    //设置轴线的属性
                    axisLine: {
                        lineStyle: {
                            color: "#07a9e0",
                        },
                    },
                },
                yAxis: {
                    type: "value",
                    nameTextStyle: {
                        color: "#07a9e0",
                    },
                    splitLine: {
                        show: false,
                    },
                    //设置轴线的属性
                    axisLine: {
                        lineStyle: {
                            color: "#07a9e0",
                        },
                    },
                },
                series: [
                    {
                        name: "单水能耗",
                        type: "bar",
                        barWidth: "60%",
                        data: this.dataList[this.dateTabIndex].list[1],
                    },
                ],
            };

            myChart.setOption(option);
        },

        // 能耗健康表
        energyEchart() {
            var myChart = echarts.init(document.getElementById("energyEchart"));

            var option = {
                color: ["#3264C7"],
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        // 坐标轴指示器，坐标轴触发有效
                        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter: function (params) {
                        var relVal = params[0].name;
                        for (var i = 0, l = params.length; i < l; i++) {
                            relVal +=
                                "<br/>" +
                                params[i].marker +
                                params[i].seriesName +
                                " : " +
                                params[i].value +
                                "KW·h";
                        }
                        return relVal;
                    },
                },
                grid: {
                    left: 40,
                    top: 30,
                    right: 60,
                    bottom: 20,
                },
                xAxis: {
                    data: this.dataList[this.dateTabIndex].xname,
                    axisTick: {
                        alignWithLabel: true,
                    },
                    nameTextStyle: {
                        color: "#07a9e0",
                    },
                    splitLine: {
                        show: false,
                    },
                    //设置轴线的属性
                    axisLine: {
                        lineStyle: {
                            color: "#07a9e0",
                        },
                    },
                },
                yAxis: {
                    type: "value",
                    nameTextStyle: {
                        color: "#07a9e0",
                    },
                    splitLine: {
                        show: false,
                    },
                    //设置轴线的属性
                    axisLine: {
                        lineStyle: {
                            color: "#07a9e0",
                        },
                    },
                },
                series: [
                    {
                        name: "总能耗",
                        type: "bar",
                        barWidth: "60%",
                        data: this.dataList[this.dateTabIndex].list[2],
                    },
                ],
            };

            myChart.setOption(option);
        },

        // 状态统计
        statusEchart() {
            let mychart = echarts.init(document.getElementById("statusEchart"));

            let option = {
                tooltip: {
                    trigger: "item",
                    position: ["33%", "38%"],
                    formatter: "{d}%",
                    backgroundColor: "transparent",
                    textStyle: {
                        fontSize: 26,
                        color: "#AA2AD7",
                        textShadowColor: "rgba(170, 42, 215, 0.4)",
                        textShadowBlur: 6,
                        textShadowOffsetY: 3,
                    },
                },
                legend: {
                    show: false,
                    orient: "vertical",
                    right: 0,
                    data: ["在线", "异常", "故障", "离线"],
                    itemWidth: 18,
                    itemHeight: 5,
                },
                series: [
                    {
                        name: "访问来源",
                        type: "pie",
                        radius: ["45%", "70%"],
                        avoidLabelOverlap: false,
                        label: {
                            position: "outside",
                            fontSize: 14,
                            formatter: function (params) {
                                return (
                                    "{a|" +
                                    params.value +
                                    "}\n" +
                                    "{b|" +
                                    params.name +
                                    "}"
                                );
                            },
                            rich: {
                                a: {
                                    color: "#2E2E2E",
                                    fontSize: 20,
                                    lineHeight: 30,
                                },
                                b: {
                                    color: "#606060",
                                    fontSize: 12,
                                },
                            },
                        },

                        labelLine: {
                            lineStyle: {
                                width: 2,
                            },
                        },
                        data: [
                            {
                                value: 240,
                                name: "在线",
                                itemStyle: {
                                    color: "#30D7FD",
                                    shadowColor: "rgba(40, 198, 234, 0.4)",
                                    shadowOffsetX: 1,
                                    shadowOffsetY: 6,
                                    shadowBlur: 6,
                                },
                            },
                            {
                                value: 89,
                                name: "异常",
                                itemStyle: {
                                    color: "#FFCE52",
                                    shadowColor: "rgba(255, 206, 82, 0.4)",
                                    shadowOffsetX: 1,
                                    shadowOffsetY: 6,
                                    shadowBlur: 6,
                                },
                            },
                            {
                                value: 42,
                                name: "故障",
                                itemStyle: {
                                    color: "#F137B0",
                                    shadowColor: "rgba(241, 55, 176, 0.4)",
                                    shadowOffsetX: 1,
                                    shadowOffsetY: 6,
                                    shadowBlur: 6,
                                },
                            },
                            {
                                value: 45,
                                name: "离线",
                                itemStyle: {
                                    color: "#B5B5B5",
                                    shadowColor: "rgba(181, 181, 181, 0.4)",
                                    shadowOffsetX: 1,
                                    shadowOffsetY: 6,
                                    shadowBlur: 6,
                                },
                            },
                        ],
                    },
                ],
            };

            mychart.setOption(option);
        },

        // 问题排行表统计
        problemEchart() {
            let mychart = echarts.init(
                document.getElementById("problemEchart")
            );

            // 指定图表的配置项和数据
            var option = {
                grid: {
                    left: 80,
                    top: 10,
                    right: 10,
                    bottom: 10,
                },
                toolbox: {
                    show: true,
                },
                calculable: true,
                xAxis: [
                    {
                        type: "value",
                        show: false,
                        // 控制网格线是否显示
                        splitLine: {
                            show: false,
                        },
                    },
                ],
                yAxis: [
                    {
                        type: "category",
                        data: [
                            {
                                value: "水池塌陷",
                                textStyle: {
                                    color: "#aaa",
                                },
                            },
                            {
                                value: "阀门松动",
                                textStyle: {
                                    color: "#aaa",
                                },
                            },
                            {
                                value: "药剂短缺",
                                textStyle: {
                                    color: "#aaa",
                                },
                            },
                            {
                                value: "耗材更换",
                                textStyle: {
                                    color: "#aaa",
                                },
                            },
                            {
                                value: "电机故障",
                                textStyle: {
                                    color: "#aaa",
                                },
                            },
                            {
                                value: "电压问题",
                                textStyle: {
                                    color: "#aaa",
                                },
                            },
                            {
                                value: "水量过大",
                                textStyle: {
                                    color: "#aaa",
                                },
                            },
                            {
                                value: "通讯中断",
                                textStyle: {
                                    color: "#aaa",
                                },
                            },
                        ],
                        //设置轴线的属性
                        axisLine: {
                            lineStyle: {
                                color: "#707070",
                            },
                        },
                    },
                ],
                series: [
                    {
                        type: "bar",
                        barWidth: "40%",
                        data: [
                            {
                                value: 10,
                                itemStyle: {
                                    color: "#63C848",
                                },
                            },
                            {
                                value: 49,
                                itemStyle: {
                                    color: "#FFCE52",
                                },
                            },
                            {
                                value: 24,
                                itemStyle: {
                                    color: "#E87386",
                                },
                            },
                            {
                                value: 67,
                                itemStyle: {
                                    color: "#00BCFF",
                                },
                            },
                            {
                                value: 36,
                                itemStyle: {
                                    color: "#FECE52",
                                },
                            },
                            {
                                value: 41,
                                itemStyle: {
                                    color: "#E87386",
                                },
                            },
                            {
                                value: 30,
                                itemStyle: {
                                    color: "#08D6CE",
                                },
                            },
                            {
                                value: 54,
                                itemStyle: {
                                    color: "#FF3091",
                                },
                            },
                        ],
                        /* 显示柱子数据 */
                        label: {
                            normal: {
                                show: true,
                                // 数据在柱子头部显示
                                position: "right",
                                textStyle: {
                                    color: "#fff",
                                    fontSize: 13,
                                },
                            },
                        },
                    },
                ],
            };

            // 绘制图表
            mychart.setOption(option);
        },

        // 问题处理速度分析
        problemDealEchart() {
            let mychart = echarts.init(
                document.getElementById("problemDealEchart")
            );

            let option = {
                grid: {
                    top: 20,
                    left: 20,
                    right: 0,
                    bottom: 20,
                    containLabel: true,
                },
                xAxis: {
                    type: "category",
                    data: [
                        "3天",
                        "4-7天",
                        "8-14天",
                        "15-30天",
                        "1月",
                        "3月",
                        "3月以上",
                    ],
                    nameTextStyle: {
                        color: "#fff",
                    },

                    //设置轴线的属性
                    axisLine: {
                        lineStyle: {
                            color: "#707070",
                        },
                    },
                },
                yAxis: {
                    type: "value",
                    show: true,
                    axisLine: {
                        show: false,
                    },
                    splitLine: {
                        interval: 1,
                        lineStyle: {
                            color: "rgba(112, 112, 112, 0.36)",
                            type: "dashed",
                        },
                    },
                },
                series: [
                    {
                        name: "油烟浓度",
                        data: [0, 12, 8, 20, 6, 15, 0],
                        type: "line",
                        smooth: true,
                        symbol: "circle",
                        color: "#078DD4",
                        symbolSize: 2,
                        areaStyle: {
                            color: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: "rgba(7, 141, 212, 0.3)", // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(20, 207, 188, 0.3)", // 100% 处的颜色
                                    },
                                ],
                                global: false, // 缺省为 false
                            },
                        },
                    },
                ],
            };

            mychart.setOption(option);
        },
    },
};
</script>