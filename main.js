const btn = document.getElementById("btn");
const colorSpan = document.getElementById("color");

btn.addEventListener("click", () =>{
    let colorHex = '#' + ((Math.random()).toString(16)).slice(2,8); // get random

    colorSpan.innerHTML = colorHex;
    document.body.style.backgroundColor = colorHex;
});