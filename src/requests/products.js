import { apiInstance } from '../services/api';

const getAll = async () => {
    try{
        const response = await apiInstance.get('/products');
        return response.data;
    } catch (error) {console.log(error);}
  
};

export const productsApi = {getAll}
