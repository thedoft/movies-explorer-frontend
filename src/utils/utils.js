const filterSearch = (movies, keyword, isIncludesShorts) => {
  const minDuration = isIncludesShorts ? 0 : 40;

  return (
    movies.filter(
      (movie) => (
        movie.nameRU.toLowerCase().includes(keyword.toLowerCase())
        && movie.duration > minDuration),
    )
  );
};

export default filterSearch;
