import axios from 'axios'

var instance = axios.create({
    baseURL: 'http://www.zhuoran.fun:3000',
    timeout: 2000,
    // headers: {'X-Custom-Header': 'foobar'}
  });
  

async function get(url,data){
    return  instance.get(url,{params:data})
}
async function post(url,data){
       return  instance.post(url,data)
}
const http = {
    get,post
}
export default http;

    