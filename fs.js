// import { readdir } from 'fs';
const fs = require('fs')

const path = require('path')
var musicPath = "E:\\音乐";
function myReadDir(musicPath) {

    return new Promise((res, rej) => {
        fs.readdir(musicPath, (err, files) => {
            console.log(files)
        })
    })
}




myReadDir(musicPath)