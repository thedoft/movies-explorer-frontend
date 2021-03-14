export const searchByKeyword = (movies, keyword) => movies.filter(
  (movie) => movie.nameRU.toLowerCase().includes(keyword.toLowerCase()),
);

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
