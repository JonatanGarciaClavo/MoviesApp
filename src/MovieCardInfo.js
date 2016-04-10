import React, {Component} from 'react';
import { Glyphicon, Panel } from 'react-bootstrap';

class MovieCardInfo extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    info: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]).isRequired,
    star: React.PropTypes.bool
  }

  render () {
    let { title, info, star } = this.props;
    return (
      <Panel header={title} bsStyle="warning">
        {star ? <div><Glyphicon glyph='star' style={{margin: '0 0.5em 0 0', color: 'gold', fontSize: 'large'}}/>{info}</div> : <span>{info}</span>}
      </Panel>
    );
  }
}

export default MovieCardInfo;
