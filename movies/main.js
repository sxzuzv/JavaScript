async function load() {
    // requests.get('...') 과 동일
    const res = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?language=ko-kr',
        { headers: { Authorization: `Bearer ${TMDB_TOKEN}`}}
    );
    const data = await res.json();
}

load();

