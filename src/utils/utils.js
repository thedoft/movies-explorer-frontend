export const reformatMovies = (movies, BASE_URL) => movies.map((movie) => {
  const formattedMovie = {
    ...movie,
    movieId: movie.id,
    image: movie.image ? (BASE_URL + movie.image.url) : '',
    thumbnail: movie.image ? (BASE_URL + movie.image.formats.thumbnail.url) : '',
    trailer: movie.trailerLink,
  };

  return formattedMovie;
});

export const searchByKeyword = (movies, keyword, isIncludesShort) => {
  const minDuration = isIncludesShort ? 0 : 40;

  return movies.filter(
    (movie) => movie.nameRU.toLowerCase().includes(keyword.toLowerCase())
      && movie.duration > minDuration,
  );
};

export const filterByDuration = (movies, isIncludesShort) => {
  const minDuration = isIncludesShort ? 0 : 40;

  return movies.filter((movie) => movie.duration > minDuration);
};
