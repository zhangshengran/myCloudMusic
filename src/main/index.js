
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */

import { app, BrowserWindow, ipcMain,dialog  } from 'electron'




// if (process.env.NODE_ENV !== 'development') {
//   global.__static = require('path').join(__dirname, '/static').replace(////g, '////')
// }

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  BrowserWindow.addDevToolsExtension("C:/Users/wo/AppData/Local/Google/Chrome/User Data/Default/Extensions/nhdogjmejiglipccpnnnanhbledajbpd/5.1.1_0");
                                                                                                      // nhdogjmejiglipccpnnnanhbledajbpd

  // BrowserWindow.addDevToolsExtension("C:/Users/xunbao/AppData/Local/Google/Chrome/User Data/Default/Extensions/nhdogjmejiglipccpnnnanhbledajbpd/5.1.0_0");

  mainWindow = new BrowserWindow({
    height: 670,
    useContentSize: true,
    width: 1080,
    minWidth:1080,
    minHeight:670,
    frame: false,
    webPreferences: {webSecurity: false}
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})


ipcMain.on('min', e=> mainWindow.minimize());
ipcMain.on('max', e=> {
    if (mainWindow.isMaximized()) {
        mainWindow.unmaximize()
    } else {
        mainWindow.maximize()
    }
});
ipcMain.on('close', e=> mainWindow.close());

import { readdir } from 'fs';
var musicPath = "E:\\音乐";
ipcMain.on('ReadDir', (event, arg)=> {
  readdir(musicPath, (err, files) => {
   
    event.sender.send('asynchronous-reply', files)

})
  console.log('主进程收到消息',arg)
});




ipcMain.on('open-directory-dialog', function (event,p) {
    dialog.showOpenDialog({
      properties: [p]
    },function (files) {
        if (files){// 如果有选中
          // 发送选择的对象给子进程
        let dirPath = files[0];
      readdir(dirPath, (err, filesList) => {
          // console.log(filesList)
         
          filesList = filesList.filter((item)=>{
             if( /\.mp3$/.test(item)){
               return true;
             }
          })
       event.sender.send('select-dir-reply', {dirPath,filesList})

        })

  //         event.sender.send('selectedItem', files[0])
        }
    })
  });
  
 


//  function myReadDir(musicDirPath) {

//   return new Promise((res, rej) => {
//       readdir(musicDirPath, (err, files) => {
//           console.log(files)
//           res(files)
//       })
//   })
// }
