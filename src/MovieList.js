import React, { Component } from 'react';
import { ListGroup, Panel } from 'react-bootstrap';
import MovieListItem from './MovieListItem';

class MovieList extends Component {
  static propTypes = {
    movies: React.PropTypes.array.isRequired,
    onMovieClick: React.PropTypes.func.isRequired
  }

  renderMovieListItemViews () {
    let { onMovieClick, movies } = this.props;
    return movies.map((movie, index)=> {
      return (
        <MovieListItem key={index} movie={movie} index={index} onMovieClick={onMovieClick}/>
      );
    });
  }
  render () {
    return (
      <Panel header='List movies' footer={'Total movies: ' + this.props.movies.length} bsStyle="info">
        <ListGroup>
          {this.renderMovieListItemViews()}
        </ListGroup>
      </Panel>
    );
  }
}

export default MovieList;
