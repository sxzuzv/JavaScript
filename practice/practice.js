import { nowPlaying, genres, details } from './data.js'

// 영화 리스트
const movies = nowPlaying.results


// 첫 번째 영화의 제목, 개봉일, 평점
const first = movies[0]
console.log(`제목: ${first.title} / 개봉일: ${first.release_date} / 평점: ${first.vote_average}`)


// 현재 페이지의 영화 수(results의 길이), 전체 영화 수
console.log(`영화 수: ${movies.length}개 / 전체 영화 수 : ${nowPlaying.total_results}개`)


// 영화 제목 출력 (형식: 배열)
console.log('=== 영화 제목 출력 (형식: 배열) ===')
console.log(movies.map(movie => movie.title))


// 평점 7점 이상의 영화 제목 (형식: 배열)
// filter 로 평점 7점 이상인 영화를 걸러내고 map 으로 제목만 뽑는다.
console.log('=== 평점 7점 이상의 영화 제목 ===')
console.log(movies.filter(movie => movie.vote_average > 7).map(movie => movie.title))


console.log('=== 특정 ID의 장르 찾기 ===')
const g = genres.find(genre => genre.id === 53)
console.log(g)


console.log('=== 평점이 가장 높은 영화 3편 ===')
const sortedMovies = [...movies].sort((a, b) => b.vote_average - a.vote_average)
const top3 = sortedMovies.slice(0, 3)
console.log(top3.map(m => m.title))


console.log('=== 구조 분해 ===')
const { id, title, vote_average } = first
console.log(id, title, vote_average)


console.log('=== 영화 폴2 의 감독들 ===')
const fall = details[0]
const directors = fall.credits.crew.filter(c => c.job === 'Director').map(c => c.name)
console.log(directors)


console.log('=== 특정 영화의 예고편 정보 ===')
const findResult = details[1].videos.results.find(v => v.type === 'Trailer')
console.log(findResult || '없습니다.')