import axios from 'axios';
import React from 'react';
import ProductItem from '../components/ProductItem';
import useGetProducts from '../hooks/useGetProduct';
import '../styles/ProductList.scss';

const Api='https://api.escuelajs.co/api/v1/products';



const ProductList=()=>{

    const products=useGetProducts(Api);
    

    return (
        <section className='main-container'>
            <div className='ProductList'>
                {
                    products.map(product=>(
                        <ProductItem key={product.id} product={product}/>
                    ))
                }
               
            </div>
        </section>
    )
}

export default ProductList;