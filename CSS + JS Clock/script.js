let secondhand = document.querySelector(".second-hand");
let minshand = document.querySelector(".min-hand");
let hourshand = document.querySelector(".hour-hand");
function setdate() {
    const now = new Date();
    let seconds = now.getSeconds();
    let secondsdegrees = ((seconds / 60) * 360);
    secondhand.style.transform = `rotate(${secondsdegrees}deg)`

    let mins = now.getMinutes();
    let minsdegrees = ((mins / 60) * 360) + 90;
    minshand.style.transform = `rotate(${minsdegrees}deg)`

     let hours = now.getMinutes();
     let hoursdegrre = ((mins / 12) * 360) * 90;
     hourshand.style.transform = `rotate(${hoursdegrre}deg)`


}


setInterval(setdate, 1000);


