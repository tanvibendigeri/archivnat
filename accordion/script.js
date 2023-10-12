function setMoonPhase() {
    const moonImage = document.getElementById('moon-image');
    const windowWidth = window.innerWidth;

    if (windowWidth <= 375) {
        moonImage.src = 'newmoon.png';
    } else if (windowWidth >= 1500) {
        moonImage.src = 'fullmoon.png';
    } else {
        const phaseIndex = Math.floor((windowWidth - 375) / 225);
        const phases = ['newmoon.png', 'newmooncopy.png', 'waxcrescent.png', 'firstquarter.png', 'waxgibbous.png', 'fullmoon.png'];
        moonImage.src = phases[phaseIndex];
    }
}

window.addEventListener('resize', setMoonPhase);
document.addEventListener('DOMContentLoaded', setMoonPhase);

