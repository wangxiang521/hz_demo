import './explore.css';
import template from "./explore.html";

const exploreComponent = {
    template: template,
    bindings: {
        option: "<"
    },
    controllerAs:"ctrl",
    controller: function ($scope, $timeout) {
        /**
         * 生命周期的加载
         */
        this.$onInit = () => {

        }
    }
}

export default exploreComponent;