"use strict";

/* Задание на урок:
1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'
2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false
3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }
Проверить, чтобы все работало без ошибок в консоли */

const numberOfFilms = +prompt("How much movies have you already seen","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

let oneOfLastSeenMovies1 = prompt('One of the last movies you have aready seen?','');
let movieRating1 = +prompt(`How much stars from 0 to 10 ${oneOfLastSeenMovies1} has been?`,'');
let oneOfLastSeenMovies2 = prompt('One of the last movies you have aready seen?','');
let movieRating2 = +prompt(`How much stars from 0 to 10 ${oneOfLastSeenMovies2} has been?`,'');

personalMovieDB.movies[oneOfLastSeenMovies1] = movieRating1;
personalMovieDB.movies[oneOfLastSeenMovies2] = movieRating2;

console.log(personalMovieDB);
