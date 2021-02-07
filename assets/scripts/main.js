// main.js

var volumeNum = document.getElementById("volume-number");
var volumeSlider = document.getElementById("volume-slider");
var volumeImg = document.getElementById("volume-image");
var sound = document.getElementById("horn-sound");
var button = document.getElementById("honk-btn");
var soundImg = document.getElementById("sound-image");

var radioAir = document.getElementById("radio-air-horn");
var radioCar = document.getElementById("radio-car-horn");
var radioParty = document.getElementById("radio-party-horn");


// Input field that serves as the textual indicator of sound level
function changeSlider(){
    if(volumeNum.value==""){
        volumeSlider.value=0;
    }
    else{
        volumeSlider.value=volumeNum.value;
    }

    if(volumeSlider.value == 0) {
        button.disabled=true;
    }
    else{
        button.disabled=false;
    }

    if(volumeSlider.value == 0) {
        volumeImg.src = "./assets/media/icons/volume-level-0.svg"
    }
    else if(volumeSlider.value<=33){
        volumeImg.src = "./assets/media/icons/volume-level-1.svg"
    }
    else if(volumeSlider.value<=66){
        volumeImg.src = "./assets/media/icons/volume-level-2.svg"
    }
    else{
        volumeImg.src = "./assets/media/icons/volume-level-3.svg"
    }

    // Slider that serves visual controller for sound level
    sound.volume=volumeSlider.value/100;

}
volumeNum.addEventListener("input",changeSlider);

function changeNum(){
    volumeNum.value=volumeSlider.value;
    if(volumeSlider.value == 0) {
        button.disabled=true;
    }
    else{
        button.disabled=false;
    }

    if(volumeSlider.value == 0) {
        volumeImg.src = "./assets/media/icons/volume-level-0.svg"
    }
    else if(volumeSlider.value<=33){
        volumeImg.src = "./assets/media/icons/volume-level-1.svg"
    }
    else if(volumeSlider.value<=66){
        volumeImg.src = "./assets/media/icons/volume-level-2.svg"
    }
    else{
        volumeImg.src = "./assets/media/icons/volume-level-3.svg"
    }

    // Slider that serves visual controller for sound level
    sound.volume=volumeSlider.value/100;

}
volumeSlider.addEventListener("input",changeNum);

function player(event){
    event.preventDefault();
    sound.play();
}

button.addEventListener("click", player);

function airFunc(){
    soundImg.src = "./assets/media/images/air-horn.svg";
    sound.src = "./assets/media/audio/air-horn.mp3";
}
function carFunc(){
    soundImg.src = "./assets/media/images/car.svg";
    sound.src = "./assets/media/audio/car-horn.mp3";
}
function partyFunc(){
    soundImg.src = "./assets/media/images/party-horn.svg";
    sound.src = "./assets/media/audio/party-horn.mp3";
}
radioAir.addEventListener("click", airFunc);
radioCar.addEventListener("click", carFunc);
radioParty.addEventListener("click", partyFunc);

