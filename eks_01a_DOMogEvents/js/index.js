// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

    // skriv din kode her...
    let textCountP = document.querySelector('#text-count');

    let number = textCountP.textContent;

    number = 5;

    function updateNumber() {

        textCountP.textContent = number;

        // if (textCountContent == NaN) {
        //     textCountContent = parseInt(textCountContent);
        // }

    };

    updateNumber();

    let btnDecrease = document.querySelector('#btn-count-decrease');

    let btnIncrease = document.querySelector('#btn-count-increase');

    function eventHandlerIncrease(e) {
        if (number < 10) {
            number++;
            updateNumber();
        }

    }

    function eventHandlerDecrease(e) {
        if (number > 0) {
            number--;
            updateNumber();
        }

    }

    btnIncrease.addEventListener('click', eventHandlerIncrease);

    btnDecrease.addEventListener('click', eventHandlerDecrease);

}); // Afslutter: DOMContentLoaded