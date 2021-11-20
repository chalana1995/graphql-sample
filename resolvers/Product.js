const { categories } = require("../db");

exports.Product = {
  category: (parent, args, context) => {
    const productId = parent.id;
    return categories.filter((category) => category.id === productId);
  },
};
