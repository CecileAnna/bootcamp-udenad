// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

    // skriv din kode her...
    let foodArray = ['Pølse', 'Pasta', 'Pomfrit'];
    let text = document.querySelector("#liste");

    function printArray(array) {
        array.forEach((foodItem) => {
            text.innerHTML += `<li> ${foodItem} </li>`;
        });
    };

    printArray(foodArray);

}); // Afslutter: DOMContentLoaded