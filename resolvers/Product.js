exports.Product = {
  category: (parent, args, { categories }) => {
    const productId = parent.id;
    return categories.filter((category) => category.id === productId);
  },
  reviews: ({ id }, args, { reviews }) => {
    return reviews.filter((review) => {
      review.productId === id;
    });
  },
};
