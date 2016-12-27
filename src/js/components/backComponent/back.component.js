import './back.css';
import template from "./back.html";

const backComponent = {
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

        this.goBack = (e) => {
            e.target.style.animation = "run 0.2s linear";
            e.target.parentNode.style.animation = "show 0.2s ease-in-out";

            $timeout(()=>{
                $rootScope.$broadcast('goHome', "day");
                $state.go("day",{
                });
             },250);
        }
    }
}

export default backComponent;