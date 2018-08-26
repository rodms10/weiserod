const Beers = {
  beers: {
    buzz: {
      name: "Buzz",
      style: "Honey Ale",
      abv: "6.5%",
      description: "A light bodied beer with a bit of sweetness. Our Buzz Honey Ale is a favorite with light beer drinkers. One of our customer favorites, it's fresh and crisp with a slightly sweet honey taste.",
      labelThumbImg: "img/buzz-label-thumb.png",
      width: 200,
    },

    oatee: {
      name: "Oatee",
      style: "Oatmeal Stout",
      abv: "Brewing",
      description: "A full bodied dark stout beer for the serious drinker. A hint of chocolate and oat texture makes this a favorite. The classic stout flavor leaves you wanting more.",
      labelThumbImg: "img/oatee-label-thumb.png",
      width: 200,
    },

    violatingViolence: {
      name: "Violating Violence",
      style: "Red Ale",
      abv: "4.7%",
      occasion: "Crafted exclusively for CareML Beer Stay",
      description: "Moderate maltiness with strong careml notes. The swallow will bring up light roasted grain and suttle oak qualities helping to dry out the finish. A hop presence in both aroma and bitterness intensifies the mouthfeel.",
      labelThumbImg: "img/violating-violence-thumb.jpg",
      width: 200,
    },
  },

  current: {
    left: "oatee",
    right: "buzz",
    special: "violatingViolence",
  },
};

export default Beers;
