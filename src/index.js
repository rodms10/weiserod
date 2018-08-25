import React from 'react';
import ReactDOM from 'react-dom';
import BeerList from './BeerList.react';

const beerListElement = document.getElementById('beer-list');

ReactDOM.render(
  <BeerList />,
  beerListElement
);
