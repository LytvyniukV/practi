import { productsApi } from "../requests/products"
export const deleteProduct = async (e) => {
    e.preventDefault()
    const id = e.currentTarget.elements.deletionId.value
    const result = await productsApi.deleteById(id)
    if (result.status === 200) {
        alert('Success')
    } 
        
    
    console.log(result);
   

}