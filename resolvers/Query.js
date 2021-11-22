exports.Query = {
  hello: () => {
    return "hello";
  },
  products: (parent, { filter }, { products }) => {
    const filteredProducts = products;

    if (filter) {
      if (filter.onSale === true) {
        filteredProducts = filteredProducts.filter((product) => {
          return product.onSale;
        });
      }
    }

    return filteredProducts;
  },
  product: (parent, args, { products }) => {
    const productId = args.id;

    const product = products.find((item) => item.id === productId);
    if (!product) return null;
    return product;
  },
  categories: () => {
    return categories;
  },
  category: (parent, args, { categories }) => {
    const { id } = args;
    return categories.find((category) => category.id === id);
  },
};
