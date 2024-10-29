const movies = require('./data.js');

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
  const moviesDirector = getMoviesFromDirector(movies, director);
  const sumScores = moviesDirector.reduce((acc, movie) => acc + movie.score, 0);
  const average = sumScores / moviesDirector.length;
  console.log('EXERCICE 3 ->', average);
  return average;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(movies) {
  const sortedMovies = movies
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title))
    .map((movie) => movie.title);

  const sortedMoviesTwenty = sortedMovies.slice(0, 20);

  console.log('EXERCICE 4 ->', sortedMoviesTwenty);
  return sortedMoviesTwenty;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  const orderedMovies = movies
    .slice()
    .sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
  console.log('EXERCICE 5 ->', orderedMovies);
  return orderedMovies;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, category) {
  const moviesCategory = movies.filter((movie) =>
    movie.genre.includes(category)
  );
  const sumScores = moviesCategory.reduce((acc, movie) => acc + movie.score, 0);
  const average = sumScores / moviesCategory.length;
  console.log('EXERCICE 6 ->', average);
  return average;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  const moviesDurationMinutes = movies.map((movie) => {
    const duration = movie.duration.split(' ');
    let minutes = 0;
    duration.forEach((str) => {
      if (str.includes('h')) {
        minutes += parseInt(str) * 60;
      } else {
        minutes += parseInt(str);
      }
    });
    return { ...movie, duration: minutes };
  });
  console.log('EXERCICE 7 ->', moviesDurationMinutes);
  return moviesDurationMinutes;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  const moviesOfYear = movies.slice().filter((movie) => movie.year === year);

  const bestFilm = moviesOfYear.reduce((best, movie) => {
    if (
      !best ||
      movie.score > best.score ||
      (movie.score === best.score && movie.title < best.title)
    ) {
      return movie;
    }
    return best;
  }, null);

  console.log('EXERCICE 8 ->', bestFilm);
  return bestFilm ? [bestFilm] : [];
}

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
