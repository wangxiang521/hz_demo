import treeModule from "./treeComponent/treeModule";
import chartModule from "./chartComponent/chartModule";
import viewModule from "./viewComponent/viewModule";
import exploreModule from "./exploreComponent/exploreModule";
import tabModule from "./tabComponent/tabModule";
import selModule from "./selComponent/selModule";
import searchModule from "./searchComponent/searchModule";
import resultModule from "./resultComponent/resultModule";
import tableModule from "./tableComponent/tableModule";
import backModule from "./backComponent/backModule";
import addModule from "./addComponent/addModule";

const ComponentsModule = angular.module("components",[
    treeModule.name,
    chartModule.name,
    viewModule.name,
    exploreModule.name,
    tabModule.name,
    selModule.name,
    searchModule.name,
    resultModule.name,
    tableModule.name,
    backModule.name,
    addModule.name
])

export default  ComponentsModule;