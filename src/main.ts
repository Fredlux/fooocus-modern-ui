import { app, BrowserWindow, Menu, MenuItem, dialog, shell } from 'electron'
import * as path from 'path'
import * as url from 'url'

let mainWindow: BrowserWindow | null = null

const createWindow = () => {
  const backgroundColor = '#0a0a0a'
  
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1200,
    minHeight: 700,
    backgroundColor,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      enableRemoteModule: true,
    },
    titleBarStyle: 'hiddenInset',
    trafficLightPosition: { x: 12, y: 16 },
    vibrancy: 'under-window',
    visualEffectState: 'active',
    show: false,
  })

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, '../dist/index.html'),
      protocol: 'file:',
      slashes: true,
    })
  )

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  // Build menu
  const template = [
    {
      label: 'Fooocus Modern',
      submenu: [
        {
          label: 'About Fooocus Modern',
          selector: 'orderFrontStandardAboutPanel:',
        },
        { type: 'separator' },
        { label: 'Services' },
        { type: 'separator' },
        {
          label: 'Hide Fooocus Modern',
          accelerator: 'Command+H',
          selector: 'hide:',
        },
        {
          label: 'Hide Others',
          accelerator: 'Command+Alt+H',
          selector: 'hideOtherApplications:',
        },
        { label: 'Show All' },
        { type: 'separator' },
        {
          label: 'Quit',
          accelerator: 'Command+Q',
          click: () => {
            app.quit()
          },
        },
      ],
    },
    {
      label: 'Edit',
      submenu: [
        { label: 'Undo', accelerator: 'Command+Z', selector: 'undo:' },
        { label: 'Redo', accelerator: 'Shift+Command+Z', selector: 'redo:' },
        { type: 'separator' },
        { label: 'Cut', accelerator: 'Command+X', selector: 'cut:' },
        { label: 'Copy', accelerator: 'Command+C', selector: 'copy:' },
        { label: 'Paste', accelerator: 'Command+V', selector: 'paste:' },
        {
          label: 'Select All',
          accelerator: 'Command+A',
          selector: 'selectAll:',
        },
      ],
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'Reload',
          accelerator: 'Command+R',
          click: () => {
            mainWindow?.webContents.reload()
          },
        },
        {
          label: 'Toggle Full Screen',
          accelerator: 'Ctrl+Command+F',
          click: () => {
            mainWindow?.setFullScreen(!mainWindow?.isFullScreen())
          },
        },
        {
          label: 'Toggle Developer Tools',
          accelerator: 'Alt+Command+I',
          click: () => {
            mainWindow?.webContents.toggleDevTools()
          },
        },
      ],
    },
    {
      label: 'Window',
      submenu: [
        {
          label: 'Minimize',
          accelerator: 'Command+M',
          selector: 'performMiniaturize:',
        },
        {
          label: 'Close',
          accelerator: 'Command+W',
          selector: 'performClose:',
        },
        { type: 'separator' },
        {
          label: 'Bring All to Front',
          selector: 'arrangeInFront:',
        },
      ],
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'Documentation',
          click: () => {
            shell.openExternal('https://github.com/lllyasviel/Fooocus')
          },
        },
        {
          label: 'GitHub Repository',
          click: () => {
            shell.openExternal('https://github.com/Fredlux/crabs-compressor')
          },
        },
      ],
    },
  ]

  const menu = Menu.buildFromTemplate(template as MenuItem[])
  Menu.setApplicationMenu(menu)
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (mainWindow === null) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
