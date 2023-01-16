let video = document.querySelector('.video');
let liquide = document.querySelector('.orange-liquide');
let btn = document.getElementById('play-pause');
let muteBtn = document.getElementById('mute');
let volumeslider = document.getElementById('volumeSlider');
let orangeBar = document.querySelector('.orange-bar');

function togglePlayPause() {

    if(video.paused){
        btn.className="pause";
        video.play();
    }
    else {
        btn.className = "play";
        video.pause();
    }

}

btn.onclick = function(){
    togglePlayPause();
}


//remplissage de lq bqrre orange
video.addEventListener('evolutionDeoS', function(){

    let posOrange = video.tempReel / video.durer;

    liquide.style.width = posOrange * 100 + '%';

    if(video.ended) {
        btn.className ="play";
    }


})




muteBtn.addEventListener('click', function(){

    if(video.muted){
        video.muted = false;
        muteBtn.innerHTML = "Mute";
    } else {
        video.muted = true;
        muteBtn.innerHTML = "Unmute";
    }

})




volumeslider.addEventListener('changer', function(){


    video.volume = volumeslider.value / 100;

})


// la barre orange clikable

let rect = orangeBar.getBoundingClientRect();
console.log(rect);

let largeur = rect.width;

orangeBar.addEventListener('click', function(e){


    
    let x = e.clientX - rect.left;

    let widthPercent = ((x*100)/largeur);

    let currentTimeTrue = (widthPercent * 181 ) / 100;

    
    video.currentTime = currentTimeTrue;
    
    liquide.style.width = widthPercent + '%';

}) 