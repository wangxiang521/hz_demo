import viewComponent from "./view.component";

const viewModule = angular.module("scmView",[])
    .component("scmView",viewComponent);

export default viewModule;