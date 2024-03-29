import './styles/normalize.css';
import './styles/index.css';

import { renderAllProducts } from './js/renderAllProducts';
import { submitForm } from './js/submitForm';
import { refs } from './js/refs';
import { renderNewProduct } from './js/renderNewProduct';
import { deleteProduct } from './js/deleteProduct';
refs.form.addEventListener('submit', submitForm )
refs.createProductForm.addEventListener('submit', renderNewProduct)
refs.deletionProductForm.addEventListener('submit', deleteProduct)
// renderAllProducts()
