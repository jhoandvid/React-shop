import { useState } from "react";



const inicialState={
    cart:[]
}

const useInicialState=()=>{
    const [state, setState]=useState(inicialState);

    const [toggle, setToggle]=useState(false);
    const [toggleOrders, setToggleOrders]=useState(false);

    const handleToggle=()=>{
        setToggle(!toggle);
        setToggleOrders(false)
    }

    const handleToggleMyOrder=()=>{
        setToggleOrders(!toggleOrders);
        setToggle(false)
    }


    const addToCart=(payload)=>{
        setToggleOrders(false)
        setToggle(false)

        setState({
            ...state,
            cart:[...state.cart, payload]
        })
    }





    const removeFromCart=(payload)=>{
        setState({
            ...state,
            cart:state.cart.filter(items=>items.uuid!==payload.uuid)
        })  

       
    }

    return {
        state,
        addToCart,
        removeFromCart,
        togleHeader:{
            handleToggle,
            handleToggleMyOrder,
            toggle,
            toggleOrders
        }
        
    }
}

export default useInicialState;