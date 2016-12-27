import chartComponent from "./chart.component.js";

const chartModule = angular.module("scmChart",[])
    .component("scmChart",chartComponent);

export default chartModule;