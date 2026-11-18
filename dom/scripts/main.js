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


const movies = [
    { title: 'HAEM: 발단', rating: 7.5 },
    { title: 'HAEM: 전개', rating: 8.5 },
    { title: 'HAEM: 위기', rating: 4.5 },
    { title: 'HAEM: 절정', rating: 5.5 },
    { title: 'HAEM: 결말', rating: 8.3 },
    { title: 'KURI: 발단', rating: 6.2 },
    { title: '쮜익: 위기', rating: 7.1 }
];

const list = document.querySelector('#list');
const search = document.querySelector('#search');

function render() {
    const shown = movies.filter(m => m.title.includes(search.value));
    list.innerHTML = shown.map(m => `<li>${m.title}: 평점 ${m.rating}</li>`).join('');
};

search.addEventListener('input', e => {
    render();
});