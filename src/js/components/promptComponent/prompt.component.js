import './prompt.css';
import template from "./prompt.html";

const addComponent = {
    template: template,
    bindings: {
        option: "<"
    },
    controllerAs:"ctrl",
    controller: function ($scope, $timeout,$state,$rootScope) {
        /**
         * 生命周期的加载
         */
        this.$onInit = () => {

        };

        this.addModel = () =>{
            let option={
                id:'tav1',
                option:{
                    title: {
                        text: '活动咨询',
                    },
                    tooltip: {},
                    legend: {
                        data:['咨询量'],
                        textStyle:{
                            fontSize: "16"
                        }
                    },
                    xAxis: {
                        data: ["最新促销活动","以往促销活动"],
                        axisLabel: {
                            show: true,
                            textStyle:{
                                fontSize: '16'
                            }
                        },
                        axisLine:{
                        },
                    },
                    yAxis: {
                        axisLabel: {
                            show: true,
                            textStyle: {
                                fontSize: '16'
                            }
                        }
                    },

                    series: [{
                        name: '咨询量',
                        type: 'bar',
                        data: [20, 5],
                        itemStyle:{
                            normal:{
                                color: function (value){ return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6); }
                            }
                        }
                    }]
                }
            };
           // let chart = document.createElement(`<scm-chart flex="50"></scm-chart>`);
            let chart = document.createElement("scm-chart");
            chart.flex = "50";
            chart.option=option;
            let parent = document.querySelector("scm-view>div");
            parent.appendChild(chart);


        }
    }
}

export default addComponent;