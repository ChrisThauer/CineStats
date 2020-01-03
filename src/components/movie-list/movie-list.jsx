import React from 'react';

import './movie-list.scss';
import MovieListItem from '../movie-list-item/movie-list-item';

const MovieList = ({ movies, listType }) => (
  <div className="movie-list">
    <h2 className="movie-list-title">{listType}</h2>
    <div className="movie-list-items">
      {
        movies.map(movie => {
          const { id, title, poster_path } = movie;
          return <MovieListItem key={id} title={title} imageUrl={poster_path} />
        })
      }
    </div>
  </div>
);

export default MovieList;