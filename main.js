const electron = require('electron')
const url = require('url');
const path = require('path');

const {app,BrowserWindow,Menu }= electron;

let mainWindow;


// listen for the app to be ready,

app.on('ready', function(){
  // create new mainWindow
  mainWindow = new BrowserWindow({});
  // load html file into Window
  mainWindow.loadURL(url.format({
    pathname:path.join(__dirname, 'mainWindow.html'),
    protocol:'file:',
    slashes:true
  }));
  //build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  //Insert the Menu
  Menu.setApplicationMenu(mainMenu);
});

//create menu template
const mainMenuTemplate = [
  {
    label:'File',
    submenu:[{
      label:'Add Item'
    },
    {
      label:'Clear Items'
    },
    {
      label:'Quit',
      accelerator:process.platform=='darwin'?'Command+Q':'Ctrl+Q',
      click(){
        app.quit();
      }
    }
  ]
  }
];
