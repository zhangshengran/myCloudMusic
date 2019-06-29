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

 

let str = "[00:00.000] 作曲 : 黄家驹\n[00:00.666] 作词 : 黄家驹\n[00:02.000] 编曲 : Beyond / Kunihiko Ryo\n[00:03.000]\n[00:18.466] 今天我 寒夜里看雪飘过\n[00:25.110] 怀着冷却了的心窝漂远方\n[00:30.950] 风雨里追赶 雾里分不清影踪\n[00:37.229] 天空海阔你与我\n[00:40.291] 可会变（谁没在变）\n[00:43.440] 多少次 迎着冷眼与嘲笑\n[00:50.050] 从没有放弃过心中的理想\n[00:55.907] 一刹那恍惚 若有所失的感觉\n[01:02.133] 不知不觉已变淡\n[01:05.243] 心里爱（谁明白我）\n[01:08.801] 原谅我这一生不羁放纵爱自由\n[01:15.799] 也会怕有一天会跌倒\n[01:22.008] 背弃了理想 谁人都可以\n[01:28.276] 哪会怕有一天只你共我\n[01:34.102]\n[01:42.695] 今天我 寒夜里看雪飘过\n[01:49.284] 怀着冷却了的心窝漂远方\n[01:55.189] 风雨里追赶 雾里分不清影踪\n[02:01.405] 天空海阔你与我\n[02:04.535] 可会变（谁没在变）\n[02:08.014] 原谅我这一生不羁放纵爱自由\n[02:15.040] 也会怕有一天会跌倒\n[02:21.279] 背弃了理想 谁人都可以\n[02:27.531] 哪会怕有一天只你共我\n[02:33.633]\n[03:08.454] 仍然自由自我 永远高唱我歌\n[03:15.064] 走遍千里\n[03:19.739] 原谅我这一生不羁放纵爱自由\n[03:26.734] 也会怕有一天会跌倒\n[03:33.005] 背弃了理想 谁人都可以\n[03:39.257] 哪会怕有一天只你共我\n[03:45.496] 背弃了理想 谁人都可以\n[03:51.756] 哪会怕有一天只你共我\n[03:57.201] 原谅我这一生不羁放纵爱自由\n[04:04.204] 也会怕有一天会跌倒\n[04:10.456] 背弃了理想 谁人都可以\n[04:16.647] 哪会怕有一天只你共我\n[04:22.828]\n"



export function lycAnalysis(lyc) {
    // console.log(String(lyc))

    let lrcArr = lyc.split('\n')
    let timeArr = [];
    let lycArr = [];
    for (item of lrcArr) {
        let itemArr = item.split(']');
        lycArr.push(itemArr[1]);
        let time = timeToSecond(itemArr[0].slice(1))
        timeArr.push(time)

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