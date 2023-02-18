/* So, by adding in the index.js file,we are just giving Webpack an opportunity inside the browser
to go and fetch some dependencies from products before actually executing the code of Bootstrap. */

import 'products/ProductsIndex';
import 'cart/CartShow';

console.log('Container!');
