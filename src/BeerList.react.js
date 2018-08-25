import BeerInTap from './BeerInTap.react';
import Beers from './Beers';
import React, { Component } from 'react';

class BeerList extends Component {
  render() {
    var leftBeer = Beers.beers[Beers.current.left];
    var rightBeer = Beers.beers[Beers.current.right];

    return (
      <div className="section-column-container">
        <BeerInTap tap="Left" beer={leftBeer} />
        <BeerInTap tap="Right" beer={rightBeer} />
      </div>
    );
  }
};

export default BeerList;
