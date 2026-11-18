const myHeading = document.querySelector('h1');
myHeading.textContent = 'HAEM';

let isSecondPoster = false;
const poster = document.querySelector('img');
poster.addEventListener('click', e => {
    isSecondPoster = !isSecondPoster;
    poster.src = isSecondPoster ? 'images/poster2.jpeg' : 'images/poster1.png';
});

const nameInput = document.querySelector('#name');
nameInput.addEventListener('input', e => {
    myHeading.textContent = e.target.value;
});