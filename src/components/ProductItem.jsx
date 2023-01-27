import React, { useContext } from 'react';
import '../styles/ProductItem.scss';

import bt_add_to_cart from '@icons/bt_add_to_cart.svg'

import AppContext from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const ProductItem = ({product}) => {

	
	const {addToCart}=useContext(AppContext);

	const handleCart=(item)=>{
		 addToCart({...item, uuid:uuidv4()});
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure className='addCart' onClick={()=>handleCart(product)}>
					<img src={bt_add_to_cart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;