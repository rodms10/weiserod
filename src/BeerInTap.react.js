import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BeerInTap extends Component{
  render() {
    var beer = this.props.beer;

    return (
      <div className="section-column">
        <h3 className="tap">{this.props.tap} tap</h3>
        <h3>{beer.name} {beer.style}</h3>
        <img
          alt="Beer Logo"
          src={beer.labelThumbImg}
          width={beer.width}
          height="200"
        />
        <p>{beer.description}</p>
      </div>
    );
  }
};

BeerInTap.propTypes = {
  tap: PropTypes.string.isRequired,
  beer: PropTypes.object.isRequired,
}

export default BeerInTap;
