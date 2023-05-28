import { app, BrowserWindow, ipcMain } from 'electron'
import { colors } from '../src/main/utils/design/colors'

let mainWindow: BrowserWindow | null

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

function createWindow () {
  // const icon = nativeImage.createFromPath(`${app.getAppPath()}/assets/icons/my-icon.png`)

  mainWindow = new BrowserWindow({
    // icon
    width: 1100,
    height: 700,
    backgroundColor: colors.background,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
    }
  })

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

async function registerListeners () {
  ipcMain.on('message', (_, message) => {
    console.log(message)
  })
}

app.on('ready', createWindow)
  .whenReady()
  .then(registerListeners)
  .catch(e => console.error(e))

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
