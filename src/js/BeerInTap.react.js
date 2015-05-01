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
        <h3 className="tap">{this.props.tap} tap</h3>
        <h3>{beer.name} {beer.style}</h3>
        <img
          src={beer.labelThumbImg}
          width={beer.width}
          height="200"
        />
        <p>{beer.description}</p>
      </div>
    );
  }
});

module.exports = BeerInTap;
