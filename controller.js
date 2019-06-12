$(document).ready(function () {
  const app = nodeRequire('electron').remote.app;
  const { remote } = nodeRequire('electron');

  $('#close').click(() => {
    console.log('close');
    remote.BrowserWindow.getFocusedWindow().hide();
  });

  $('#minimizar').click(() => {
    console.log('minimize');
    remote.BrowserWindow.getFocusedWindow().minimize();
  });

  $('#maximizar').click(() => {
    console.log('maximize');
    if(remote.BrowserWindow.getFocusedWindow().isMaximized()){
      remote.BrowserWindow.getFocusedWindow().restore();
    }else{
      remote.BrowserWindow.getFocusedWindow().maximize();
    }
  });

});