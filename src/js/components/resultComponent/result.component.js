import './result.css';
import template from "./result.html";

const resultComponent = {
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

export default resultComponent;