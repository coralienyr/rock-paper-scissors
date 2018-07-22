import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NoMatch extends Component {
  render() {
    return (
      <div>
      <div id="noMatch">
        <div className="content" id="pageNotFound">
          <h3>The requested page does not exist</h3>
          <p>You can go back to <Link to="/">home</Link></p>
        </div>
      </div>
      </div>
    );
  }
}

export default NoMatch;