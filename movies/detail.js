// URL 파라미터에서 영화 ID 값 가져오기
const movieId = new URLSearchParams(location.search).get('id');
const box = document.querySelector('#detail');

async function load() {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}`,
        { headers: { Authorization: `Bearer ${TMDB_TOKEN}`}}
    );

    const movie = await res.json();
    console.log(movie)
    
    box.innerHTML = `
        <h1>${movie.title}</h1>
        <img src='https://image.tmdb.org/t/p/w200${movie.poster_path}'>
    `;
}

load();