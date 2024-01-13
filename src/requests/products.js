import { apiInstance } from '../services/api';

const getAll = async () => {
    try{
        const response = await apiInstance.get('/products');
        return response.data;
    } catch (error) {console.log(error);}
  
};

const getById = async (id) => {
    try {
        const response = await apiInstance.get(`/products/${id}`);
        return response.data;
        
    } catch (error) { console.log(error) }
}

const create = async (object) => {
    try {
        const response = await apiInstance.post(`/products/add`, object);
        return response.data;
        
    } catch (error) { console.log(error) }
}

export const productsApi = {getAll, getById, create}
