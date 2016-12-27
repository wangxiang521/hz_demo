import './index.css';
import template from "./index.html";

const indexComponent = {
    template : template,
    controllerAs:"ctrl",
    controller : function($scope,$rootScope,$interval,commonService){
        /**
         * 广播事件
         * @type {boolean}
         */
        $scope.progress_flag = false;
        $rootScope.$on('progress',(e, res)=>{
            if(res.value == 100 || res.value == 0){
                $interval(()=>{
                    $scope.progress_flag = false;
                },500)
            }else{
                $scope.progress_flag = true;
            }
            $scope.determinateValue = res.value;
        });

        this.$onInit = ()=>{
            this.params = commonService.getFindParam();
        }

    }
}

export default indexComponent;