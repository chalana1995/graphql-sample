exports.Product = {
  category: (parent, args, { categories }) => {
    const productId = parent.id;
    return categories.filter((category) => category.id === productId);
  },
};
