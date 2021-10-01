const numertOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

let personalMovieDB = {
    
    count: numertOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};




if(personalMovieDB.count< 10) {

    alert('Просмотрено довольно мало фильмов');

} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){

    alert('Вы классический зритель');

} else if (personalMovieDB.count >= 30){
    alert('Вы Киноман!!!');
} else {
    alert('Произошла Ошибочка');
}



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


console.log(personalMovieDB);



