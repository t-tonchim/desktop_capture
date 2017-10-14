import { app, shell } from 'electron'
import trimDesktop from './trimDesktop'
import createCaptureWindow from './createCaptureWindow'
import createFileManager from './createFileManager'

let captureWindow

function captureAndOpenItem() {
  const fileManager = createFileManager()
  return trimDesktop()
    .then(captureWindow.capture.bind(captureWindow))
    .then(image => {
      const createdFilename = fileManager.writeImage(app.getPath('temp'), image)
      return createdFilename
    })
    .then(shell.openItem.bind(shell))
    .then(() => {
      if (process.platform !== 'darwin') {
        app.quit()
      }
    })
}


app.on('ready', () => {
  captureWindow = createCaptureWindow()
  captureAndOpenItem()
})
