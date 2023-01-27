import { useEffect, useState } from "react";
import axios from 'axios';



const useGetProducts=(Api)=>{

    const [products, setProduct]=useState([]);

    useEffect(async()=>{
        const response=await axios(Api);
        const data=response.data;
    
        setProduct(data);


       
    }, []);

    return products;

};

export default useGetProducts;