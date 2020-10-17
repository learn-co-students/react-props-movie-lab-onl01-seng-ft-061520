import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // For every object inside the movieData array we want to render a MovieCard 
    // component passing the object data as props. 
    // The MovieShowcase(parent) component will be passing properties to the MovieCard(child) component
    // map over your movieData array and return an array of the correct JSX
    return movieData.map( (x) => {
        return <MovieCard title={x.title} IMDBRating={x.IMDBRating} genres={x.genres} poster={x.poster} />
    });
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
 