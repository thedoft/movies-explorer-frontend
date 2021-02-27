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
  },
  {
    title: 'Киноальманах «100 лет дизайна»',
    duration,
  },
  {
    title: 'В погоне за Бенкси',
    duration,
  },
  {
    title: 'Баския: Взрыв реальности',
    duration,
  },
  {
    title: 'Бег это свобода',
    duration,
  },
  {
    title: 'Книготорговцы',
    duration,
  },
  {
    title: 'Когда я думаю о Германии ночью',
    duration,
  },
  {
    title: 'Gimme Danger: История Игги и The Stooges',
    duration,
  },
  {
    title: 'Дженис: Маленькая девочка грустит',
    duration,
  },
  {
    title: 'Соберись перед прыжком',
    duration,
  },
  {
    title: 'Пи Джей Харви: A dog called money',
    duration,
  },
  {
    title: 'По волнам: Искусство звука в кино',
    duration,
  },
];

const defaultMovies = defaultMoviesTemplate.map((movie, index) => {
  const newMovie = { ...movie, image: imagePaths[index] };
  return newMovie;
});

export default defaultMovies;
