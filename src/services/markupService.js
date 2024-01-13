export const createAllProductsMarkup = ({products}) =>{
    return products.reduce((html, {title, description, price}) => 
        html +
        `<li>
        <h3>${title}</h3>
        <p>${description}</p>
        <p>${price}</p>
        </li>`
    , '')
}