import { ipcMain, BrowserWindow, nativeImage } from 'electron'

class CaptureWindow {
  constructor() {
    this.win = new BrowserWindow({ show: false })
    this.win.loadURL(`file://${__dirname}/../../captureWindow.html`)
  }

  capture(clippingProfile) {
    return new Promise((resolve, reject) => {
      ipcMain.once('REPLY_CAPTURE', (_, { error, dataURL }) => {
        if(error) return reject(error)
        resolve(nativeImage.createFromDataURL(dataURL))
      })
      this.win.webContents.send('CAPTURE', clippingProfile)
    })
  }

  close() {
    this.win.close()
  }
}

export default function createCaptureWindow(){
  return new CaptureWindow()
}
