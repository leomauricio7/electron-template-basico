$(document).ready(function () {
  const app = nodeRequire('electron').remote.app;
  const { remote } = nodeRequire('electron');

  const updateOnlineStatus = () => {
    if(navigator.onLine){
      $('#statusConection').css('color', '#34c84a');
    }else{
      $('#statusConection').css('color', '#fc605b');
    }
    $('#statusTextConection').text(navigator.onLine ? 'online' : 'offline')
  }

  window.addEventListener('online',  updateOnlineStatus)
  window.addEventListener('offline',  updateOnlineStatus)

  updateOnlineStatus()

  $('#close').click(() => {
    console.log('close');
    remote.BrowserWindow.getFocusedWindow(). close();
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