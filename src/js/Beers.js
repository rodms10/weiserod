
var Beers = {
  beers: {
    buzz: {
      name: "Buzz",
      style: "Honey Ale",
      abv: "6.5%",
      description: "A light bodied beer with a bit of sweetness. Our Buzz Honey Ale is a favorite with light beer drinkers. One of our customer favorites, it's fresh and crisp with a slightly sweet honey taste.",
      labelThumbImg: "img/buzz-label-thumb.png",
      labelImg: "img/buzz-label-thumb.png",
      width: 292,
    },

    oatee: {
      name: "Oatee",
      style: "Oatmeal Stout",
      abv: "Brewing",
      description: "A full bodied dark stout beer for the serious drinker. A hint of chocolate and oat texture makes this a favorite. The classic stout flavor leaves you wanting more.",
      labelThumbImg: "img/oatee-label-thumb.png",
      labelImg: "img/oatee-label-thumb.png",
      width: 200,
    },
  },

  current: {
    left: "oatee",
    right: "buzz",
  },
};

module.exports = Beers;
