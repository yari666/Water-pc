module.exports = {
    name: 'XXXX市监管部门',
    statisData: [  //数据统计
        {
            name: '业主',
            img: '../src/assets/img/2.png',
            num: '310'
        }, {
            name: '污水站',
            img: '../src/assets/img/3.png',
            num: '310'
        }, {
            name: '设备/套',
            img: '../src/assets/img/4.png',
            num: '620'
        },
    ],
    energyData: [
        {
            name: '总出水量',
            num: '930万m³'
        },
        {
            name: '总电量',
            num: '1191KW.h'
        },
        {
            name: '总能耗',
            num: 'XXXX'
        },
    ],
    statusData: [  //状态统计
        {
            name: '在线',
            img: '../src/assets/img/10.png',
            status: 1,
            num: 200
        },
        {
            name: '故障',
            img: '../src/assets/img/11.png',
            status: 2,
            num: 20
        },
        {
            name: '异常',
            img: '../src/assets/img/12.png',
            status: 3,
            num: 30
        },
        {
            name: '离线',
            img: '../src/assets/img/13.png',
            status: 4,
            num: 50
        }
    ],
    data: [
        {
            name: "区监管部门A",
            num: 80, //污水站数量
            statisData: [  //数据统计
                {
                    name: '业主',
                    img: '../src/assets/img/2.png',
                    num: 80
                }, {
                    name: '污水站',
                    img: '../src/assets/img/3.png',
                    num: 80
                }, {
                    name: '设备/套',
                    img: '../src/assets/img/4.png',
                    num: 40
                },
            ],
            energyData: [
                {
                    name: '总出水量',
                    num: '240万m³'
                },
                {
                    name: '总电量',
                    num: '183KW.h'
                },
                {
                    name: '总能耗',
                    num: 'XXXX'
                },
            ],
            statusData: [  //状态统计
                {
                    name: '在线',
                    img: '../src/assets/img/10.png',
                    status: 1,
                    num: 60
                },
                {
                    name: '故障',
                    img: '../src/assets/img/11.png',
                    status: 2,
                    num: 0
                },
                {
                    name: '异常',
                    img: '../src/assets/img/12.png',
                    status: 3,
                    num: 10
                },
                {
                    name: '离线',
                    img: '../src/assets/img/13.png',
                    status: 4,
                    num: 10
                }
            ],
            seweageData: [
                {
                    name: "污水站A1",
                    lng: 116.40998716842314, //坐标
                    lat: 39.9106119602776,//坐标
                    status: 1,//污水站状态  1在线 2故障 3异常 4离线
                    imgUrl: "../src/assets/img/point1.png",
                    id: 1001,
                    belongOwner: '苏州园区四季花园小区',  //所属业主
                    belongItem: 'XXXXXXXXXXXXXXXXXXXXXXXXX',  //所属项目
                    belongCompany: '新合盛资产管理公司',  //运维单位
                    statisData: [  //数据统计
                        {
                            name: '设备/套',
                            img: '../src/assets/img/4.png',
                            num: 23
                        },
                        {
                            name: '设备类型',
                            num: 'AOO / BMR'
                        },

                    ],
                    energyData: [
                        {
                            name: '总出水量',
                            num: '110万m³'
                        },
                        {
                            name: '总电量',
                            num: '78KW.h'
                        },
                        {
                            name: '总能耗',
                            num: 'XXXX'
                        },
                    ],
                    statusData: [  //状态统计
                        {
                            name: '在线',
                            img: '../src/assets/img/10.png',
                            status: 1,
                            num: 4
                        },
                        {
                            name: '故障',
                            img: '../src/assets/img/11.png',
                            status: 2,
                            num: 0
                        },
                        {
                            name: '异常',
                            img: '../src/assets/img/12.png',
                            status: 3,
                            num: 1
                        },
                        {
                            name: '离线',
                            img: '../src/assets/img/13.png',
                            status: 4,
                            num: 2
                        }
                    ],
                },
                {
                    name: "污水站A2",
                    lng: 116.37582522407905,
                    lat: 39.91249784102504,
                    status: 1,
                    imgUrl: "https://www.wangyill.com/img22/4.png",
                    id: 1002,
                    belongOwner: '苏州园区四季花园小区',  //所属业主
                    belongItem: 'XXXXXXXXXXXXXXXXXXXXXXXXX',  //所属项目
                    belongCompany: '新合盛资产管理公司',  //运维单位
                    statisData: [  //数据统计
                        {
                            name: '设备/套',
                            img: '../src/assets/img/4.png',
                            num: 15
                        },
                        {
                            name: '设备类型',
                            num: 'AOO / BMR'
                        },

                    ],
                    energyData: [
                        {
                            name: '总出水量',
                            num: '21万m³'
                        },
                        {
                            name: '总电量',
                            num: '13KW.h'
                        },
                        {
                            name: '总能耗',
                            num: 'XXXX'
                        },
                    ],
                    statusData: [  //状态统计
                        {
                            name: '在线',
                            img: '../src/assets/img/10.png',
                            status: 1,
                            num: 8
                        },
                        {
                            name: '故障',
                            img: '../src/assets/img/11.png',
                            status: 2,
                            num: 2
                        },
                        {
                            name: '异常',
                            img: '../src/assets/img/12.png',
                            status: 3,
                            num: 1
                        },
                        {
                            name: '离线',
                            img: '../src/assets/img/13.png',
                            status: 4,
                            num: 1
                        }
                    ],
                },
                {
                    name: "污水站A3",
                    lng: 116.39727677676844,
                    lat: 39.90821207380472,
                    status: 1,
                    imgUrl: "https://www.wangyill.com/img22/4.png",
                    id: 1003,
                    belongOwner: '苏州园区四季花园小区',  //所属业主
                    belongItem: 'XXXXXXXXXXXXXXXXXXXXXXXXX',  //所属项目
                    belongCompany: '新合盛资产管理公司',  //运维单位
                    statisData: [  //数据统计
                        {
                            name: '设备/套',
                            img: '../src/assets/img/4.png',
                            num: 17
                        },
                        {
                            name: '设备类型',
                            num: 'AOO / BMR'
                        },

                    ],
                    energyData: [
                        {
                            name: '总出水量',
                            num: '123万m³'
                        },
                        {
                            name: '总电量',
                            num: '111KW.h'
                        },
                        {
                            name: '总能耗',
                            num: 'XXXX'
                        },
                    ],
                    statusData: [  //状态统计
                        {
                            name: '在线',
                            img: '../src/assets/img/10.png',
                            status: 1,
                            num: 6
                        },
                        {
                            name: '故障',
                            img: '../src/assets/img/11.png',
                            status: 2,
                            num: 0
                        },
                        {
                            name: '异常',
                            img: '../src/assets/img/12.png',
                            status: 3,
                            num: 0
                        },
                        {
                            name: '离线',
                            img: '../src/assets/img/13.png',
                            status: 4,
                            num: 1
                        }
                    ],
                },
                {
                    name: "污水站A4",
                    lng: 116.376826216510025,
                    lat: 39.91970864568317,
                    status: 3,
                    imgUrl: "https://www.wangyill.com/img22/3.png",
                    id: 1004,
                    belongOwner: '苏州园区四季花园小区',  //所属业主
                    belongItem: 'XXXXXXXXXXXXXXXXXXXXXXXXX',  //所属项目
                    belongCompany: '新合盛资产管理公司',  //运维单位
                    statisData: [  //数据统计
                        {
                            name: '设备/套',
                            img: '../src/assets/img/4.png',
                            num: 35
                        },
                        {
                            name: '设备类型',
                            num: 'AOO / BMR'
                        },

                    ],
                    energyData: [
                        {
                            name: '总出水量',
                            num: '345万m³'
                        },
                        {
                            name: '总电量',
                            num: '238KW.h'
                        },
                        {
                            name: '总能耗',
                            num: 'XXXX'
                        },
                    ],
                    statusData: [  //状态统计
                        {
                            name: '在线',
                            img: '../src/assets/img/10.png',
                            status: 1,
                            num: 30
                        },
                        {
                            name: '故障',
                            img: '../src/assets/img/11.png',
                            status: 2,
                            num: 2
                        },
                        {
                            name: '异常',
                            img: '../src/assets/img/12.png',
                            status: 3,
                            num: 2
                        },
                        {
                            name: '离线',
                            img: '../src/assets/img/13.png',
                            status: 4,
                            num: 1
                        }
                    ],
                },
                {
                    name: "污水站A5",
                    lng: 116.38913656562372,
                    lat: 39.91675388277038,
                    status: 1,
                    imgUrl: "https://www.wangyill.com/img22/4.png",
                    id: 1005,
                    belongOwner: '苏州园区四季花园小区',  //所属业主
                    belongItem: 'XXXXXXXXXXXXXXXXXXXXXXXXX',  //所属项目
                    belongCompany: '新合盛资产管理公司',  //运维单位
                    statisData: [  //数据统计
                        {
                            name: '设备/套',
                            img: '../src/assets/img/4.png',
                            num: 9
                        },
                        {
                            name: '设备类型',
                            num: 'AOO / BMR'
                        },

                    ],
                    energyData: [
                        {
                            name: '总出水量',
                            num: '295万m³'
                        },
                        {
                            name: '总电量',
                            num: '178KW.h'
                        },
                        {
                            name: '总能耗',
                            num: 'XXXX'
                        },
                    ],
                    statusData: [  //状态统计
                        {
                            name: '在线',
                            img: '../src/assets/img/10.png',
                            status: 1,
                            num: 6
                        },
                        {
                            name: '故障',
                            img: '../src/assets/img/11.png',
                            status: 2,
                            num: 2
                        },
                        {
                            name: '异常',
                            img: '../src/assets/img/12.png',
                            status: 3,
                            num: 1
                        },
                        {
                            name: '离线',
                            img: '../src/assets/img/13.png',
                            status: 4,
                            num: 0
                        }
                    ],
                },
                {
                    name: "污水站A6",
                    lng: 116.40950849569916,
                    lat: 39.90552333670697,
                    status: 4,
                    imgUrl: "https://www.wangyill.com/img22/4.png",
                    id: 1006,
                    belongOwner: '苏州园区四季花园小区',  //所属业主
                    belongItem: 'XXXXXXXXXXXXXXXXXXXXXXXXX',  //所属项目
                    belongCompany: '新合盛资产管理公司',  //运维单位
                    statisData: [  //数据统计
                        {
                            name: '设备/套',
                            img: '../src/assets/img/4.png',
                            num: 10
                        },
                        {
                            name: '设备类型',
                            num: 'AOO / BMR'
                        },

                    ],
                    energyData: [
                        {
                            name: '总出水量',
                            num: '133万m³'
                        },
                        {
                            name: '总电量',
                            num: '154KW.h'
                        },
                        {
                            name: '总能耗',
                            num: 'XXXX'
                        },
                    ],
                    statusData: [  //状态统计
                        {
                            name: '在线',
                            img: '../src/assets/img/10.png',
                            status: 1,
                            num: 7
                        },
                        {
                            name: '故障',
                            img: '../src/assets/img/11.png',
                            status: 2,
                            num: 1
                        },
                        {
                            name: '异常',
                            img: '../src/assets/img/12.png',
                            status: 3,
                            num: 1
                        },
                        {
                            name: '离线',
                            img: '../src/assets/img/13.png',
                            status: 4,
                            num: 1
                        }
                    ],
                },
                {
                    name: "污水站A7",
                    lng: 116.404,
                    lat: 39.915,
                    status: 1,
                    imgUrl: "https://www.wangyill.com/img22/4.png",
                    id: 1007,
                    belongOwner: '苏州园区四季花园小区',  //所属业主
                    belongItem: 'XXXXXXXXXXXXXXXXXXXXXXXXX',  //所属项目
                    belongCompany: '新合盛资产管理公司',  //运维单位
                    statisData: [  //数据统计
                        {
                            name: '设备/套',
                            img: '../src/assets/img/4.png',
                            num: 12
                        },
                        {
                            name: '设备类型',
                            num: 'AOO / BMR'
                        },

                    ],
                    energyData: [
                        {
                            name: '总出水量',
                            num: '251万m³'
                        },
                        {
                            name: '总电量',
                            num: '140KW.h'
                        },
                        {
                            name: '总能耗',
                            num: 'XXXX'
                        },
                    ],
                    statusData: [  //状态统计
                        {
                            name: '在线',
                            img: '../src/assets/img/10.png',
                            status: 1,
                            num: 10
                        },
                        {
                            name: '故障',
                            img: '../src/assets/img/11.png',
                            status: 2,
                            num: 0
                        },
                        {
                            name: '异常',
                            img: '../src/assets/img/12.png',
                            status: 3,
                            num: 1
                        },
                        {
                            name: '离线',
                            img: '../src/assets/img/13.png',
                            status: 4,
                            num: 1
                        }
                    ],
                },
                {
                    name: "污水站A8",
                    lng: 116.40525591689436,
                    lat: 39.927952823412305,
                    status: 2,
                    imgUrl: "https://www.wangyill.com/img22/2.png",
                    id: 1008,
                    belongOwner: '苏州园区四季花园小区',  //所属业主
                    belongItem: 'XXXXXXXXXXXXXXXXXXXXXXXXX',  //所属项目
                    belongCompany: '新合盛资产管理公司',  //运维单位
                    statisData: [  //数据统计
                        {
                            name: '设备/套',
                            img: '../src/assets/img/4.png',
                            num: 22
                        },
                        {
                            name: '设备类型',
                            num: 'AOO / BMR'
                        },

                    ],
                    energyData: [
                        {
                            name: '总出水量',
                            num: '99万m³'
                        },
                        {
                            name: '总电量',
                            num: '78KW.h'
                        },
                        {
                            name: '总能耗',
                            num: 'XXXX'
                        },
                    ],
                    statusData: [  //状态统计
                        {
                            name: '在线',
                            img: '../src/assets/img/10.png',
                            status: 1,
                            num: 16
                        },
                        {
                            name: '故障',
                            img: '../src/assets/img/11.png',
                            status: 2,
                            num: 4
                        },
                        {
                            name: '异常',
                            img: '../src/assets/img/12.png',
                            status: 3,
                            num: 1
                        },
                        {
                            name: '离线',
                            img: '../src/assets/img/13.png',
                            status: 4,
                            num: 1
                        }
                    ],
                }
            ]
        },
        {
            name: "区监管部门B",
            num: 40,
            statisData: [  //数据统计
                {
                    name: '业主',
                    img: '../src/assets/img/2.png',
                    num: 80
                }, {
                    name: '污水站',
                    img: '../src/assets/img/3.png',
                    num: 40
                }, {
                    name: '设备/套',
                    img: '../src/assets/img/4.png',
                    num: 82
                },
            ],
            energyData: [
                {
                    name: '总出水量',
                    num: '180万m³'
                },
                {
                    name: '总电量',
                    num: '266KW.h'
                },
                {
                    name: '总能耗',
                    num: 'XXXX'
                },
            ],
            statusData: [  //状态统计
                {
                    name: '在线',
                    img: '../src/assets/img/10.png',
                    status: 1,
                    num: 30
                },
                {
                    name: '故障',
                    img: '../src/assets/img/11.png',
                    status: 2,
                    num: 2
                },
                {
                    name: '异常',
                    img: '../src/assets/img/12.png',
                    status: 3,
                    num: 3
                },
                {
                    name: '离线',
                    img: '../src/assets/img/13.png',
                    status: 4,
                    num: 5
                }
            ],
            seweageData: [
                {
                    name: "污水站B1",
                    lng: 116.3748056596991,
                    lat: 39.93742277914235,
                    status: 1,
                    imgUrl: "https://www.wangyill.com/img22/4.png",
                    id: 1009,
                    belongOwner: '苏州园区四季花园小区',  //所属业主
                    belongItem: 'XXXXXXXXXXXXXXXXXXXXXXXXX',  //所属项目
                    belongCompany: '新合盛资产管理公司',  //运维单位
                    statisData: [  //数据统计
                        {
                            name: '设备/套',
                            img: '../src/assets/img/4.png',
                            num: 20
                        },
                        {
                            name: '设备类型',
                            num: 'AOO / BMR'
                        },

                    ],
                    statusData: [  //状态统计
                        {
                            name: '在线',
                            img: '../src/assets/img/10.png',
                            status: 1,
                            num: 16
                        },
                        {
                            name: '故障',
                            img: '../src/assets/img/11.png',
                            status: 2,
                            num: 2
                        },
                        {
                            name: '异常',
                            img: '../src/assets/img/12.png',
                            status: 3,
                            num: 1
                        },
                        {
                            name: '离线',
                            img: '../src/assets/img/13.png',
                            status: 4,
                            num: 1
                        }
                    ],
                },
                {
                    name: "污水站B2",
                    lng: 116.36992389898921,
                    lat: 39.9142197927125,
                    status: 1,
                    imgUrl: "https://www.wangyill.com/img22/4.png",
                    id: 1010,
                    belongOwner: '苏州园区四季花园小区',  //所属业主
                    belongItem: 'XXXXXXXXXXXXXXXXXXXXXXXXX',  //所属项目
                    belongCompany: '新合盛资产管理公司',  //运维单位
                    statisData: [  //数据统计
                        {
                            name: '设备/套',
                            img: '../src/assets/img/4.png',
                            num: 6
                        },
                        {
                            name: '设备类型',
                            num: 'AOO / BMR'
                        },

                    ],
                    energyData: [
                        {
                            name: '总出水量',
                            num: '122万m³'
                        },
                        {
                            name: '总电量',
                            num: '166KW.h'
                        },
                        {
                            name: '总能耗',
                            num: 'XXXX'
                        },
                    ],
                    statusData: [  //状态统计
                        {
                            name: '在线',
                            img: '../src/assets/img/10.png',
                            status: 1,
                            num: 6
                        },
                        {
                            name: '故障',
                            img: '../src/assets/img/11.png',
                            status: 2,
                            num: 0
                        },
                        {
                            name: '异常',
                            img: '../src/assets/img/12.png',
                            status: 3,
                            num: 0
                        },
                        {
                            name: '离线',
                            img: '../src/assets/img/13.png',
                            status: 4,
                            num: 0
                        }
                    ],
                },
                {
                    name: "污水站B3",
                    lng: 116.37288130375941,
                    lat: 39.92868653232834,
                    status: 1,
                    imgUrl: "https://www.wangyill.com/img22/4.png",
                    id: 1011,
                    belongOwner: '苏州园区四季花园小区',  //所属业主
                    belongItem: 'XXXXXXXXXXXXXXXXXXXXXXXXX',  //所属项目
                    belongCompany: '新合盛资产管理公司',  //运维单位
                    statisData: [  //数据统计
                        {
                            name: '设备/套',
                            img: '../src/assets/img/4.png',
                            num: 12
                        },
                        {
                            name: '设备类型',
                            num: 'AOO / BMR'
                        },

                    ],
                    energyData: [
                        {
                            name: '总出水量',
                            num: '219万m³'
                        },
                        {
                            name: '总电量',
                            num: '164KW.h'
                        },
                        {
                            name: '总能耗',
                            num: 'XXXX'
                        },
                    ],
                    statusData: [  //状态统计
                        {
                            name: '在线',
                            img: '../src/assets/img/10.png',
                            status: 1,
                            num: 9
                        },
                        {
                            name: '故障',
                            img: '../src/assets/img/11.png',
                            status: 2,
                            num: 1
                        },
                        {
                            name: '异常',
                            img: '../src/assets/img/12.png',
                            status: 3,
                            num: 1
                        },
                        {
                            name: '离线',
                            img: '../src/assets/img/13.png',
                            status: 4,
                            num: 1
                        }
                    ],
                },
                {
                    name: "污水站B4",
                    lng: 116.41597950229028,
                    lat: 39.91034086234045,
                    status: 3,
                    imgUrl: "https://www.wangyill.com/img22/3.png",
                    id: 1012,
                    belongOwner: '苏州园区四季花园小区',  //所属业主
                    belongItem: 'XXXXXXXXXXXXXXXXXXXXXXXXX',  //所属项目
                    belongCompany: '新合盛资产管理公司',  //运维单位
                    statisData: [  //数据统计
                        {
                            name: '设备/套',
                            img: '../src/assets/img/4.png',
                            num: 23
                        },
                        {
                            name: '设备类型',
                            num: 'AOO / BMR'
                        },

                    ],
                    energyData: [
                        {
                            name: '总出水量',
                            num: '138万m³'
                        },
                        {
                            name: '总电量',
                            num: '263KW.h'
                        },
                        {
                            name: '总能耗',
                            num: 'XXXX'
                        },
                    ],
                    statusData: [  //状态统计
                        {
                            name: '在线',
                            img: '../src/assets/img/10.png',
                            status: 1,
                            num: 16
                        },
                        {
                            name: '故障',
                            img: '../src/assets/img/11.png',
                            status: 2,
                            num: 2
                        },
                        {
                            name: '异常',
                            img: '../src/assets/img/12.png',
                            status: 3,
                            num: 2
                        },
                        {
                            name: '离线',
                            img: '../src/assets/img/13.png',
                            status: 4,
                            num: 3
                        }
                    ],
                }
            ]
        },
        {
            name: "区监管部门C",
            num: 60,
            statisData: [  //数据统计
                {
                    name: '业主',
                    img: '../src/assets/img/2.png',
                    num: 58
                }, {
                    name: '污水站',
                    img: '../src/assets/img/3.png',
                    num: 60
                }, {
                    name: '设备/套',
                    img: '../src/assets/img/4.png',
                    num: 121
                },
            ],
            energyData: [
                {
                    name: '总出水量',
                    num: '450万m³'
                },
                {
                    name: '总电量',
                    num: '888KW.h'
                },
                {
                    name: '总能耗',
                    num: 'XXXX'
                },
            ],
            statusData: [  //状态统计
                {
                    name: '在线',
                    img: '../src/assets/img/10.png',
                    status: 1,
                    num: 48
                },
                {
                    name: '故障',
                    img: '../src/assets/img/11.png',
                    status: 2,
                    num: 5
                },
                {
                    name: '异常',
                    img: '../src/assets/img/12.png',
                    status: 3,
                    num: 2
                },
                {
                    name: '离线',
                    img: '../src/assets/img/13.png',
                    status: 4,
                    num: 5
                }
            ],
            seweageData: [
                {
                    name: "污水站C1",
                    lng: 116.37019096786375,
                    lat: 39.927736593107475,
                    status: 1,
                    imgUrl: "https://www.wangyill.com/img22/4.png",
                    id: 1013,
                    belongOwner: '苏州园区四季花园小区',  //所属业主
                    belongItem: 'XXXXXXXXXXXXXXXXXXXXXXXXX',  //所属项目
                    belongCompany: '新合盛资产管理公司',  //运维单位
                    statisData: [  //数据统计
                        {
                            name: '设备/套',
                            img: '../src/assets/img/4.png',
                            num: 23
                        },
                        {
                            name: '设备类型',
                            num: 'AOO / BMR'
                        },

                    ],
                    energyData: [
                        {
                            name: '总出水量',
                            num: '222万m³'
                        },
                        {
                            name: '总电量',
                            num: '278KW.h'
                        },
                        {
                            name: '总能耗',
                            num: 'XXXX'
                        },
                    ],
                    statusData: [  //状态统计
                        {
                            name: '在线',
                            img: '../src/assets/img/10.png',
                            status: 1,
                            num: 18
                        },
                        {
                            name: '故障',
                            img: '../src/assets/img/11.png',
                            status: 2,
                            num: 3
                        },
                        {
                            name: '异常',
                            img: '../src/assets/img/12.png',
                            status: 3,
                            num: 1
                        },
                        {
                            name: '离线',
                            img: '../src/assets/img/13.png',
                            status: 4,
                            num: 1
                        }
                    ],
                },
                {
                    name: "污水站C2",
                    lng: 116.38047562659786,
                    lat: 39.9061650589610035,
                    status: 1,
                    imgUrl: "https://www.wangyill.com/img22/4.png",
                    id: 1014,
                    belongOwner: '苏州园区四季花园小区',  //所属业主
                    belongItem: 'XXXXXXXXXXXXXXXXXXXXXXXXX',  //所属项目
                    belongCompany: '新合盛资产管理公司',  //运维单位
                    statisData: [  //数据统计
                        {
                            name: '设备/套',
                            img: '../src/assets/img/4.png',
                            num: 17
                        },
                        {
                            name: '设备类型',
                            num: 'AOO / BMR'
                        },

                    ],
                    energyData: [
                        {
                            name: '总出水量',
                            num: '47万m³'
                        },
                        {
                            name: '总电量',
                            num: '78KW.h'
                        },
                        {
                            name: '总能耗',
                            num: 'XXXX'
                        },
                    ],
                    statusData: [  //状态统计
                        {
                            name: '在线',
                            img: '../src/assets/img/10.png',
                            status: 1,
                            num: 15
                        },
                        {
                            name: '故障',
                            img: '../src/assets/img/11.png',
                            status: 2,
                            num: 0
                        },
                        {
                            name: '异常',
                            img: '../src/assets/img/12.png',
                            status: 3,
                            num: 1
                        },
                        {
                            name: '离线',
                            img: '../src/assets/img/13.png',
                            status: 4,
                            num: 1
                        }
                    ],
                },
                {
                    name: "污水站C3",
                    lng: 116.389211000951873,
                    lat: 39.92548850162348,
                    status: 1,
                    imgUrl: "https://www.wangyill.com/img22/4.png",
                    id: 1015,
                    belongOwner: '苏州园区四季花园小区',  //所属业主
                    belongItem: 'XXXXXXXXXXXXXXXXXXXXXXXXX',  //所属项目
                    belongCompany: '新合盛资产管理公司',  //运维单位
                    statisData: [  //数据统计
                        {
                            name: '设备/套',
                            img: '../src/assets/img/4.png',
                            num: 6
                        },
                        {
                            name: '设备类型',
                            num: 'AOO / BMR'
                        },

                    ],
                    energyData: [
                        {
                            name: '总出水量',
                            num: '774万m³'
                        },
                        {
                            name: '总电量',
                            num: '490KW.h'
                        },
                        {
                            name: '总能耗',
                            num: 'XXXX'
                        },
                    ],
                    statusData: [  //状态统计
                        {
                            name: '在线',
                            img: '../src/assets/img/10.png',
                            status: 1,
                            num: 6
                        },
                        {
                            name: '故障',
                            img: '../src/assets/img/11.png',
                            status: 2,
                            num: 0
                        },
                        {
                            name: '异常',
                            img: '../src/assets/img/12.png',
                            status: 3,
                            num: 0
                        },
                        {
                            name: '离线',
                            img: '../src/assets/img/13.png',
                            status: 4,
                            num: 0
                        }
                    ],
                },
                {
                    name: "污水站C4",
                    lng: 116.40626568719476,
                    lat: 39.93801211199163,
                    status: 3,
                    imgUrl: "https://www.wangyill.com/img22/3.png",
                    id: 1016,
                    belongOwner: '苏州园区四季花园小区',  //所属业主
                    belongItem: 'XXXXXXXXXXXXXXXXXXXXXXXXX',  //所属项目
                    belongCompany: '新合盛资产管理公司',  //运维单位
                    statisData: [  //数据统计
                        {
                            name: '设备/套',
                            img: '../src/assets/img/4.png',
                            num: 31
                        },
                        {
                            name: '设备类型',
                            num: 'AOO / BMR'
                        },

                    ],
                    energyData: [
                        {
                            name: '总出水量',
                            num: '231万m³'
                        },
                        {
                            name: '总电量',
                            num: '231KW.h'
                        },
                        {
                            name: '总能耗',
                            num: 'XXXX'
                        },
                    ],
                    statusData: [  //状态统计
                        {
                            name: '在线',
                            img: '../src/assets/img/10.png',
                            status: 1,
                            num: 29
                        },
                        {
                            name: '故障',
                            img: '../src/assets/img/11.png',
                            status: 2,
                            num: 2
                        },
                        {
                            name: '异常',
                            img: '../src/assets/img/12.png',
                            status: 3,
                            num: 1
                        },
                        {
                            name: '离线',
                            img: '../src/assets/img/13.png',
                            status: 4,
                            num: 1
                        }
                    ],
                },
                {
                    name: "污水站C5",
                    lng: 116.4106481017252,
                    lat: 39.92796302758881,
                    status: 1,
                    imgUrl: "https://www.wangyill.com/img22/4.png",
                    id: 1017,
                    belongOwner: '苏州园区四季花园小区',  //所属业主
                    belongItem: 'XXXXXXXXXXXXXXXXXXXXXXXXX',  //所属项目
                    belongCompany: '新合盛资产管理公司',  //运维单位
                    statisData: [  //数据统计
                        {
                            name: '设备/套',
                            img: '../src/assets/img/4.png',
                            num: 11
                        },
                        {
                            name: '设备类型',
                            num: 'AOO / BMR'
                        },

                    ],
                    energyData: [
                        {
                            name: '总出水量',
                            num: '336万m³'
                        },
                        {
                            name: '总电量',
                            num: '724KW.h'
                        },
                        {
                            name: '总能耗',
                            num: 'XXXX'
                        },
                    ],
                    statusData: [  //状态统计
                        {
                            name: '在线',
                            img: '../src/assets/img/10.png',
                            status: 1,
                            num: 6
                        },
                        {
                            name: '故障',
                            img: '../src/assets/img/11.png',
                            status: 2,
                            num: 3
                        },
                        {
                            name: '异常',
                            img: '../src/assets/img/12.png',
                            status: 3,
                            num: 1
                        },
                        {
                            name: '离线',
                            img: '../src/assets/img/13.png',
                            status: 4,
                            num: 1
                        }
                    ],
                },
                {
                    name: "污水站C6",
                    lng: 116.41091683948423,
                    lat: 39.92487874454056,
                    status: 4,
                    imgUrl: "https://www.wangyill.com/img22/1.png",
                    id: 1018,
                    belongOwner: '苏州园区四季花园小区',  //所属业主
                    belongItem: 'XXXXXXXXXXXXXXXXXXXXXXXXX',  //所属项目
                    belongCompany: '新合盛资产管理公司',  //运维单位
                    statisData: [  //数据统计
                        {
                            name: '设备/套',
                            img: '../src/assets/img/4.png',
                            num: 5
                        },
                        {
                            name: '设备类型',
                            num: 'AOO / BMR'
                        },

                    ],
                    energyData: [
                        {
                            name: '总出水量',
                            num: '531万m³'
                        },
                        {
                            name: '总电量',
                            num: '222KW.h'
                        },
                        {
                            name: '总能耗',
                            num: 'XXXX'
                        },
                    ],
                    statusData: [  //状态统计
                        {
                            name: '在线',
                            img: '../src/assets/img/10.png',
                            status: 1,
                            num: 4
                        },
                        {
                            name: '故障',
                            img: '../src/assets/img/11.png',
                            status: 2,
                            num: 0
                        },
                        {
                            name: '异常',
                            img: '../src/assets/img/12.png',
                            status: 3,
                            num: 1
                        },
                        {
                            name: '离线',
                            img: '../src/assets/img/13.png',
                            status: 4,
                            num: 0
                        }
                    ],
                }
            ]
        },
        {
            name: "区监管部门D",
            num: 20,
            statisData: [  //数据统计
                {
                    name: '业主',
                    img: '../src/assets/img/2.png',
                    num: 42
                }, {
                    name: '污水站',
                    img: '../src/assets/img/3.png',
                    num: 20
                }, {
                    name: '设备/套',
                    img: '../src/assets/img/4.png',
                    num: 43
                },
            ],
            energyData: [
                {
                    name: '总出水量',
                    num: '320万m³'
                },
                {
                    name: '总电量',
                    num: '345KW.h'
                },
                {
                    name: '总能耗',
                    num: 'XXXX'
                },
            ],
            statusData: [  //状态统计
                {
                    name: '在线',
                    img: '../src/assets/img/10.png',
                    status: 1,
                    num: 18
                },
                {
                    name: '故障',
                    img: '../src/assets/img/11.png',
                    status: 2,
                    num: 2
                },
                {
                    name: '异常',
                    img: '../src/assets/img/12.png',
                    status: 3,
                    num: 0
                },
                {
                    name: '离线',
                    img: '../src/assets/img/13.png',
                    status: 4,
                    num: 0
                }
            ],
            seweageData: [
                {
                    name: "污水站D1",
                    lng: 116.41617605845848,
                    lat: 39.92405874955638,
                    status: 2,
                    imgUrl: "https://www.wangyill.com/img22/2.png",
                    id: 1019,
                    belongOwner: '苏州园区四季花园小区',  //所属业主
                    belongItem: 'XXXXXXXXXXXXXXXXXXXXXXXXX',  //所属项目
                    belongCompany: '新合盛资产管理公司',  //运维单位
                    statisData: [  //数据统计
                        {
                            name: '设备/套',
                            img: '../src/assets/img/4.png',
                            num: 13
                        },
                        {
                            name: '设备类型',
                            num: 'AOO / BMR'
                        },

                    ],
                    energyData: [
                        {
                            name: '总出水量',
                            num: '100万m³'
                        },
                        {
                            name: '总电量',
                            num: '231KW.h'
                        },
                        {
                            name: '总能耗',
                            num: 'XXXX'
                        },
                    ],
                    statusData: [  //状态统计
                        {
                            name: '在线',
                            img: '../src/assets/img/10.png',
                            status: 1,
                            num: 9
                        },
                        {
                            name: '故障',
                            img: '../src/assets/img/11.png',
                            status: 2,
                            num: 2
                        },
                        {
                            name: '异常',
                            img: '../src/assets/img/12.png',
                            status: 3,
                            num: 1
                        },
                        {
                            name: '离线',
                            img: '../src/assets/img/13.png',
                            status: 4,
                            num: 1
                        }
                    ],
                },
                {
                    name: "污水站D2",
                    lng: 116.40221008446982,
                    lat: 39.93270341969,
                    status: 2,
                    imgUrl: "https://www.wangyill.com/img22/2.png",
                    id: 1020,
                    belongOwner: '苏州园区四季花园小区',  //所属业主
                    belongItem: 'XXXXXXXXXXXXXXXXXXXXXXXXX',  //所属项目
                    belongCompany: '新合盛资产管理公司',  //运维单位
                    statisData: [  //数据统计
                        {
                            name: '设备/套',
                            img: '../src/assets/img/4.png',
                            num: 7
                        },
                        {
                            name: '设备类型',
                            num: 'AOO / BMR'
                        },

                    ],
                    energyData: [
                        {
                            name: '总出水量',
                            num: '245万m³'
                        },
                        {
                            name: '总电量',
                            num: '718KW.h'
                        },
                        {
                            name: '总能耗',
                            num: 'XXXX'
                        },
                    ],
                    statusData: [  //状态统计
                        {
                            name: '在线',
                            img: '../src/assets/img/10.png',
                            status: 1,
                            num: 6
                        },
                        {
                            name: '故障',
                            img: '../src/assets/img/11.png',
                            status: 2,
                            num: 0
                        },
                        {
                            name: '异常',
                            img: '../src/assets/img/12.png',
                            status: 3,
                            num: 1
                        },
                        {
                            name: '离线',
                            img: '../src/assets/img/13.png',
                            status: 4,
                            num: 0
                        }
                    ],
                }
            ]
        },
        {
            name: "区监管部门E",
            num: 30,
            statisData: [  //数据统计
                {
                    name: '业主',
                    img: '../src/assets/img/2.png',
                    num: 28
                }, {
                    name: '污水站',
                    img: '../src/assets/img/3.png',
                    num: 30
                }, {
                    name: '设备/套',
                    img: '../src/assets/img/4.png',
                    num: 63
                },
            ],
            energyData: [
                {
                    name: '总出水量',
                    num: '260万m³'
                },
                {
                    name: '总电量',
                    num: '218KW.h'
                },
                {
                    name: '总能耗',
                    num: 'XXXX'
                },
            ],
            statusData: [  //状态统计
                {
                    name: '在线',
                    img: '../src/assets/img/10.png',
                    status: 1,
                    num: 21
                },
                {
                    name: '故障',
                    img: '../src/assets/img/11.png',
                    status: 2,
                    num: 7
                },
                {
                    name: '异常',
                    img: '../src/assets/img/12.png',
                    status: 3,
                    num: 0
                },
                {
                    name: '离线',
                    img: '../src/assets/img/13.png',
                    status: 4,
                    num: 2
                }
            ],
            seweageData: [
                {
                    name: "污水站E1",
                    lng: 116.37335087023203,
                    lat: 39.91533248138266,
                    status: 4,
                    imgUrl: "https://www.wangyill.com/img22/4.png",
                    id: 1021,
                    belongOwner: '苏州园区四季花园小区',  //所属业主
                    belongItem: 'XXXXXXXXXXXXXXXXXXXXXXXXX',  //所属项目
                    belongCompany: '新合盛资产管理公司',  //运维单位
                    statisData: [  //数据统计
                        {
                            name: '设备/套',
                            img: '../src/assets/img/4.png',
                            num: 12
                        },
                        {
                            name: '设备类型',
                            num: 'AOO / BMR'
                        },

                    ],
                    energyData: [
                        {
                            name: '总出水量',
                            num: '90万m³'
                        },
                        {
                            name: '总电量',
                            num: '188KW.h'
                        },
                        {
                            name: '总能耗',
                            num: 'XXXX'
                        },
                    ],
                    statusData: [  //状态统计
                        {
                            name: '在线',
                            img: '../src/assets/img/10.png',
                            status: 1,
                            num: 7
                        },
                        {
                            name: '故障',
                            img: '../src/assets/img/11.png',
                            status: 2,
                            num: 4
                        },
                        {
                            name: '异常',
                            img: '../src/assets/img/12.png',
                            status: 3,
                            num: 0
                        },
                        {
                            name: '离线',
                            img: '../src/assets/img/13.png',
                            status: 4,
                            num: 1
                        }
                    ],
                },
                {
                    name: "污水站E2",
                    lng: 116.36826155047807,
                    lat: 39.90949773333161,
                    status: 4,
                    imgUrl: "https://www.wangyill.com/img22/4.png",
                    id: 1022,
                    belongOwner: '苏州园区四季花园小区',  //所属业主
                    belongItem: 'XXXXXXXXXXXXXXXXXXXXXXXXX',  //所属项目
                    belongCompany: '新合盛资产管理公司',  //运维单位
                    statisData: [  //数据统计
                        {
                            name: '设备/套',
                            img: '../src/assets/img/4.png',
                            num: 11
                        },
                        {
                            name: '设备类型',
                            num: 'AOO / BMR'
                        },

                    ],
                    energyData: [
                        {
                            name: '总出水量',
                            num: '110万m³'
                        },
                        {
                            name: '总电量',
                            num: '78KW.h'
                        },
                        {
                            name: '总能耗',
                            num: 'XXXX'
                        },
                    ],
                    statusData: [  //状态统计
                        {
                            name: '在线',
                            img: '../src/assets/img/10.png',
                            status: 1,
                            num: 9
                        },
                        {
                            name: '故障',
                            img: '../src/assets/img/11.png',
                            status: 2,
                            num: 0
                        },
                        {
                            name: '异常',
                            img: '../src/assets/img/12.png',
                            status: 3,
                            num: 1
                        },
                        {
                            name: '离线',
                            img: '../src/assets/img/13.png',
                            status: 4,
                            num: 1
                        }
                    ],
                },
                {
                    name: "污水站E3",
                    lng: 116.41472226080825,
                    lat: 39.915822772796325,
                    status: 1,
                    imgUrl: "https://www.wangyill.com/img22/4.png",
                    id: 1023,
                    belongOwner: '苏州园区四季花园小区',  //所属业主
                    belongItem: 'XXXXXXXXXXXXXXXXXXXXXXXXX',  //所属项目
                    belongCompany: '新合盛资产管理公司',  //运维单位
                    statisData: [  //数据统计
                        {
                            name: '设备/套',
                            img: '../src/assets/img/4.png',
                            num: 4
                        },
                        {
                            name: '设备类型',
                            num: 'AOO / BMR'
                        },

                    ],
                    energyData: [
                        {
                            name: '总出水量',
                            num: '125万m³'
                        },
                        {
                            name: '总电量',
                            num: '98KW.h'
                        },
                        {
                            name: '总能耗',
                            num: 'XXXX'
                        },
                    ],
                    statusData: [  //状态统计
                        {
                            name: '在线',
                            img: '../src/assets/img/10.png',
                            status: 1,
                            num: 2
                        },
                        {
                            name: '故障',
                            img: '../src/assets/img/11.png',
                            status: 2,
                            num: 0
                        },
                        {
                            name: '异常',
                            img: '../src/assets/img/12.png',
                            status: 3,
                            num: 1
                        },
                        {
                            name: '离线',
                            img: '../src/assets/img/13.png',
                            status: 4,
                            num: 1
                        }
                    ],
                },
            ]
        },
        {
            name: "区监管部门F",
            num: 80,
            statisData: [  //数据统计
                {
                    name: '业主',
                    img: '../src/assets/img/2.png',
                    num: 76
                }, {
                    name: '污水站',
                    img: '../src/assets/img/3.png',
                    num: 80
                }, {
                    name: '设备/套',
                    img: '../src/assets/img/4.png',
                    num: 180
                },
            ],
            energyData: [
                {
                    name: '总出水量',
                    num: '330万m³'
                },
                {
                    name: '总电量',
                    num: '128KW.h'
                },
                {
                    name: '总能耗',
                    num: 'XXXX'
                },
            ],
            statusData: [  //状态统计
                {
                    name: '在线',
                    img: '../src/assets/img/10.png',
                    status: 1,
                    num: 66
                },
                {
                    name: '故障',
                    img: '../src/assets/img/11.png',
                    status: 2,
                    num: 6
                },
                {
                    name: '异常',
                    img: '../src/assets/img/12.png',
                    status: 3,
                    num: 8
                },
                {
                    name: '离线',
                    img: '../src/assets/img/13.png',
                    status: 4,
                    num: 10
                }
            ],
            seweageData: [
                {
                    name: "污水站F1",
                    lng: 116.38365362608715,
                    lat: 39.93829026058496,
                    status: 3,
                    imgUrl: "https://www.wangyill.com/img22/3.png",
                    id: 1024,
                    belongOwner: '苏州园区四季花园小区',  //所属业主
                    belongItem: 'XXXXXXXXXXXXXXXXXXXXXXXXX',  //所属项目
                    belongCompany: '新合盛资产管理公司',  //运维单位
                    statisData: [  //数据统计
                        {
                            name: '设备/套',
                            img: '../src/assets/img/4.png',
                            num: 23
                        },
                        {
                            name: '设备类型',
                            num: 'AOO / BMR'
                        },

                    ],
                    energyData: [
                        {
                            name: '总出水量',
                            num: '110万m³'
                        },
                        {
                            name: '总电量',
                            num: '78KW.h'
                        },
                        {
                            name: '总能耗',
                            num: 'XXXX'
                        },
                    ],
                    statusData: [  //状态统计
                        {
                            name: '在线',
                            img: '../src/assets/img/10.png',
                            status: 1,
                            num: 19
                        },
                        {
                            name: '故障',
                            img: '../src/assets/img/11.png',
                            status: 2,
                            num: 2
                        },
                        {
                            name: '异常',
                            img: '../src/assets/img/12.png',
                            status: 3,
                            num: 1
                        },
                        {
                            name: '离线',
                            img: '../src/assets/img/13.png',
                            status: 4,
                            num: 1
                        }
                    ],
                },
                {
                    name: "污水站F2",
                    lng: 116.37287206705213,
                    lat: 39.93769468302712,
                    status: 2,
                    imgUrl: "https://www.wangyill.com/img22/2.png",
                    id: 1025,
                    belongOwner: '苏州园区四季花园小区',  //所属业主
                    belongItem: 'XXXXXXXXXXXXXXXXXXXXXXXXX',  //所属项目
                    belongCompany: '新合盛资产管理公司',  //运维单位
                    statisData: [  //数据统计
                        {
                            name: '设备/套',
                            img: '../src/assets/img/4.png',
                            num: 27
                        },
                        {
                            name: '设备类型',
                            num: 'AOO / BMR'
                        },

                    ],
                    energyData: [
                        {
                            name: '总出水量',
                            num: '321万m³'
                        },
                        {
                            name: '总电量',
                            num: '718KW.h'
                        },
                        {
                            name: '总能耗',
                            num: 'XXXX'
                        },
                    ],
                    statusData: [  //状态统计
                        {
                            name: '在线',
                            img: '../src/assets/img/10.png',
                            status: 1,
                            num: 22
                        },
                        {
                            name: '故障',
                            img: '../src/assets/img/11.png',
                            status: 2,
                            num: 3
                        },
                        {
                            name: '异常',
                            img: '../src/assets/img/12.png',
                            status: 3,
                            num: 1
                        },
                        {
                            name: '离线',
                            img: '../src/assets/img/13.png',
                            status: 4,
                            num: 1
                        }
                    ],
                },
                {
                    name: "污水站F3",
                    lng: 116.40348030712416,
                    lat: 39.9104094155675,
                    status: 1,
                    imgUrl: "https://www.wangyill.com/img22/4.png",
                    id: 1026,
                    belongOwner: '苏州园区四季花园小区',  //所属业主
                    belongItem: 'XXXXXXXXXXXXXXXXXXXXXXXXX',  //所属项目
                    belongCompany: '新合盛资产管理公司',  //运维单位
                    statisData: [  //数据统计
                        {
                            name: '设备/套',
                            img: '../src/assets/img/4.png',
                            num: 21
                        },
                        {
                            name: '设备类型',
                            num: 'AOO / BMR'
                        },

                    ],
                    energyData: [
                        {
                            name: '总出水量',
                            num: '119万m³'
                        },
                        {
                            name: '总电量',
                            num: '789KW.h'
                        },
                        {
                            name: '总能耗',
                            num: 'XXXX'
                        },
                    ],
                    statusData: [  //状态统计
                        {
                            name: '在线',
                            img: '../src/assets/img/10.png',
                            status: 1,
                            num: 16
                        },
                        {
                            name: '故障',
                            img: '../src/assets/img/11.png',
                            status: 2,
                            num: 3
                        },
                        {
                            name: '异常',
                            img: '../src/assets/img/12.png',
                            status: 3,
                            num: 1
                        },
                        {
                            name: '离线',
                            img: '../src/assets/img/13.png',
                            status: 4,
                            num: 1
                        }
                    ],
                },
                {
                    name: "污水站F4",
                    lng: 116.40628482904452,
                    lat: 39.9070887699591,
                    status: 3,
                    imgUrl: "https://www.wangyill.com/img22/3.png",
                    id: 1027,
                    belongOwner: '苏州园区四季花园小区',  //所属业主
                    belongItem: 'XXXXXXXXXXXXXXXXXXXXXXXXX',  //所属项目
                    belongCompany: '新合盛资产管理公司',  //运维单位
                    statisData: [  //数据统计
                        {
                            name: '设备/套',
                            img: '../src/assets/img/4.png',
                            num: 16
                        },
                        {
                            name: '设备类型',
                            num: 'AOO / BMR'
                        },

                    ],
                    energyData: [
                        {
                            name: '总出水量',
                            num: '222万m³'
                        },
                        {
                            name: '总电量',
                            num: '216KW.h'
                        },
                        {
                            name: '总能耗',
                            num: 'XXXX'
                        },
                    ],
                    statusData: [  //状态统计
                        {
                            name: '在线',
                            img: '../src/assets/img/10.png',
                            status: 1,
                            num: 14
                        },
                        {
                            name: '故障',
                            img: '../src/assets/img/11.png',
                            status: 2,
                            num: 0
                        },
                        {
                            name: '异常',
                            img: '../src/assets/img/12.png',
                            status: 3,
                            num: 1
                        },
                        {
                            name: '离线',
                            img: '../src/assets/img/13.png',
                            status: 4,
                            num: 1
                        }
                    ],
                },
                {
                    name: "污水站F5",
                    lng: 116.38701768883325,
                    lat: 39.930966277334335,
                    status: 1,
                    imgUrl: "https://www.wangyill.com/img22/4.png",
                    id: 1028,
                    belongOwner: '苏州园区四季花园小区',  //所属业主
                    belongItem: 'XXXXXXXXXXXXXXXXXXXXXXXXX',  //所属项目
                    belongCompany: '新合盛资产管理公司',  //运维单位
                    statisData: [  //数据统计
                        {
                            name: '设备/套',
                            img: '../src/assets/img/4.png',
                            num: 15
                        },
                        {
                            name: '设备类型',
                            num: 'AOO / BMR'
                        },

                    ],
                    energyData: [
                        {
                            name: '总出水量',
                            num: '326万m³'
                        },
                        {
                            name: '总电量',
                            num: '178KW.h'
                        },
                        {
                            name: '总能耗',
                            num: 'XXXX'
                        },
                    ],
                    statusData: [  //状态统计
                        {
                            name: '在线',
                            img: '../src/assets/img/10.png',
                            status: 1,
                            num: 12
                        },
                        {
                            name: '故障',
                            img: '../src/assets/img/11.png',
                            status: 2,
                            num: 1
                        },
                        {
                            name: '异常',
                            img: '../src/assets/img/12.png',
                            status: 3,
                            num: 1
                        },
                        {
                            name: '离线',
                            img: '../src/assets/img/13.png',
                            status: 4,
                            num: 1
                        }
                    ],
                },
                {
                    name: "污水站F6",
                    lng: 116.3957412995532,
                    lat: 39.91772550577599,
                    status: 4,
                    imgUrl: "https://www.wangyill.com/img22/4.png",
                    id: 1029,
                    belongOwner: '苏州园区四季花园小区',  //所属业主
                    belongItem: 'XXXXXXXXXXXXXXXXXXXXXXXXX',  //所属项目
                    belongCompany: '新合盛资产管理公司',  //运维单位
                    statisData: [  //数据统计
                        {
                            name: '设备/套',
                            img: '../src/assets/img/4.png',
                            num: 37
                        },
                        {
                            name: '设备类型',
                            num: 'AOO / BMR'
                        },

                    ],
                    energyData: [
                        {
                            name: '总出水量',
                            num: '322万m³'
                        },
                        {
                            name: '总电量',
                            num: '157KW.h'
                        },
                        {
                            name: '总能耗',
                            num: 'XXXX'
                        },
                    ],
                    statusData: [  //状态统计
                        {
                            name: '在线',
                            img: '../src/assets/img/10.png',
                            status: 1,
                            num: 26
                        },
                        {
                            name: '故障',
                            img: '../src/assets/img/11.png',
                            status: 2,
                            num: 9
                        },
                        {
                            name: '异常',
                            img: '../src/assets/img/12.png',
                            status: 3,
                            num: 1
                        },
                        {
                            name: '离线',
                            img: '../src/assets/img/13.png',
                            status: 4,
                            num: 1
                        }
                    ],
                },
                {
                    name: "污水站F7",
                    lng: 116.37629415058704,
                    lat: 39.9268124801108,
                    status: 1,
                    imgUrl: "https://www.wangyill.com/img22/4.png",
                    id: 1030,
                    belongOwner: '苏州园区四季花园小区',  //所属业主
                    belongItem: 'XXXXXXXXXXXXXXXXXXXXXXXXX',  //所属项目
                    belongCompany: '新合盛资产管理公司',  //运维单位
                    statisData: [  //数据统计
                        {
                            name: '设备/套',
                            img: '../src/assets/img/4.png',
                            num: 14
                        },
                        {
                            name: '设备类型',
                            num: 'AOO / BMR'
                        },

                    ],
                    energyData: [
                        {
                            name: '总出水量',
                            num: '184万m³'
                        },
                        {
                            name: '总电量',
                            num: '122KW.h'
                        },
                        {
                            name: '总能耗',
                            num: 'XXXX'
                        },
                    ],
                    statusData: [  //状态统计
                        {
                            name: '在线',
                            img: '../src/assets/img/10.png',
                            status: 1,
                            num: 12
                        },
                        {
                            name: '故障',
                            img: '../src/assets/img/11.png',
                            status: 2,
                            num: 0
                        },
                        {
                            name: '异常',
                            img: '../src/assets/img/12.png',
                            status: 3,
                            num: 1
                        },
                        {
                            name: '离线',
                            img: '../src/assets/img/13.png',
                            status: 4,
                            num: 1
                        }
                    ],
                },
                {
                    name: "污水站F8",
                    lng: 116.38920647906328,
                    lat: 39.932071921011804,
                    status: 2,
                    imgUrl: "https://www.wangyill.com/img22/2.png",
                    id: 1031,
                    belongOwner: '苏州园区四季花园小区',  //所属业主
                    belongItem: 'XXXXXXXXXXXXXXXXXXXXXXXXX',  //所属项目
                    belongCompany: '新合盛资产管理公司',  //运维单位
                    statisData: [  //数据统计
                        {
                            name: '设备/套',
                            img: '../src/assets/img/4.png',
                            num: 22
                        },
                        {
                            name: '设备类型',
                            num: 'AOO / BMR'
                        },

                    ],
                    energyData: [
                        {
                            name: '总出水量',
                            num: '110万m³'
                        },
                        {
                            name: '总电量',
                            num: '78KW.h'
                        },
                        {
                            name: '总能耗',
                            num: 'XXXX'
                        },
                    ],
                    statusData: [  //状态统计
                        {
                            name: '在线',
                            img: '../src/assets/img/10.png',
                            status: 1,
                            num: 20
                        },
                        {
                            name: '故障',
                            img: '../src/assets/img/11.png',
                            status: 2,
                            num: 0
                        },
                        {
                            name: '异常',
                            img: '../src/assets/img/12.png',
                            status: 3,
                            num: 1
                        },
                        {
                            name: '离线',
                            img: '../src/assets/img/13.png',
                            status: 4,
                            num: 1
                        }
                    ],
                }
            ]
        }
    ]
};
