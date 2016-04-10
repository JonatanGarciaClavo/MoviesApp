import React, { Component } from 'react';
import { Grid, Row, Col, Button, Glyphicon, Image } from 'react-bootstrap';
import MovieCardInfo from './MovieCardInfo';

export default class MovieCard extends Component {
  static propTypes = {
    movie: React.PropTypes.object.isRequired,
    onBackClick: React.PropTypes.func.isRequired
  }

  render () {
    let {onBackClick, movie: {runtime, poster, summary, director, actors, category, rating, year, title}} = this.props;
    return (
      <Grid>
        <Row style={{margin: '0 0 1em 0'}}>
          <Button onClick={onBackClick} bsStyle="info"><Glyphicon glyph='menu-left'/>Back</Button>
        </Row>
        <Row style={{textAlign: 'center'}}>
        <Image width={300} heigth={300} src={poster} thumbnail />
        </Row>
        <Row>
          <Col>
            <h2>{title}</h2>
            <MovieCardInfo title='Summary: ' info={summary} />
            <MovieCardInfo title='Director: ' info={director} />
            <MovieCardInfo title='Actors: ' info={actors} />
            <MovieCardInfo title='Category: ' info={category} />
            <MovieCardInfo title='Year: ' info={year} />
            <MovieCardInfo title='Duration: ' info={runtime} />
            <MovieCardInfo title='Rating: ' info={rating} star/>
          </Col>
        </Row>
      </Grid>
    );
  }
}
