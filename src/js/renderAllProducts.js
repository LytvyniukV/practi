import { productsApi } from "../requests/products";
import { createAllProductsMarkup } from "../services/markupService";
import { refs } from "./refs";

export const renderAllProducts = async () => {
   const allProducts = await productsApi.getAll();
refs.allProducts.insertAdjacentHTML('afterbegin', createAllProductsMarkup(allProducts))
   console.log(allProducts);
    
}