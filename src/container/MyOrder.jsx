import React, { useContext } from 'react';
import OrderItem from '../components/OrderItem';
import '../styles/MyOrder.scss';

import flechita from '@icons/flechita.svg';

import AppContext from '../context/AppContext';

const MyOrder = () => {
	const {state:{cart}, togleHeader:{handleToggleMyOrder}}=useContext(AppContext);


	const sumTotal=()=>{
		 const reducer=(accumulator, currentValue)=>accumulator+currentValue.price
			const sum=cart.reduce(reducer, 0);
			return sum; 

			/* let sum=0;

			cart.map((product)=>{
				sum+=product.price
			})

			return sum; */

		}
	
	
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img className='flechita' src={flechita} alt="arrow" onClick={handleToggleMyOrder} />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				
				
				{cart.map((product, index)=>( <OrderItem key={`orderItem-${index}`} product={product}/>))}

				
			
			
				
			</div>

			
			<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			
			
			
		</aside>
	);
}

export default MyOrder;