import tableComponent from "./table.component";

const tableModule = angular.module("scmTable",[])
    .component("scmTable",tableComponent);

export default tableModule;