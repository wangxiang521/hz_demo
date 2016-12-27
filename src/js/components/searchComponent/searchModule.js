import searchComponent from "./search.component";

const searchModule = angular.module("scmSearch",[])
    .component("scmSearch",searchComponent);

export default searchModule;