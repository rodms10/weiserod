var BeerInTap = require('./BeerInTap.react');
var Beers = require('./Beers');
var React = require('react');

var BeerList = React.createClass({
  render: function () {
    var leftBeer = Beers.beers[Beers.current.left];
    var rightBeer = Beers.beers[Beers.current.right];

    return (
      <div className="section-column-container">
        <BeerInTap tap="Left" beer={leftBeer} />
        <BeerInTap tap="Right" beer={rightBeer} />
      </div>
    );
  }
});

module.exports = BeerList;
