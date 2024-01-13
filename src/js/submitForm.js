import { productsApi } from "../requests/products"
import { createOneProductMarkup } from "../services/markupService"
import { refs } from "./refs"
export const submitForm = async (e) => {
    e.preventDefault()
    const id = e.target.elements.id.value.trim()
    const element = await productsApi.getById(id)
    refs.singleProduct.innerHTML = createOneProductMarkup(element)
    e.target.reset()
}