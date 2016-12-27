class ajaxService {
    constructor($http){
        this.$http = $http;
    };

    /**
     * 请求
     * @param href url
     * @param param 参数
     * @returns {Promise}
     */
    getPost(href,param){
        let url = href,
            input = param,
            promise = new Promise((resolve,reject)=>{
                if(window.XMLHttpRequest) {
                    var xmlHttp=new XMLHttpRequest();
                }
                else if(window.ActiveXObject) {
                    var xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
                }

                if(!xmlHttp) {
                    alert("No HTTP request support");
                    return "";
                }

                xmlHttp.open("POST", url, false);

                var t0=(new Date()).getTime();
                xmlHttp.send(input);

                if (xmlHttp.status == 200) {
                    var restxt=xmlHttp.responseText;
                    resolve(restxt);
                }
            })
        return promise;
    }

    /**
     * 获取数据集的最大最小日期
     * @param data  json数据
     * @returns {Array} 返回，最大 和最小日期的数组
     */
    getMaxMinDate(data){
        let dates = [];
        dates.push(data.body[data.head[0].id].cdata[0]+"");
        dates.push(data.body[data.head[0].id].cdata[data.body[data.head[0].id].cdata.length-1]+"");
        return dates;
    }

    /**
     * 处理时间数据返回string类型的数据
     * @param date
     * @returns {string}
     */
    getStringDate(date){
        let year = date.getFullYear(),
            month = (date.getMonth()+1+"").length==1?"0"+(date.getMonth()+1):date.getMonth()+1,
            day = (date.getDate()+"").length==1?"0"+date.getDate():date.getDate();
        return year+""+month+day;
    }

    /**
     * 转换成json
     * @param res
     */
    transformJson(res){
        return JSON.parse(res.split("<timer>")[0]);
    }

    /**
     * 获得 session
     * @param user
     */
    getHzSession(user){
        let uid = user.loginName || "hozo",
            pass = user.password || "hozoer16",
            browser = this.appInfo() || "zh",
            option = {},
            promise = new Promise((resolve,reject)=>{
                option.uid = uid;
                option.pass = pass;
                option.browser = browser.appname+"_"+browser.version;

                this.loginPost(option)
                    .then(res=>{
                        localStorage.setItem("loginInfo",res.trim());
                        resolve(JSON.parse(res).sessionID);
                    })
            })

        return promise;
    }

    searchPost(option){
        let
            // url = option.url || "http://192.168.1.230/cgi-bin/query30.exe",
            url = "http://hozo.datatop.biz:2222/cgi-bin/query30.exe",
            channel = option.channel,
            param = this.getUserInfoParam()+"\n";

        option.param.forEach(res=>{
            param += res+'\n'
        });

        param += ".selapsed";
        url = url+"?channel="+channel;
        return this.getPost(url,param);
    }

    viewPost(option){
        let url = option.url,
            channel = option.channel,
            param = this.getUserInfoParam()+"\n";

        option.param.forEach(res=>{
            param += res+'\n'
        });

        param += ".selapsed";
        url = url+"?channel="+channel;

        return this.getPost(url,param);
    }

    getUserInfoParam(){
        let userInfo = JSON.parse(localStorage.getItem("loginInfo")),
            userString = `${userInfo.userNo} ${userInfo.sessionID} ${userInfo.userId}`
        return userString;
    }

    /**
     * 登陆post
     * @param option
     * @returns {Promise}
     */
    loginPost(option){
        let
            // url = option.url || "http://192.168.1.230/cgi-bin/login30.exe",
            url = "http://hozo.datatop.biz:2222/cgi-bin/login30.exe",
            channel = option.channel || "369",
            uid = option.uid,
            pass = option.pass,
            browser = option.browser;
        return this.getPost(`${url}?channel=${channel}`,`uid=${uid}\npass=${pass}\nbrowser=${browser}`)
    }

    /**
     * 获取浏览器信息
     * @returns {{appname: string, version: number}}
     */
    appInfo(){
        let browser = {appname: 'unknown', version: 0},
            userAgent = window.navigator.userAgent.toLowerCase();
    //IE,firefox,opera,chrome,netscape
        if ( /(msie|firefox|opera|chrome|netscape)\D+(\d[\d.]*)/.test( userAgent ) ){
            browser.appname = RegExp.$1;
            browser.version = RegExp.$2;
        } else if ( /version\D+(\d[\d.]*).*safari/.test( userAgent ) ){ // safari
            browser.appname = 'safari';
            browser.version = RegExp.$2;
        }
        return browser;
    }

}

export default ajaxService;