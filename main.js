const electron = require('electron')
const url = require('url');
const path = require('path');

const {app,BrowserWindow }= electron;

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
})
