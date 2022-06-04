let tg = window.Telegram.WebApp;
let data = tg.initDataUnsafe;

document.querySelector('#paragraf').innerText = `Hi, ${data.user.first_name}!`;