let numertOfFilms;


function start() {

    numertOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

    while(numertOfFilms == '' || numertOfFilms === null || isNaN(numertOfFilms)){

        numertOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }

}

start();

let personalMovieDB = {
    
    count: numertOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function detectPersonalLevel(){

    if(personalMovieDB.count< 10) {

        alert('Просмотрено довольно мало фильмов');
    
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    
        alert('Вы классический зритель');
    
    } else if (personalMovieDB.count >= 30){
        alert('Вы Киноман!!!');
    } else {
        alert('Произошла Ошибочка');
    }
}

//detectPersonalLevel();

function rememberMyFilms(){

    for(let i = 0; i<2; i++){
        let lastMovie = prompt('Один из последних просмотренных фильмов?', '');
        let gradeMovie = prompt('На сколько оцените его?', '');
        if(lastMovie != null && gradeMovie != null &&
           lastMovie != '' && gradeMovie != '' &&
           lastMovie.length <50){
           personalMovieDB.movies[lastMovie] = gradeMovie;
        } else {
            i--;
        }
    }  
}

//rememberMyFilms();

function showMyDB (hidden){

    if (!hidden){

        console.log(personalMovieDB);

    }

}

showMyDB(personalMovieDB.privat);

function writeYourGenres(){

    for(let i = 1; i <= 3; i++){
        let genrePerson = personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}

writeYourGenres();