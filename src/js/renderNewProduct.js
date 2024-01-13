import { productsApi } from '../requests/products';
import { createOneProductMarkup } from '../services/markupService';
import { refs } from './refs';
export const renderNewProduct = async e => {
  e.preventDefault();
  const newProduct = {};
  new FormData(e.currentTarget).forEach(
    (value, key) => (newProduct[key] = value)
  );
  const product = await productsApi.create(newProduct);
  refs.newProductContainer.insertAdjacentHTML(
    'beforeend',
    createOneProductMarkup(product)
  );
  e.target.reset()
};
