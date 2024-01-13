import './styles/normalize.css';
import './styles/index.css';

import { renderAllProducts } from './js/renderAllProducts';
import { submitForm } from './js/submitForm';
import { refs } from './js/refs';
refs.form.addEventListener('submit', submitForm )
// renderAllProducts()
