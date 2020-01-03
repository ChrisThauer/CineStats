import React from 'react';

import './movies-page.scss';
import MovieList from '../../components/movie-list/movie-list';

const MoviesPage = ({ movies }) => (
  <div className="movies-page">
    <MovieList movies={movies} listType="Now Playing" />
  </div>
);

export default MoviesPage;