"use strict";

const numberOfFilms = prompt ('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB =  {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false    
};

let i = 0;

do{
    const a = prompt ('Один из просмотренных фильмов?', '');
    const b = prompt ('На сколько оцените его?', '');
i++;
personalMovieDB.movies[a] = b;
} while(i < 2)



console.log(personalMovieDB);



