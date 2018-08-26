import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BeerInTapSpecial extends Component{
  render() {
    const beer = this.props.beer;

    return (
      <div className="section-column column-wide">
        <h3 className="tap">Special Edition</h3>
        <h3>{beer.name} {beer.style}</h3>
        <img
          alt="Beer Logo"
          src={beer.labelThumbImg}
          width={beer.width}
          height="200"
        />
        <h3 class="occasion">{beer.occasion}</h3>
        <p>{beer.description}</p>
      </div>
    );
  }
};

BeerInTapSpecial.propTypes = {
  beer: PropTypes.object.isRequired,
}

export default BeerInTapSpecial;
