/* So, by adding in the index.js file,we are just giving Webpack an opportunity inside the browser
to go and fetch some dependencies from products before actually executing the code of Bootstrap. */

import {mount as productMount } from 'products/ProductsIndex';
import {mount as cartMount } from 'cart/CartShow';

console.log('Container!');

productMount(document.querySelector('#my-products'));
cartMount(document.querySelector('#my-cart'));
