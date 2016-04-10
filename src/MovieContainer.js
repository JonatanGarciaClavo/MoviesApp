import React, { Component } from 'react';
import { ProgressBar, Grid, Row, Navbar, Nav, NavItem } from 'react-bootstrap';
import MovieList from './MovieList';
import MovieCard from './MovieCard';
import { MOVIE_SORT, SORT_BY_YEAR, SORT_BY_TITLE, SORT_BY_RATING } from './lib/sort-utils';

const LOADING = 0;
const LIST = 1;
const CARD = 2;

class MovieContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      mode: LOADING,
      movies: [],
      sort: SORT_BY_YEAR,
      index: 0
    };
  }

  fetchMovies () {
    return fetch(
      'http://beta.json-generator.com/api/json/get/V1jWvOGyb',
      {method: 'get', mode: 'cors'}
    ).then((response)=> {
      return response.json();
    }).then((res)=> {
      return res;
    });
  }

  componentDidMount () {
    this.fetchMovies()
      .then((movies)=> {
        this.setState({
          movies,
          mode: LIST
        });
      })
      .catch((err)=> {
        console.log(err);
      });
  }

  onMovieClick (index) {
    this.setState({
      mode: CARD,
      index
    });
  }

  onBackClick () {
    this.setState({
      mode: LIST
    });
  }


  renderModeView () {
    let { mode, movies, index } = this.state;

    switch(mode) {
    case(LOADING):
      return (
        <ProgressBar active now={100} />
      );
    case(CARD):
      return (
        <MovieCard movie={movies[index]} onBackClick={this.onBackClick.bind(this)}/>
      );
    default:
      return (
        <MovieList
          movies={MOVIE_SORT[this.state.sort](movies)}
          onMovieClick={this.onMovieClick.bind(this)}
        />
      );
    }
  }
  render () {
    let {sort, mode} = this.state;
    return (
      <Grid>
        <Row>
          <Navbar>
            <Navbar.Header onClick={()=> this.setState({mode: LIST})}>
              <Navbar.Brand>
                <span>Movies App</span>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem
                  eventKey={1}
                  active={mode === LIST && sort === SORT_BY_YEAR}
                  disabled={mode !== LIST}
                  onClick={()=> this.setState({sort: SORT_BY_YEAR})}
                  >
                  Year
                </NavItem>
                <NavItem
                  eventKey={2}
                  active={mode === LIST && sort === SORT_BY_TITLE}
                  disabled={mode !== LIST}
                  onClick={()=> this.setState({sort: SORT_BY_TITLE})}
                  >
                  Title
                </NavItem>
                <NavItem
                  eventKey={3}
                  active={mode === LIST && sort === SORT_BY_RATING}
                  disabled={mode !== LIST}
                  onClick={()=> this.setState({sort: SORT_BY_RATING})}
                  >
                  Rating
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
        <Row>
          {this.renderModeView()}
        </Row>
      </Grid>
    );
  }
}

export default MovieContainer;
