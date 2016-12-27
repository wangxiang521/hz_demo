import './chart.css';
import template from "./chart.html";

const chartComponent = {
    template: template,
    bindings: {
        option: "<",
        exflag: "<",
    },
    controllerAs: "ctrl",
    controller: function ($scope, $timeout, $state,$mdSidenav, $mdDialog) {
        /**
         * 生命周期的加载
         */

        this.$onInit = () => {
            let option = this.option.option,
                id = this.option.id,
                flag = this.option.clickFn;

            $timeout(() => {
                if (document.getElementById(id)) {
                    let myChart = echarts.init(document.getElementById(id));
                    myChart.setOption(option);
                    if(flag){
                        myChart.on("click",function(params){
                            $mdSidenav('right')
                              .toggle();
                            //console.log(params);
                            params.color="#000";
                        });
                    }
                }
            }, 10);

            this.goPage = () => {
                $state.go('tab', {option: this.option});
            }
            this.showConfirm = function(ev) {
                // Appending dialog to document.body to cover sidenav in docs app
                var confirm = $mdDialog.confirm()
                    .title('确定删除此模块？')
                    .textContent('删除后可以按需求添加.')
                    .targetEvent(ev)
                    .ok('删除')
                    .cancel('取消');

                $mdDialog.show(confirm).then(function() {
                    let parent = ev.target.parentNode.parentNode.parentNode.parentNode.parentNode;
                    let box = ev.target.parentNode.parentNode.parentNode.parentNode;
                    parent.removeChild(box);
                },function(){});
            };

        }

    }
}

export default chartComponent;