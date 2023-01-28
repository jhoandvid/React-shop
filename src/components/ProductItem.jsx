import React, { useContext, useState } from 'react';
import '../styles/ProductItem.scss';


import bt_add_to_cart from '@icons/bt_add_to_cart.svg'
import bt_added_to_cart from '@icons/bt_added_to_cart.svg'

import AppContext from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const ProductItem = ({product}) => {

	//addCartImg, setAddCartImg
	const {addToCart,  removeFromCart, state:{cart} }=useContext(AppContext);

	const existProductItem=cart.some((prod)=>prod.id===product.id);

	
	const handleCart=(payload)=>{
	
		if(existProductItem){
			removeFromCart(payload)
		}else{
			addToCart(payload)
		}

		//existProductItem(payload)? :
		
		/*  addToCart({...item, uuid:uuidv4()});
		setAddCartImg(!addCartImg); */
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

				{ existProductItem? (<img src={bt_added_to_cart} alt="" />)  : (<img src={bt_add_to_cart} alt="" />) }

					

				</figure>
			</div>
		</div>
	);
}

export default ProductItem;