import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';
import {
  moviesCountToRenderS, moviesCountToRenderM, moviesCountToRenderB,
  moviesCountToMoreRenderS, moviesCountToMoreRenderB,
} from '../../utils/constants';

const MoviesCardList = ({
  movies, isLoading = false, saveMovie = () => {}, removeMovie, savedMoviesIds,
}) => {
  const renderedMovies = document.querySelectorAll('.movie');

  const [renderedMoviesLength, setRenderedMoviesLength] = useState(0);
  const [renderedMoviesCount, setRenderedMoviesCount] = useState(0);
  const [MoviesToMoreRenderCount, setMoviesToMoreRenderCount] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const location = window.location.pathname;

  let resizeTimeout = null;

  const updateWindowWidth = () => {
    if (resizeTimeout) {
      clearTimeout(resizeTimeout);
    }
    resizeTimeout = setTimeout(() => setWindowWidth(window.innerWidth), 1500);
  };

  useEffect(() => {
    setRenderedMoviesLength(renderedMovies.length);
  }, [renderedMovies]);

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth);
  });

  useEffect(() => {
    if (location === '/movies') {
      if (windowWidth <= 480) {
        setRenderedMoviesCount(moviesCountToRenderS);
        setMoviesToMoreRenderCount(moviesCountToMoreRenderS);
      } else if (windowWidth <= 768) {
        setRenderedMoviesCount(moviesCountToRenderM);
        setMoviesToMoreRenderCount(moviesCountToMoreRenderS);
      } else {
        setRenderedMoviesCount(moviesCountToRenderB);
        setMoviesToMoreRenderCount(moviesCountToMoreRenderB);
      }
    } else {
      setRenderedMoviesCount(movies.length);
    }
  }, [windowWidth, location, movies.length]);

  const handleMoreClick = () => {
    setRenderedMoviesCount(renderedMoviesCount + MoviesToMoreRenderCount);
  };

  return (
    <section className="movies">
      { isLoading && <Preloader /> }
      { (!isLoading && movies.length === 0) && <p className="movies__error">Ничего не найдено</p> }
      {
        (!isLoading && movies)
          && <ul className="movies__list">
            {
              movies.reduce((moviesToRender, movie) => {
                if (moviesToRender.length < renderedMoviesCount) {
                  moviesToRender.push(
                    <MoviesCard
                      movie={movie}
                      key={movie.id}
                      onSave={saveMovie}
                      onRemove={removeMovie}
                      savedMoviesIds={savedMoviesIds}
                    />,
                  );
                }
                return moviesToRender;
              }, [])
            }
          </ul>
      }
      {
        (!isLoading && movies.length > 3 && renderedMoviesLength !== movies.length)
          && <button onClick={handleMoreClick} className="movies__more-button">Еще</button>
        }
    </section>
  );
};

export default MoviesCardList;
