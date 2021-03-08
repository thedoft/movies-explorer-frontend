import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

const MoviesCardList = ({ movies, isLoading }) => {
  const renderedMovies = document.querySelectorAll('.movie');

  const [renderedMoviesLength, setRenderedMoviesLength] = useState(0);
  const [renderedMoviesCount, setRenderedMoviesCount] = useState(0);
  const [MoviesToMoreRenderCount, setMoviesToMoreRenderCount] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    if (windowWidth <= 480) {
      setRenderedMoviesCount(5);
      setMoviesToMoreRenderCount(2);
    } else if (windowWidth <= 768) {
      setRenderedMoviesCount(8);
      setMoviesToMoreRenderCount(2);
    } else {
      setRenderedMoviesCount(12);
      setMoviesToMoreRenderCount(3);
    }
  }, [windowWidth]);

  const handleMoreClick = () => {
    setRenderedMoviesCount(renderedMoviesCount + MoviesToMoreRenderCount);
  };

  return (
    <section className="movies">
      { isLoading && <Preloader /> }
      { (!isLoading && !movies) && <p className="movies__error">Ничего не найдено</p> }
      {
        (!isLoading && movies)
          && <ul className="movies__list">
            {
              movies.reduce((moviesToRender, movie, index) => {
                if (moviesToRender.length < renderedMoviesCount) {
                  moviesToRender
                    .push(<MoviesCard movie={movie} key={index} />);
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
