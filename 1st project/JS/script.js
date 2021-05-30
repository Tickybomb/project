"use strict";

/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/

const numberOfFilms = +prompt("How much movies have you already seen","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

if (personalMovieDB.count < 10) {
    alert("You have seen pretty small number of films");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("You're a classical watcher");
} else if (personalMovieDB > 30) {
    alert("You're a movie fan");
} else {
    alert('Error');
}

for (let i = 0; i < 2; i++) {
    let oneOfLastSeenMovies = prompt('One of the last movies you have aready seen?','');
    let movieRating = +prompt(`How much stars from 0 to 10 ${oneOfLastSeenMovies} has been?`,'');

    if (oneOfLastSeenMovies != null && movieRating != null && oneOfLastSeenMovies != '' && movieRating != '' && oneOfLastSeenMovies.length < 50 && movieRating.length < 50 ) {
        personalMovieDB.movies[oneOfLastSeenMovies] = movieRating;
    } else {
        i--;
    }
     
}

console.log(personalMovieDB);