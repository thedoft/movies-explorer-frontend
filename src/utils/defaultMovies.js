function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../images/movies', false, /\.(png|jpe?g|svg)$/));

const imagePaths = images.map((image) => image.default);

const duration = '1ч 17м';

const defaultMoviesTemplate = [
  {
    title: '33 слова о дизайне',
    duration,
    isSaved: false,
  },
  {
    title: 'Киноальманах «100 лет дизайна»',
    duration,
    isSaved: true,
  },
  {
    title: 'В погоне за Бенкси',
    duration,
    isSaved: false,
  },
  {
    title: 'Баския: Взрыв реальности',
    duration,
    isSaved: true,
  },
];

export const defaultMovies = defaultMoviesTemplate.map((movie, index) => {
  const newMovie = { ...movie, image: imagePaths[index] };
  return newMovie;
});

export const defaultMoviesShort = defaultMovies.filter((movie) => movie.isSaved === true);
