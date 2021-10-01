
const numertOfFilms = +prompt('Сколько фильмов вы посмотрели?', ``);

let personalMovieDB = {
    
    count: numertOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const lastMovie = prompt('Один из последних просмотренных фильмов?', '');
const gradeMovie = prompt('На сколько оцените его?', '');
const lastMovie2 = prompt('Один из последних просмотренных фильмов?', '');
const gradeMovie2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastMovie] = gradeMovie;
personalMovieDB.movies[lastMovie2] = gradeMovie2;

console.log(personalMovieDB);



