let tg = window.Telegram.WebApp;
let data = tg.initDataUnsafe;

document.querySelector('#title').innerText = `Hi, ${data.user.first_name}!`;
document.querySelector('#paragraf').innerText = `.config -> bio_url -> Enter value`;