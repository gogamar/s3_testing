import movies from './data.js';

getAllDirectors(movies);
getMoviesFromDirector(movies, 'Steven Spielberg');
moviesAverageOfDirector(movies, 'Alejandro González Iñárritu');
orderAlphabetically(movies);

// Exercise 1: Get the directors of the movies
function getAllDirectors(movies) {
  const result = movies.map((movie) => movie.director);

  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  const moviesDirector = movies.filter((movie) => movie.director === director);
  console.log('EXERCICE 2 ->', moviesDirector);
  return moviesDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  const movDir = getMoviesFromDirector(movies, director);
  const sumScores = movDir.reduce((acc, movie) => acc + movie.score, 0);
  const average = sumScores / movDir.length;
  console.log('EXERCICE 3 ->', average);
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(movies) {
  const sortedMovies = movies
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title));

  const sortedMoviesTwenty = sortedMovies.slice(0, 20);

  console.log('EXERCICE 4 ->', sortedMoviesTwenty);
  return sortedMovies;
}

// Exercise 5: Order by year, ascending
function orderByYear() {}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
