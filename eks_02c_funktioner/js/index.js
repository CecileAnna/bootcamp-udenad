// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

    // skriv din kode her...
    function hils(navn) {
        return `Hej med dig, ${navn}!`;
    };

    let hilsenFraOle = hils("Ole");

    console.log(hilsenFraOle);

    // hils('Søren');
    // hils('Sanne');
    // hils('Simon');

}); // Afslutter: DOMContentLoaded