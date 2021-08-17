// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

    // skriv din kode her...
    let textCountP = document.querySelector('#text-count');

    let number = textCountP.textContent;

    let startNum = 5;

    number = startNum;

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
        let maxNum = 10;
        if (number < maxNum) {
            number++;
            updateNumber();
        }

    }

    function eventHandlerDecrease(e) {
        let minNum = 0;
        if (number > minNum) {
            number--;
            updateNumber();
        }

    }

    btnIncrease.addEventListener('click', eventHandlerIncrease);

    btnDecrease.addEventListener('click', eventHandlerDecrease);

}); // Afslutter: DOMContentLoaded