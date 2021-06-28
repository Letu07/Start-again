"use strict";

const numberOfFilms = prompt ('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB =  {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false    
};

for(let i = 0; i < 3; i++) {
const a = prompt ('Один из просмотренных фильмов?', '');
const b = prompt ('На сколько оцените его?', '');
i++;
personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);


