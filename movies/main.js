let movies = [];
API_URL = 'https://api.themoviedb.org/3/movie/now_playing?language=ko-kr';

async function load() {
    // requests.get('...') 과 동일
    const res = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?language=ko-kr',
        { headers: { Authorization: `Bearer ${TMDB_TOKEN}`}}
    );
    const data = await res.json();
    movies = data.results;

    render();
}


function render() {
    const cardBox = document.querySelector('#cards');

    const result = movies.map(m => `
        <a>
            <img src="https://image.tmdb.org/t/p/w200${m.poster_path}">
            <h3>${m.title}</h3>
            <p>평점: ${m.vote_average}</p>
        </a>
    `).join('');
    
    cardBox.innerHTML = result;
}

load();