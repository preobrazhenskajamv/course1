'use strict';
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many films did you see?", '');

    while (numberOfFilms == ''|| numberOfFilms==null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("How many films did you see?", '');

    }
}

start();
console.log(numberOfFilms);

var personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++)
        {   var check;
            var a,b;
            
            do {
            a = prompt('What film did you see?','');
            check = a.length;
        } while (check <1 || check > 3);


        do {
            b = +prompt('What number will you give to it?','');
            check = b.length;

        } while (check <1 || check > 3);

     
    // if (a.length < 51 && a.length > 0 && b.length < 51 && b.length > 0) {} else {i--};
    personalMovieDB.movies [a] = b;
    }
}

rememberMyFilms();
    //   c = prompt('What film did you see?',''),
    //   d = +prompt('What number will you give to it?','');


// personalMovieDB.movies [c] = d;

console.log(personalMovieDB);

function detectPersonalLevel() {

};

detectPersonalLevel();


function showMyDB(){
   
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}
showMyDB();

function writeYourGenres() {
    for (let i=0; i<3; i++)
    {
        personalMovieDB.genres[i]=prompt(`Genre you like ${i+1}?`);
        console.log(personalMovieDB.genres[i]);
    }
}

writeYourGenres();