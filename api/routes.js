/* import products from './products' */

const products = require('./products')

const routes =(app)=> {
  app.use('/api/products',products);
}

module.exports = routes
/* export default routes; */
