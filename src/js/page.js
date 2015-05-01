var React = require('react');
var BeerList = require('./BeerList.react');

var beerListElement = document.getElementById('beer-list');

React.render(
  <BeerList />,
  beerListElement
);
