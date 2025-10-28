const routes = (handler) => [
  {
    method: 'GET',
    path: '/products',
    handler: handler.getAllProductsHandler,
  },
  {
    method: 'GET',
    path: '/products/{id}',
    handler: handler.getOneProductHandler,
  },
  {
    method: 'POST',
    path: '/products',
    handler: handler.addProductHandler,
  }
];

module.exports = routes;