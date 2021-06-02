"use strict";


/*3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

const personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
        
        writeYourGenres: function() {
                for (let i = 1; i <= 3; i++) {
                    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
                    
                    if (personalMovieDB.genres[i - 1] == '' || personalMovieDB.genres[i - 1] == null) {
                            i--;
                        }
                }

                
        
        
        }
      
       
};


// console.log(forEach(value,index, array){ })
