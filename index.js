const keys = document.querySelectorAll(".el");

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.el[data-key="${e.keyCode}"]`);
    if(!audio)return;
        audio.currentTime = 0;
        audio.play();
        key.classList.add("playing");
}

function removeTransition(e){
    if(e.propertyName !== "transform")return;
    this.classList.remove("playing");
}


function playSoundOnClick(e){
const key =this.dataset.key;
const audio = document.querySelector(`audio[data-key="${key}"]`);
console.log(this);
if(!audio)return;
        audio.currentTime = 0;
        audio.play();
        this.classList.add("playing");
}

keys.forEach(key=>{
    key.addEventListener("click",playSoundOnClick);
    key.addEventListener("transitionend",removeTransition);
})
document.addEventListener('keydown',playSound);