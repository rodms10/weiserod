import BeerInTap from './BeerInTap.react';
import BeerInTapSpecial from './BeerInTapSpecial.react';
import Beers from './Beers';
import React, { Component } from 'react';

class BeerList extends Component {
  render() {
    const leftBeer = Beers.beers[Beers.current.left];
    const rightBeer = Beers.beers[Beers.current.right];
    const specialBeer = Beers.beers[Beers.current.special];

    return (
      <React.Fragment>
        <div className="section-column-container">
          <BeerInTapSpecial beer={specialBeer} />
        </div>
        <div className="section-column-container">
          <BeerInTap tap="Left" beer={leftBeer} />
          <BeerInTap tap="Right" beer={rightBeer} />
        </div>
      </React.Fragment>
    );
  }
};

export default BeerList;
