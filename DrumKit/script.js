//this function will listen the key and return the sound
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) // select the pressed key and it's src.
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`) // slect the class key from the html and 
    if (!audio) return;//stop the function from running all together

    key.classList.add('playing');
    audio.currentTime = 0; //rewind it to zero
    audio.play()
    // console.log(key)
}

//this function will remove the transition css style back to it's original style.
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skips it if it's not a transform
    // console.log(e.propertyName)
    e.target.classList.remove('playing')
}

window.addEventListener('keydown', playSound);
const keys = document.querySelectorAll('.key');
console.log(keys)
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
