import React from 'react';

import './movie-list-item.scss';

const MovieListItem = ({ imageUrl, title }) => (
  <div className="movie-list-item">
    <img className="poster" src={`https://image.tmdb.org/t/p/w500${imageUrl}`} alt={title}/>
  </div>
);

export default MovieListItem;