const { ApolloServer, gql } = require("apollo-server");
const { products, categories, reviews } = require("./db");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");
const { Query } = require("./resolvers/Query");
const { typeDefs } = require("./schema");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Product,
    Category,
  },
  context: {
    products,
    categories,
    reviews,
  },
});

server.listen().then(({ url }) => {
  console.log("Server is ready at " + url);
});
