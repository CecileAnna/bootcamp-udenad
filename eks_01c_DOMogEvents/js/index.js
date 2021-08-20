// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

    // skriv din kode her...
    // let maxNum = 10;

    // let minNum = 0;

    let textCountP = document.querySelector('#text-count');

    let number = textCountP.textContent;

    let startNum = 5;

    number = startNum;

    function updateNumber() {

        textCountP.textContent = number;

        // if (textCountContent === NaN) {
        //     textCountContent = parseInt(textCountContent);
        // }

    };

    updateNumber();

    let btnDecrease = document.querySelector('#btn-count-decrease');

    let btnIncrease = document.querySelector('#btn-count-increase');

    function controlMinMax() {

        let maxNum = 10;

        let minNum = 0;

        if (number > minNum) {
            number--;
            updateNumber();

        } else if (number < maxNum) {
            number++;
            updateNumber();
        };

    };

    function eventHandlerIncrease(e) {
        controlMinMax();

    }

    function eventHandlerDecrease(e) {
        controlMinMax();

    }

    btnIncrease.addEventListener('click', eventHandlerIncrease);

    btnDecrease.addEventListener('click', eventHandlerDecrease);

}); // Afslutter: DOMContentLoaded