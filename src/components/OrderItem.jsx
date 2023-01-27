import React, { useContext} from 'react';
import '../styles/OrderItem.scss';


import icon_close from '@icons/icon_close.png'
import AppContext from '../context/AppContext';


const OrderItem = ({product}) => {

	const {removeFromCart}=useContext(AppContext);

	
	const handleRemoveCart=(payload)=>{
		removeFromCart(payload)
   }


	return (
		
		<div className="OrderItem">
		
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img className='close' src={icon_close} onClick={()=>handleRemoveCart(product)} alt="close" />

		</div>
	);
}

export default OrderItem;
