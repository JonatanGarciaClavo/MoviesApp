import React, { Component } from 'react';
import { Grid, Row, Label, Media, ListGroupItem, Glyphicon} from 'react-bootstrap';

class MovieListItem extends Component {
  static propTypes = {
    index: React.PropTypes.number.isRequired,
    movie: React.PropTypes.object.isRequired,
    onMovieClick: React.PropTypes.func.isRequired
  }

  render () {
    let { index, onMovieClick, movie: {poster, rating, year, title} } = this.props;
    return (
      <ListGroupItem onClick={()=> onMovieClick(index)}>
        <Media>
          <Media.Left>
            <img width={50} heigth={50} src={poster} alt='poster' />
          </Media.Left>
          <Media.Body>
            <Grid>
              <Row>
                <Label>{title}</Label>
              </Row>
              <Row>
                <Label>{year}</Label>
              </Row>
              <Row>
                <Label><Glyphicon glyph='star' style={{margin: '0 0.5em 0 0', color: 'gold', fontSize: 'x-small'}}/>{rating}</Label>
              </Row>
            </Grid>
          </Media.Body>
        </Media>
      </ListGroupItem>
    );
  }
}

export default MovieListItem;
