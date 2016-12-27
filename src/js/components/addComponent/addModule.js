import addComponent from "./add.component";

const addModule = angular.module("scmAdd",[])
    .component("scmAdd",addComponent);

export default addModule;