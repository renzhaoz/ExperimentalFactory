// 依赖引入型的js API

class API {
    constructor(){
        this.isWifi = null;
    }

    get getWifiParam(){
        return new Promise(resolve=>{
            if(this.isWIfi){
                resolve(this.isWifi);
            }else{
                setTimeout(()=>{
                    resolve('小明');
                    this.ifWifi = '小明'
                },5000)
            }
        })
    }

    getWifiInfo = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(123);
            }, 3000);
        })
    }

}

export default API;