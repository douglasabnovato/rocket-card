const generate = document.querySelector(".box");

function generatebkg() {
    let red = Math.floor(Math.random() * (255 - 0) + 0);
    let green = Math.floor(Math.random() * (255 - 0) + 0);
    let blue = Math.floor(Math.random() * (255 - 0) + 0);

    generate.style.background = `rgb(${red}, ${green}, ${blue} )`;
}