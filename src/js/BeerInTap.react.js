var React = require('react');

var {PropTypes} = React;

var BeerInTap = React.createClass({
  propTypes: {
    tap: PropTypes.string.isRequired,
    beer: PropTypes.object.isRequired,
  },

  render: function () {
    var beer = this.props.beer;

    return (
      <div className="section-column">
        <h3>{this.props.tap} tap:<br/>{beer.name} {beer.style}</h3>
        <img src={beer.labelThumbImg} width={beer.width} height="200" />
        <p>{beer.description}</p>
      </div>
    );
  }
});

module.exports = BeerInTap;
