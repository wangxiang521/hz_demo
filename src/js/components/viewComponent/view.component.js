import  "./view.css";
import template from "./view.component.html";

const viewComponent = {
    template,
    bindings: {
        option : "<",
        dateType : "<"
    },
    controllerAs:"ctrl",
    controller: function ($scope, $http, ajaxService,$rootScope,$stateParams,commonService) {
        let HZ_GLOBAL = commonService.getHzGlobal();
        /**
         * 生命周期的加载
         */
        this.$onInit = () => {
            let startDate,
                endDate,
                dateType = this.dateType;

            if($stateParams.option){
                startDate = $stateParams.option.startDate?$stateParams.option.startDate:$stateParams.option.endDate;
                endDate = $stateParams.option.endDate?$stateParams.option.endDate:$stateParams.option.startDate;
                startDate = ajaxService.getStringDate(startDate);
                endDate = ajaxService.getStringDate(endDate);
            }else{
                switch (dateType){
                    case "day" :
                        startDate = $rootScope.dates[1]-1;
                        endDate = $rootScope.dates[1];
                        break;
                    case "week" :
                        startDate = $rootScope.dates[1]-7;
                        endDate = $rootScope.dates[1];
                        break;
                    case "month" :
                        startDate = $rootScope.dates[1]-30;
                        endDate = $rootScope.dates[1];
                        break;
                }
            }

            /**
             * 基础查询
             */
            let
                url = HZ_GLOBAL.interface_url.query_url,
                channel = HZ_GLOBAL.system_config.channel,
                param =[
                    'settime',
                    '88888888 set-auxfn',
                    'start-batch',
                    '1 0 set-bstype',
                    `sw" ${startDate}:${endDate}" 20 1 (find-work)`,
                    'end-batch',
                ],
                option = {
                    url : url,
                    channel : channel,
                    param : param,
                }

            $rootScope.$broadcast('progress', {state:"start",value:"10"});
            ajaxService.searchPost(option)
                .then(res=>{
                    $rootScope.$broadcast('progress', {state:"start",value:"30"});
                    this.option.map((res2,index)=>{
                        $rootScope.$broadcast('progress', {state:"start",value:"50"});
                        /**
                         * 获取每一个图表的param 并且读取数据
                         */
                        if(res2.param){
                            option.param = res2.param;
                            ajaxService.viewPost(option)
                                .then(res=>{
                                    $rootScope.$broadcast('progress', {state:"start",value:"70"});
                                    let jsonRes = JSON.parse(res.split("<timer>")[0]),
                                        legends = [],
                                        datas = [];

                                    if(jsonRes.body){
                                        jsonRes.body[jsonRes.head[0].id].cdata.forEach((res,index)=>{
                                            legends.push(res[0]);
                                            datas.push({
                                                name : res[0],
                                                value : jsonRes.body[jsonRes.head[1].id].cdata[index]
                                            })
                                        })
                                        res2.option.legend.data = legends;
                                        res2.option.series[0].data = datas;
                                        this.options = this.option;
                                        $rootScope.$broadcast('progress', {state:"end",value:"100"});
                                    }else{
                                        this.options = this.options.slice(0,index).concat(this.options.slice(index+1));
                                        $rootScope.$broadcast('progress', {state:"end",value:"100"});
                                    }
                                })
                        }
                    })
                })

            this.options = this.option;
        }

    }
};

export default viewComponent;
