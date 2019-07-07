// import { readdir } from 'fs';
const fs = require('fs')

const path = require('path')
var musicPath = "E:\\音乐";
function myReadDir(musicPath) {

    return new Promise((res, rej) => {
        fs.readdir(musicPath, (err, files) => {
            files.forEach(element => {
                fs.stat(musicPath + '\\' + element, (err, data) => {
                    if (err) throw err;
    
                    console.log(data);
                });
            });
           
            // console.log(files)
        })
    })
}





// myReadDir(musicPath)

fs.stat(musicPath + '\\' + '《犬夜叉》插曲  《跨越时空的思念》.mp3', (err, data) => {
    if (err) throw err;

    console.log(data);
});