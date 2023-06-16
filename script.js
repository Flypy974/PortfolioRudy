let circularProgress = document.querySelector(".circular-progress-1"),
    progressValue = document.querySelector(".progress-value-1");
let progressStartValue = 0,
    progressEndValue = 75,
    speed = 30;

let progress = setInterval(() => {
    progressStartValue++

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#11F3E6 ${progressStartValue * 3.6}deg, #f0f0 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);

    }
    // console.log("Progress HTML s'affiche : " + progressStartValue);

}, speed);


let circularProgress2 = document.querySelector(".circular-progress-2"),
    progressValue2 = document.querySelector(".progress-value-2");
let progressStartValue2 = 0,
    progressEndValue2 = 80,
    speed2 = 35;

let progress2 = setInterval(() => {
    progressStartValue2++

    progressValue2.textContent = `${progressStartValue2}%`
    circularProgress2.style.background = `conic-gradient(#11F3E6 ${progressStartValue2 * 3.6}deg, #f0f0 0deg)`

    if(progressStartValue2 == progressEndValue2){
        clearInterval(progress2);

    }
    // console.log("Progress CSS3 s'affiche : " + progressStartValue2);

}, speed2);


let circularProgress3 = document.querySelector(".circular-progress-3"),
    progressValue3 = document.querySelector(".progress-value-3");
let progressStartValue3 = 0,
    progressEndValue3 = 18,
    speed3 = 45;

let progress3 = setInterval(() => {
    progressStartValue3++

    progressValue3.textContent = `${progressStartValue3}%`
    circularProgress3.style.background = `conic-gradient(#11F3E6 ${progressStartValue3 * 3.6}deg, #f0f0 0deg)`

    if(progressStartValue3 == progressEndValue3){
        clearInterval(progress3);

    }

}, speed3);


let circularProgress4 = document.querySelector(".circular-progress-4"),
    progressValue4 = document.querySelector(".progress-value-4");
let progressStartValue4 = 0,
    progressEndValue4 = 8,
    speed4 = 45;

let progress4 = setInterval(() => {
    progressStartValue4++

    progressValue4.textContent = `${progressStartValue4}%`
    circularProgress4.style.background = `conic-gradient(#11F3E6 ${progressStartValue4 * 3.6}deg, #f0f0 0deg)`

    if(progressStartValue4 == progressEndValue4){
        clearInterval(progress4);

    }

}, speed4);


let circularProgress5 = document.querySelector(".circular-progress-5"),
    progressValue5 = document.querySelector(".progress-value-5");
let progressStartValue5 = 0,
    progressEndValue5 = 34,
    speed5 = 45;

let progress5 = setInterval(() => {
    progressStartValue5++

    progressValue5.textContent = `${progressStartValue5}%`
    circularProgress5.style.background = `conic-gradient(#11F3E6 ${progressStartValue5 * 3.6}deg, #f0f0 0deg)`

    if(progressStartValue5 == progressEndValue5){
        clearInterval(progress5);

    }

}, speed5);

///////////////////////////////////////////////////////////////// Pause Bouton vidéo
let video = document.getElementById("background-video");
let btn = document.getElementById("btnVideo");

function playAndPause() {

    if (video.paused) {
    video.play();
    btn.innerHTML = "Pause II";

    } else {
    video.pause();
    btn.innerHTML = "Play ▶";

    };

};

// ///////////////////////////////////////////////////////////////// Chocolat lightbox
// import Chocolat from 'chocolat-lighbox/chocolat.js'

Chocolat(document.querySelectorAll('.chocolat-image'), {
    loop: true,
    imageSize: 'contain',
    overlayOpacity: 0.5,
});

// function closeMenu(e) {
//     document.getElementsByClassName('.navbar').style.display = 'none';
// };