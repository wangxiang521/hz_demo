import './search.css';
import template from "./search.html";

const searchComponent = {
    template: template,
    bindings: {
        option: "<"
    },
    controllerAs:"ctrl",
    controller: function ($scope, $timeout,$state) {
        /**
         * 生命周期的加载
         */
        this.$onInit = () => {

        }

        this.goResult = () =>{
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
                        data: [30, 6],
                        itemStyle:{
                            normal:{

                                color: function (value){ return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6); }
                            }
                        }
                    }]
                }
            };
            $state.go('result',{option:option});
        }

        this.options = this.option;

        this.delCheck = ()=>{
           let checkeds = document.querySelector('[class="md-checked"]');
           for(let i=0;i<checkeds.length;i++){
               let check=checkeds[i];
               check.parentNode.parentNode.parentNode.removeChild(check.parentNode.parentNode);
           }
        }

    }
}

export default searchComponent;