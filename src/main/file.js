var path = require('path');
var fs = require('fs');
import { app, BrowserWindow, ipcMain } from 'electron'
import { readdir } from 'fs';

ipcMain.on('myReadDir', (event, arg)=> {
    console.log('进程收到消息',arg)
});


var musicPath = "E:\\音乐";
export function myReadDir(musicDirPath) {

    return new Promise((res, rej) => {
        readdir(musicDirPath, (err, files) => {
            console.log(files)
            res(files)
        })
    })
}
