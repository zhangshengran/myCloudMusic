import Vue from 'vue'

export default function debounce(fn, t) {

    let delay = t || 500;

    return function () {
        let args = arguments;
        if (Vue.timer) {
            clearTimeout(Vue.timer);
        }
        Vue.timer = setTimeout(() => {
            Vue.timer = null;
            fn.apply(this, args);
        }, delay);
    }
};




export function lycAnalysis(lyc) {
    let lrcArr = lyc.split('\n')
    let timeArr = [];
    let lycArr = [];
    for (var item of lrcArr) {
        let itemArr = item.split(']');
        if(!itemArr[1]){

        }else{
            lycArr.push(itemArr[itemArr.length-1]);
            let time = timeToSecond(itemArr[0].slice(1))
            // console.log(time)
            timeArr.push(time-0.4)//歌词提前0.4s
        }
       

    }
    return { timeArr, lycArr }
}


function timeToSecond(time) {
    if (time) {
        let timeArr = time.split(':')
        let min = Number(timeArr[0]);
        let second = Number(timeArr[1]);
        return min * 60 + second;
    }


}

// currentTime	设置或返回音频中的当前播放位置（以秒计）。