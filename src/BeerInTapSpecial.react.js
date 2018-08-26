import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BeerInTapSpecial extends Component{
  render() {
    const beer = this.props.beer;

    return (
      <div className="section-column section-wide">
        <h3 className="tap">Special Edition</h3>
        <h3>{beer.name} {beer.style}</h3>
        <div className="section-column-container">
          <div className="special-beer-logo">
            <img
              alt="Beer Logo"
              src={beer.labelThumbImg}
              height="250"
            />
          </div>
          <div className="special-text-column">
            <h3 className="special-occasion">{beer.occasion}</h3>
            <p className="special-description">{beer.description}</p>
          </div>
        </div>
      </div>
    );
  }
};

BeerInTapSpecial.propTypes = {
  beer: PropTypes.object.isRequired,
}

export default BeerInTapSpecial;
