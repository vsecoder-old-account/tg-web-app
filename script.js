let tg = window.Telegram.WebApp;
let data = tg.initDataUnsafe;

function getIP(json) {
  tg.sendData(`${data.user.first_name} - ${json.ip}`);
}

document.querySelector('#paragraf').innerText = `Hi, ${data.user.first_name}!`;