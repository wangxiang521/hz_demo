import './tab.css';
import template from "./tab.html";

const tabComponent = {
    template: template,
    bindings: {
        option: "<"
    },
    controllerAs:"ctrl",
    controller: function ($scope, $stateParams,$mdSidenav,ajaxService,$state,commonService,$http,$timeout) {

        this.HZ_GLOBAL = commonService.getHzGlobal();
        this.selectedId = "1";
        this.selecteds = [];
        this.params = commonService.getFindParam().find_param;
        this.tabIndex = 0;

        /**
         * 生命周期的加载
         */
        this.$onInit = () => {
            $scope.params = $stateParams.option.params;
            this.refreshTab($scope.params);
        }

        this.refreshTab = (params)=>{
            this.tabs=[];

            let echart_index=0;

            params.forEach((param,barindex)=>{
                /**
                 * 基础查询
                 */
                let
                    transform_data = [],
                    lengends = [],
                    xDatas = [],
                    datas = [],
                    keys = ["3_151", "8_151", "26_393222", "26_397322"],
                    options = [],
                    xData,
                    data,
                    lengendKey,
                    arrlength = 99;

                $http.get(param)
                    .success(function(opt){
                        let json = opt;
                        json.forEach((jsonRes)=>{
                            lengends.push(jsonRes.body[keys[0]].cdata);
                            xData = [];
                            data = [];
                        jsonRes.body[keys[1]].cdata.forEach((res,index)=>{
                            xData.push(jsonRes.body[keys[1]].cdata[index][0]);
                            data.push(jsonRes.body[keys[2]].cdata[index][0]);
                        })

                            xDatas.push(xData);
                            datas.push(data);

                    });
                        lengends.forEach((res,index)=>{

                            let in_option = {
                                color: ['#3398DB'],
                                tooltip : {
                                    trigger: 'axis',
                                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                                    }
                                },
                                title:{
                                    text:""
                                },
                                grid: {
                                    left: '3%',
                                    right: '4%',
                                    bottom: '3%',
                                    containLabel: true
                                },
                                xAxis : [
                                    {
                                        type : 'category',
                                        "axisLabel":{
                                            interval: 0
                                        },
                                        data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                                        axisTick: {
                                            alignWithLabel: true
                                        }
                                    }
                                ],
                                yAxis : [
                                    {
                                        type : 'value'
                                    }
                                ],
                                series : [
                                    {
                                        name:'直接访问',
                                        type:'bar',
                                        barWidth: '60%',
                                        data:[10, 52, 200, 334, 390, 330, 220]
                                    }
                                ]
                            };

                            in_option.xAxis[0].data = xDatas[index];
                            in_option.series[0].data = datas[index];
                            in_option.title.text = lengends[index];
                            options.push({option:in_option,id:"bar"+echart_index++,clickFn: true,});
                        })
                    });
                this.tabs.push({
                    label: "bar"+barindex,
                    param: options
                });
            });
        }

        this.toggleRight = e=>{
            e.target.parentNode.style.position="relative";
            e.target.parentNode.style.zIndex="100";

            $mdSidenav('right')
                .toggle()
                .then(function () {
                    console.log("123");
                });
        }

        this.toggle = (item,lindex)=>{
            if(this.selecteds.length>0 && this.selecteds.filter(res=>res.id==lindex).length>0){
                this.selecteds.filter(res=>{
                    return res.id == lindex;
                }).map(res=>{
                    res.values.push(item)
                })
            }else{
                let selected = {
                    id : lindex,
                    values:[item]
                };
                this.selecteds.push(selected);
            }
        }
        /**
         * 表点选赞
         */
        this.tabSearch = ()=>{
            let param='src/js/test2.json';
            $scope.params.push(param);
            $mdSidenav('right').toggle();
            console.log($scope.params);
            this.refreshTab($scope.params);
        }

    }
}

export default tabComponent;