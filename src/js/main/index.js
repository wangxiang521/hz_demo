/**
 * @author jiaoju.wu
 * es6 模块化方法，引入 页面需要的js文件
 */

import {HZ_GLOBAL} from "../common/global_val";

import "angular-material";

import "angular-ui-router";
import "angular-animate";

import "../common/angular-locale_zh-cn";

/**
 * 引入页面需要用到的组件
 */
import indexComponent from "./index.component";                 //主页组件
import ComponentsModule from "../components/components";        //组件工厂

import ServiceModule from "../common/service.module";                    //service 等其他组件
import FilterModule from "../common/filter.module";                    //filter 等其他组件

/**
 * scm module 的angular 基础配置
 * @type {angular.Module}
 */
let scm_web = angular.module("scm",[
    ServiceModule.name,
    FilterModule.name,
    ComponentsModule.name,
    'ui.router',
    'ngMaterial',
    'ngAnimate',
    require('angular-material-data-table')
]).config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default');
});

/**
 * scm web 路由层的配置
 */

scm_web.config(function($stateProvider,$locationProvider) {

    var states = [
        {
            name: 'day',    //配置名称
            component : 'scmView', //对应组件
            params:{"option":null},
            resolve: {              //配置传参
                option : function(){
                            let option = [
                                {
                                    option : {
                                        title : {
                                            text: '咨询业务占比',
                                            subtext: '当日',
                                            x:'center',
                                            textStyle: {
                                                color: '#13498C',
                                                fontSize: '22',
                                            },
                                            subtextStyle: {
                                                color: '#ccc',
                                                fontSize: '18',
                                            }
                                            },
                                            tooltip : {
                                                trigger: 'item',
                                                hideDelay : 200
                                            },
                                            legend: {
                                                x : 'center',
                                                y : 'bottom',
                                                data: ['营销类业务','业务咨询','活动咨询','客户投诉'],
                                                textStyle: {
                                                    fontSize: '14',
                                                    color: '#5985A6'
                                                }
                                            },
                                            series : [
                                                {
                                                type: 'pie',
                                                radius : ['10%','60%'],
                                                center: ['50%', '50%'],
                                                roseType : 'radius',
                                                data:[
                                                    {value:1, name:'营销类业务'},
                                                    {value:5, name:'业务咨询'},
                                                    {value:2, name:'活动咨询'},
                                                    {value:1, name:'客户投诉'},
                                                ],
                                                color:['#105F9E','#207FBF','#16A8C7','#54DBDF','#A9E1D4'],
                                                itemStyle: {
                                                    emphasis: {
                                                        shadowBlur: 10,
                                                        shadowOffsetX: 0,
                                                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                                                    },
                                                    normal: {
                                                        label: {
                                                            textStyle: {
                                                                // 用 itemStyle.normal.label.textStyle.fontSize 來更改餅圖上項目字體大小
                                                                fontSize: '14'
                                                            },
                                                        },
                                                        // labelLine:{show:true,length: 0.001}
                                                    },

                                                },
                                                labelLine:{
                                                    normal:{
                                                        show:true,
                                                        length: 0.001,
                                                        length2: 0.001
                                                    }
                                                }
                                            }]
                                    },
                                    id:"day1",
                                    //param : ['settime',"3 26 2 0 0 set-dfl",'1 0 99 (fwex)'],
                                    //params : [['settime',"3 8 26 3 0 0 set-dfl",'1 0 99 (fwex)']]
                                    params :['src/js/tests.json']
                                },
                                {
                                    option:{
                                title : {
                                    text: '接通率占比',
                                    subtext: '当日',
                                    x:'center',
                                    textStyle: {
                                        color: '#13498C',
                                        fontSize: '22',
                                    },
                                    subtextStyle: {
                                        color: '#ccc',
                                        fontSize: '18',
                                    }
                                },
                                tooltip: {
                                    trigger: 'item',
                                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                                },
                                legend: {
                                    x : 'center',
                                    y : 'bottom',
                                    data:['接通','未接通'],
                                    textStyle: {
                                        fontSize: '14',
                                        color: '#5985A6'
                                    }
                                },
                                series: [
                                    {
                                        name:'接通率占比',
                                        type:'pie',
                                        radius: ['50%', '70%'],
                                        center: ['50%', '50%'],
                                        // avoidLabelOverlap: false,
                                        label: {
                                            normal: {
                                                show: false,
                                                position: 'center'
                                            },
                                            emphasis: {
                                                show: true,
                                                textStyle: {
                                                    fontSize: '30',
                                                    fontWeight: 'bold'
                                                }
                                            }
                                        },
                                        labelLine: {
                                            normal: {
                                                show: false
                                            }
                                        },
                                        data:[
                                            {value:50, name:'接通'},
                                            {value:50, name:'未接通'},
                                        ],
                                        color:['#EF2124','#FD8673'],
                                    }
                                ]
                            },
                                    id:"day2",
                                    params :['src/js/test2.json']

                                },
                                {option:{
                                title: {
                                    text: '呼入来源占比',
                                    subtext: '当日',
                                    x:'center',
                                    textStyle: {
                                        color: '#13498C',
                                        fontSize: '22',
                                    },
                                    subtextStyle: {
                                        color: '#ccc',
                                        fontSize: '18',
                                    }
                                },
                                tooltip : {
                                    trigger: 'item',
                                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                                },
                                legend: {
                                    x : 'center',
                                    y : 'bottom',
                                    data: ['微博','微信','手机','固定电话','QQ','其他'],
                                    textStyle: {
                                        fontSize: '14',
                                        color: '#5985A6'
                                    }
                                },
                                series : [
                                    {
                                        name: '呼入来源占比',
                                        type: 'pie',
                                        radius : '65%',
                                        center: ['50%', '50%'],
                                        data:[
                                            {value:200, name:'微博'},
                                            {value:300, name:'微信'},
                                            {value:100, name:'手机'},
                                            {value:100, name:'固定电话'},
                                            {value:100, name:'QQ'},
                                            {value:150, name:'其他'}
                                        ].sort(function (a, b) { return a.value - b.value}),
                                        roseType: 'angle',
                                        color:['#AFA7B6','#8A7D86','#2E2E2E','#705676','#B594A9'],
                                        label: {
                                            normal: {
                                                textStyle: {
                                                    // color: 'rgba(255, 255, 255, 0.5)'
                                                }
                                            }
                                        },
                                        itemStyle: {
                                            emphasis: {
                                                shadowBlur: 10,
                                                shadowOffsetX: 0,
                                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                                            },
                                            normal: {
                                                label: {
                                                    textStyle: {
                                                        // 用 itemStyle.normal.label.textStyle.fontSize 來更改餅圖上項目字體大小
                                                        fontSize: '14'
                                                    }
                                                }
                                            }
                                        },
                                        labelLine:{
                                            normal:{
                                                show:true,
                                                length: 0.001,
                                                length2: 0.001
                                            }
                                        }
                                    }
                                ]
                            },id:"day3",
                              params :['src/js/tests.json']
                                },
                                {option:{
                                title : {
                                    text: '投诉比例',
                                    subtext: '当日',
                                    x:'center',
                                    textStyle: {
                                        color: '#13498C',
                                        fontSize: '22',
                                    },
                                    subtextStyle: {
                                        color: '#ccc',
                                        fontSize: '18',
                                    }
                                },
                                tooltip : {
                                    trigger: 'item',
                                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                                },
                                legend: {
                                    x:"center",
                                    y:"bottom",
                                    data: ['重大投诉','一般投诉','其他','无投诉'],
                                    textStyle: {
                                        fontSize: '14',
                                        color: '#5985A6'
                                    }
                                },
                                series : [
                                    {
                                        name:'投诉比例',
                                        type:'pie',
                                        radius : '60%',
                                        center: ['50%', '50%'],
                                        data:[
                                            {value:2, name:'重大投诉'},
                                            {value:12, name:'一般投诉'},
                                            {value:4, name:'其他'},
                                            {value:8, name:'无投诉'},
                                        ],
                                        color:['#76A176','#374B26','#3B6B3B','#8FC788','#C3DFB9'],
                                        itemStyle: {
                                            emphasis: {
                                                shadowBlur: 20,
                                                shadowOffsetX: 0,
                                                shadowColor: 'rgba(f, f, f, 0.5)'
                                            },
                                            normal: {
                                                label: {
                                                    textStyle: {
                                                        // 用 itemStyle.normal.label.textStyle.fontSize 來更改餅圖上項目字體大小
                                                        fontSize: '14'
                                                    }
                                                }
                                            },

                                        },
                                        labelLine:{
                                            normal:{
                                                show:true,
                                                length: 0.2,
                                                length2: 0.2
                                            }
                                        }
                                    }
                                ]
                            },id:"day4",
                                    params :['src/js/tests.json'],}
                                ];
                    return option;
                },
                dateType : ()=>"day",
            }
    },
        {
       name: 'week',
       url: '/week',
            component : 'scmView', //对应组件
            resolve: {              //配置传参
                option : function(){
                    let option = [
                        {
                            option : {
                                title : {
                                    text: '咨询业务占比',
                                    subtext: '本周',
                                    x:'center',
                                    textStyle: {
                                        color: '#13498C',
                                        fontSize: '22',
                                    },
                                    subtextStyle: {
                                        color: '#ccc',
                                        fontSize: '18',
                                    }
                                },
                                tooltip : {
                                    trigger: 'item',
                                    hideDelay : 200
                                },
                                legend: {
                                    x : 'center',
                                    y : 'bottom',
                                    data: ['营销类业务','业务咨询','活动咨询','客户投诉'],
                                    textStyle: {
                                        fontSize: '14',
                                        color: '#5985A6'
                                    }
                                },
                                series : [
                                    {
                                        type: 'pie',
                                        radius : ['10%','60%'],
                                        center: ['50%', '50%'],
                                        roseType : 'radius',
                                        data:[
                                            {value:200, name:'营销类业务'},
                                            {value:300, name:'业务咨询'},
                                            {value:250, name:'活动咨询'},
                                            {value:100, name:'客户投诉'},
                                        ],
                                        color:['#105F9E','#207FBF','#16A8C7','#54DBDF','#A9E1D4'],
                                        itemStyle: {
                                            emphasis: {
                                                shadowBlur: 10,
                                                shadowOffsetX: 0,
                                                shadowColor: 'rgba(0, 0, 0, 0.5)',
                                            },
                                            normal: {
                                                label: {
                                                    textStyle: {
                                                        // 用 itemStyle.normal.label.textStyle.fontSize 來更改餅圖上項目字體大小
                                                        fontSize: '14'
                                                    },
                                                },
                                                // labelLine:{show:true,length: 0.001}
                                            },

                                        },
                                        labelLine:{
                                            normal:{
                                                show:true,
                                                length: 0.001,
                                                length2: 0.001
                                            }
                                        }
                                    }]
                            },
                            id:"day1",
                            //param : ['settime',"3 26 2 0 0 set-dfl",'1 0 99 (fwex)'],
                            //params : [['settime',"3 8 26 3 0 0 set-dfl",'1 0 99 (fwex)']]
                            params :['src/js/tests.json']
                        },
                        {
                            option:{
                                title : {
                                    text: '接通率占比',
                                    subtext: '本周',
                                    x:'center',
                                    textStyle: {
                                        color: '#13498C',
                                        fontSize: '22',
                                    },
                                    subtextStyle: {
                                        color: '#ccc',
                                        fontSize: '18',
                                    }
                                },
                                tooltip: {
                                    trigger: 'item',
                                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                                },
                                legend: {
                                    x : 'center',
                                    y : 'bottom',
                                    data:['接通','未接通'],
                                    textStyle: {
                                        fontSize: '14',
                                        color: '#5985A6'
                                    }
                                },
                                series: [
                                    {
                                        name:'接通率占比',
                                        type:'pie',
                                        radius: ['50%', '70%'],
                                        center: ['50%', '50%'],
                                        // avoidLabelOverlap: false,
                                        label: {
                                            normal: {
                                                show: false,
                                                position: 'center'
                                            },
                                            emphasis: {
                                                show: true,
                                                textStyle: {
                                                    fontSize: '30',
                                                    fontWeight: 'bold'
                                                }
                                            }
                                        },
                                        labelLine: {
                                            normal: {
                                                show: false
                                            }
                                        },
                                        data:[
                                            {value:500, name:'接通'},
                                            {value:200, name:'未接通'},
                                        ],
                                        color:['#EF2124','#FD8673'],
                                    }
                                ]
                            },
                            id:"day2",
                            params :['src/js/test2.json']

                        },
                        {option:{
                            title: {
                                text: '呼入来源占比',
                                subtext: '本周',
                                x:'center',
                                textStyle: {
                                    color: '#13498C',
                                    fontSize: '22',
                                },
                                subtextStyle: {
                                    color: '#ccc',
                                    fontSize: '18',
                                }
                            },
                            tooltip : {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            legend: {
                                x : 'center',
                                y : 'bottom',
                                data: ['微博','微信','手机','固定电话','QQ','其他'],
                                textStyle: {
                                    fontSize: '14',
                                    color: '#5985A6'
                                }
                            },
                            series : [
                                {
                                    name: '呼入来源占比',
                                    type: 'pie',
                                    radius : '65%',
                                    center: ['50%', '50%'],
                                    data:[
                                        {value:200, name:'微博'},
                                        {value:300, name:'微信'},
                                        {value:100, name:'手机'},
                                        {value:100, name:'固定电话'},
                                        {value:100, name:'QQ'},
                                        {value:150, name:'其他'}
                                    ].sort(function (a, b) { return a.value - b.value}),
                                    roseType: 'angle',
                                    color:['#AFA7B6','#8A7D86','#2E2E2E','#705676','#B594A9'],
                                    label: {
                                        normal: {
                                            textStyle: {
                                                // color: 'rgba(255, 255, 255, 0.5)'
                                            }
                                        }
                                    },
                                    itemStyle: {
                                        emphasis: {
                                            shadowBlur: 10,
                                            shadowOffsetX: 0,
                                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                                        },
                                        normal: {
                                            label: {
                                                textStyle: {
                                                    // 用 itemStyle.normal.label.textStyle.fontSize 來更改餅圖上項目字體大小
                                                    fontSize: '14'
                                                }
                                            }
                                        }
                                    },
                                    labelLine:{
                                        normal:{
                                            show:true,
                                            length: 0.001,
                                            length2: 0.001
                                        }
                                    }
                                }
                            ]
                        },id:"day3",
                            params :['src/js/tests.json']
                        },
                        {option:{
                            title : {
                                text: '投诉比例',
                                subtext: '本周',
                                x:'center',
                                textStyle: {
                                    color: '#13498C',
                                    fontSize: '22',
                                },
                                subtextStyle: {
                                    color: '#ccc',
                                    fontSize: '18',
                                }
                            },
                            tooltip : {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            legend: {
                                x:"center",
                                y:"bottom",
                                data: ['重大投诉','一般投诉','其他','无投诉'],
                                textStyle: {
                                    fontSize: '14',
                                    color: '#5985A6'
                                }
                            },
                            series : [
                                {
                                    name:'投诉比例',
                                    type:'pie',
                                    radius : '60%',
                                    center: ['50%', '50%'],
                                    data:[
                                        {value:20, name:'重大投诉'},
                                        {value:10, name:'一般投诉'},
                                        {value:20, name:'其他'},
                                        {value:50, name:'无投诉'},
                                    ],
                                    color:['#76A176','#374B26','#3B6B3B','#8FC788','#C3DFB9'],
                                    itemStyle: {
                                        emphasis: {
                                            shadowBlur: 20,
                                            shadowOffsetX: 0,
                                            shadowColor: 'rgba(f, f, f, 0.5)'
                                        },
                                        normal: {
                                            label: {
                                                textStyle: {
                                                    // 用 itemStyle.normal.label.textStyle.fontSize 來更改餅圖上項目字體大小
                                                    fontSize: '14'
                                                }
                                            }
                                        },

                                    },
                                    labelLine:{
                                        normal:{
                                            show:true,
                                            length: 0.2,
                                            length2: 0.2
                                        }
                                    }
                                }
                            ]
                        },id:"day4",
                            params :['src/js/tests.json'],}
                    ];
                    return option;
                },
                dateType : ()=>"week",
            }
    },
        {
            name: 'month',
            url: '/month',
            component: 'scmView',
            resolve: {
                option : function(){
                    let option = [
                        {
                            option : {
                                title : {
                                    text: '咨询业务占比',
                                    subtext: '本月',
                                    x:'center',
                                    textStyle: {
                                        color: '#13498C',
                                        fontSize: '22',
                                    },
                                    subtextStyle: {
                                        color: '#ccc',
                                        fontSize: '18',
                                    }
                                },
                                tooltip : {
                                    trigger: 'item',
                                    hideDelay : 200
                                },
                                legend: {
                                    x : 'center',
                                    y : 'bottom',
                                    data: ['营销类业务','业务咨询','活动咨询','客户投诉'],
                                    textStyle: {
                                        fontSize: '14',
                                        color: '#5985A6'
                                    }
                                },
                                series : [
                                    {
                                        type: 'pie',
                                        radius : ['10%','60%'],
                                        center: ['50%', '50%'],
                                        roseType : 'radius',
                                        data:[
                                            {value:100, name:'营销类业务'},
                                            {value:500, name:'业务咨询'},
                                            {value:300, name:'活动咨询'},
                                            {value:100, name:'客户投诉'},
                                        ],
                                        color:['#105F9E','#207FBF','#16A8C7','#54DBDF','#A9E1D4'],
                                        itemStyle: {
                                            emphasis: {
                                                shadowBlur: 10,
                                                shadowOffsetX: 0,
                                                shadowColor: 'rgba(0, 0, 0, 0.5)',
                                            },
                                            normal: {
                                                label: {
                                                    textStyle: {
                                                        // 用 itemStyle.normal.label.textStyle.fontSize 來更改餅圖上項目字體大小
                                                        fontSize: '14'
                                                    },
                                                },
                                                // labelLine:{show:true,length: 0.001}
                                            },

                                        },
                                        labelLine:{
                                            normal:{
                                                show:true,
                                                length: 0.001,
                                                length2: 0.001
                                            }
                                        }
                                    }]
                            },
                            id:"day1",
                            //param : ['settime',"3 26 2 0 0 set-dfl",'1 0 99 (fwex)'],
                            //params : [['settime',"3 8 26 3 0 0 set-dfl",'1 0 99 (fwex)']]
                            params :['src/js/tests.json']
                        },
                        {
                            option:{
                                title : {
                                    text: '接通率占比',
                                    subtext: '本月',
                                    x:'center',
                                    textStyle: {
                                        color: '#13498C',
                                        fontSize: '22',
                                    },
                                    subtextStyle: {
                                        color: '#ccc',
                                        fontSize: '18',
                                    }
                                },
                                tooltip: {
                                    trigger: 'item',
                                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                                },
                                legend: {
                                    x : 'center',
                                    y : 'bottom',
                                    data:['接通','未接通'],
                                    textStyle: {
                                        fontSize: '14',
                                        color: '#5985A6'
                                    }
                                },
                                series: [
                                    {
                                        name:'接通率占比',
                                        type:'pie',
                                        radius: ['50%', '70%'],
                                        center: ['50%', '50%'],
                                        // avoidLabelOverlap: false,
                                        label: {
                                            normal: {
                                                show: false,
                                                position: 'center'
                                            },
                                            emphasis: {
                                                show: true,
                                                textStyle: {
                                                    fontSize: '30',
                                                    fontWeight: 'bold'
                                                }
                                            }
                                        },
                                        labelLine: {
                                            normal: {
                                                show: false
                                            }
                                        },
                                        data:[
                                            {value:400, name:'接通'},
                                            {value:200, name:'未接通'},
                                        ],
                                        color:['#EF2124','#FD8673'],
                                    }
                                ]
                            },
                            id:"day2",
                            params :['src/js/test2.json']

                        },
                        {option:{
                            title: {
                                text: '呼入来源占比',
                                subtext: '当日',
                                x:'center',
                                textStyle: {
                                    color: '#13498C',
                                    fontSize: '22',
                                },
                                subtextStyle: {
                                    color: '#ccc',
                                    fontSize: '18',
                                }
                            },
                            tooltip : {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            legend: {
                                x : 'center',
                                y : 'bottom',
                                data: ['微博','微信','手机','固定电话','QQ','其他'],
                                textStyle: {
                                    fontSize: '14',
                                    color: '#5985A6'
                                }
                            },
                            series : [
                                {
                                    name: '呼入来源占比',
                                    type: 'pie',
                                    radius : '65%',
                                    center: ['50%', '50%'],
                                    data:[
                                        {value:200, name:'微博'},
                                        {value:3000, name:'微信'},
                                        {value:1000, name:'手机'},
                                        {value:500, name:'固定电话'},
                                        {value:100, name:'QQ'},
                                        {value:150, name:'其他'}
                                    ].sort(function (a, b) { return a.value - b.value}),
                                    roseType: 'angle',
                                    color:['#AFA7B6','#8A7D86','#2E2E2E','#705676','#B594A9'],
                                    label: {
                                        normal: {
                                            textStyle: {
                                                // color: 'rgba(255, 255, 255, 0.5)'
                                            }
                                        }
                                    },
                                    itemStyle: {
                                        emphasis: {
                                            shadowBlur: 10,
                                            shadowOffsetX: 0,
                                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                                        },
                                        normal: {
                                            label: {
                                                textStyle: {
                                                    // 用 itemStyle.normal.label.textStyle.fontSize 來更改餅圖上項目字體大小
                                                    fontSize: '14'
                                                }
                                            }
                                        }
                                    },
                                    labelLine:{
                                        normal:{
                                            show:true,
                                            length: 0.001,
                                            length2: 0.001
                                        }
                                    }
                                }
                            ]
                        },id:"day3",
                            params :['src/js/tests.json']
                        },
                        {option:{
                            title : {
                                text: '投诉比例',
                                subtext: '本月',
                                x:'center',
                                textStyle: {
                                    color: '#13498C',
                                    fontSize: '22',
                                },
                                subtextStyle: {
                                    color: '#ccc',
                                    fontSize: '18',
                                }
                            },
                            tooltip : {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            legend: {
                                x:"center",
                                y:"bottom",
                                data: ['重大投诉','一般投诉','其他','无投诉'],
                                textStyle: {
                                    fontSize: '14',
                                    color: '#5985A6'
                                }
                            },
                            series : [
                                {
                                    name:'投诉比例',
                                    type:'pie',
                                    radius : '60%',
                                    center: ['50%', '50%'],
                                    data:[
                                        {value:50, name:'重大投诉'},
                                        {value:120, name:'一般投诉'},
                                        {value:100, name:'其他'},
                                        {value:300, name:'无投诉'},
                                    ],
                                    color:['#76A176','#374B26','#3B6B3B','#8FC788','#C3DFB9'],
                                    itemStyle: {
                                        emphasis: {
                                            shadowBlur: 20,
                                            shadowOffsetX: 0,
                                            shadowColor: 'rgba(f, f, f, 0.5)'
                                        },
                                        normal: {
                                            label: {
                                                textStyle: {
                                                    // 用 itemStyle.normal.label.textStyle.fontSize 來更改餅圖上項目字體大小
                                                    fontSize: '14'
                                                }
                                            }
                                        },

                                    },
                                    labelLine:{
                                        normal:{
                                            show:true,
                                            length: 0.2,
                                            length2: 0.2
                                        }
                                    }
                                }
                            ]
                        },id:"day4",
                            params :['src/js/tests.json'],}
                    ];
                    return option;
                },
                dateType : ()=>"month",
            }
        },
        {
            name: 'explore',
            url: '/explore',
            component : 'scmExplore', //对应组件
            resolve: {              //配置传参
                option : function(){
                    let option= {
                        option: {
                            title: {
                                text: '咨询业务占比',
                                subtext: '本周',
                                x: 'center',
                                textStyle: {
                                    color: '#13498C',
                                    fontSize: '22',
                                },
                                subtextStyle: {
                                    color: '#ccc',
                                    fontSize: '18',
                                }
                            },
                            tooltip: {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            legend: {
                                x: 'center',
                                y: 'bottom',
                                data: ['营销类业务', '业务咨询', '活动咨询', '客户投诉'],
                                textStyle: {
                                    fontSize: '14',
                                    color: '#5985A6'
                                }
                            },
                            series: [
                                {
                                    name: '访问来源',
                                    type: 'pie',
                                    radius: ['10%', '60%'],
                                    center: ['50%', '50%'],
                                    roseType: 'radius',
                                    data: [
                                        {value: 1, name: '营销类业务'},
                                        {value: 5, name: '业务咨询'},
                                        {value: 2, name: '活动咨询'},
                                        {value: 1, name: '客户投诉'}
                                    ],
                                    color: ['#105F9E', '#207FBF', '#16A8C7', '#54DBDF', '#A9E1D4'],
                                    itemStyle: {
                                        emphasis: {
                                            shadowBlur: 10,
                                            shadowOffsetX: 0,
                                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                                        },
                                        normal: {
                                            label: {
                                                textStyle: {
                                                    // 用 itemStyle.normal.label.textStyle.fontSize 來更改餅圖上項目字體大小
                                                    fontSize: '14'
                                                }
                                            }
                                        }
                                    }
                                }]

                        }
                };
                    return option;
        }
            }
        },
        {
            name: 'tab',
            url: '/tab',
            component: 'scmTab',
            params : {option:null},
            resolve: {
                option: function () {
                    let option = {

                    }
                    return option;
                }
            }
        },{
            name: 'search',
            component: 'scmSearch',
            resolve: {
                option: function () {
                    let option = {

                    }
                    return option;
                }
            }
        }, {
            name: 'table',
            component: 'scmTable',
            params : {selecteds : []},
            resolve: {
                option: function () {
                    return 123;
                }
            }
        },{
            name: 'result',
            component: 'scmResult',
            resolve: {
                option: function () {
                    let option = {
                        id:'tav1',
                        option:{
                            title: {
                                text: '客服被投诉情况表',
                                subtext: '11月份投诉汇总'
                            },
                            xAxis: {
                                data:["kate","lily",'gugu','gaga','lucy','cate','marry','jane'],
                                axisLabel: {
                                    inside: true,
                                    textStyle: {
                                        color: '#000'
                                    }
                                },
                                axisTick: {
                                    alignWithLabel: true
                                },
                                axisLine: {
                                    show: true
                                },
                                z: 10
                            },
                            yAxis: {
                                axisLine: {
                                    show: false
                                },
                                axisTick: {
                                    alignWithLabel: true
                                },
                                axisLabel: {
                                    textStyle: {
                                        color: '#999'
                                    }
                                }
                            },
                            dataZoom: [
                                {
                                    type: 'inside'
                                }
                            ],
                            series: [
                                { // For shadow
                                    type: 'bar',
                                    itemStyle: {
                                        normal: {color: 'rgba(0,0,0,0.05)'}
                                    },
                                    barGap:'-100%',
                                    barCategoryGap:'40%',
                                    data: [0,2,1,1,0,0,1,3],
                                    animation: false
                                },
                                {
                                    type: 'bar',
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(
                                                0, 0, 0, 1,
                                                [
                                                    {offset: 0, color: '#83bff6'},
                                                    {offset: 0.5, color: '#188df0'},
                                                    {offset: 1, color: '#188df0'}
                                                ]
                                            )
                                        },
                                        emphasis: {
                                            color: new echarts.graphic.LinearGradient(
                                                0, 0, 0, 1,
                                                [
                                                    {offset: 0, color: '#2378f7'},
                                                    {offset: 0.7, color: '#2378f7'},
                                                    {offset: 1, color: '#83bff6'}
                                                ]
                                            )
                                        }
                                    },
                                    data: [2,0,10,8,20,3,0,2,0]
                                }
                            ]
                        }

                    };
                    return option;
                }
            }
        }
];

    states.forEach(function(state) {
        $stateProvider.state(state);
    });

    $locationProvider.html5Mode(true)
});

/**
 * 主页面的组件配置
 */
scm_web.component('app',indexComponent);
