const numberOfFilms = +prompt("How many films did you see?", '');

console.log(numberOfFilms);

var personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('What film did you see?',''),
      b = +prompt('What number will you give to it?',''),
      c = prompt('What film did you see?',''),
      d = +prompt('What number will you give to it?','');

personalMovieDB.movies [a] = b;
personalMovieDB.movies [c] = d;

console.log(personalMovieDB);