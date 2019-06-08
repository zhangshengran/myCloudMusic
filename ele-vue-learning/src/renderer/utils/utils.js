import Vue from 'vue'
 
export default function debounce (fn, t){
   
    let delay = t || 500;
   
     return function () {
        let args = arguments;
        if(Vue.timer){
            clearTimeout(Vue.timer);
        }
        Vue.timer = setTimeout(() => {
            Vue.timer = null;
            fn.apply(this, args);
        }, delay);
    }
};
