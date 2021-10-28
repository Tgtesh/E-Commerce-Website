import React, { useContext } from 'react'
import CartContext from '../../Context/CartContext';
import Item from '../Item/Item';


const CategoriesList = () => {
    const { products, category, } = useContext(CartContext);
    const filteredProducts= products.filter((product)=>{
        return category===product.category
    })
    return (
        <div className="product_list_container" >
           {filteredProducts.map((product,index)=>(
      <Item key={index} product={product}/>
  ))}
        </div>
    )
}

export default CategoriesList
