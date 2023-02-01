//------PEGA OS VALORES(VALUES) PAGINA INDEX----------//
const hours = document.querySelector('.horas');
const minutes = document.querySelector(".minutos");
const second = document.querySelector(".segundos");


//-------------FUNÇÃO--------------------------------//
const time = setInterval(() => {

    //---------FUNÇÃO PARA PEGAR A DATA ACTUAL(HORAS,MINUTOS,SEGUNDOS)-------//
    let currentTime = new Date();
    let hoursCurrent = currentTime.getHours();
    let minutesCurrent = currentTime.getMinutes();
    let secondCurrent = currentTime.getSeconds();

    //--------VERIFICA SE AS HORAS,MINUTOS E SEGUNDOS SÃO MENORES QUE 10------//
    if (hoursCurrent < 10) { hoursCurrent = "0" + hoursCurrent }
    if (minutesCurrent < 10) { minutesCurrent = "0" + minutesCurrent }
    if (secondCurrent < 10) { secondCurrent = "0" + secondCurrent }


    //--------ADICIONA OS VALORES A NOSSA PAGINA PAGINA INDEX.HTML------//
    hours.textContent = hoursCurrent;
    minutes.textContent = minutesCurrent;
    second.textContent = secondCurrent;

});









