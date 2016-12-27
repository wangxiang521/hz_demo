import { HZ_GLOBAL } from "../global_val";

class commonService{

    constructor(){

    }

    /**
     * 获得findParam
     * @returns {{find_param: [*,*,*]}}
     */
    getFindParam(){
        return {
            find_param :[{
                name:"年龄标签",
                value:12,
                class:"first"
            },{
                name:"投诉标签",
                value:17,
                class:"second"
            },{
                name : "渠道",
                value:3,
                class:"third"
            }]
        }
    }

    getHzGlobal(){
        return HZ_GLOBAL;
    }



}

export default commonService;