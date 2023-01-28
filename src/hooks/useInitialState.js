import { useState } from "react";



const inicialState={
    cart:[]
}

const useInicialState=()=>{
    const [state, setState]=useState(inicialState);

    const [toggle, setToggle]=useState(false);
    const [toggleOrders, setToggleOrders]=useState(false);

    const [addCartImg, setAddCartImg]=useState(false);

    const [menuMobile, setMenuMobile]=useState(false);

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

    const handleToggleMenuMobile=()=>{
        setToggleOrders(false)
        setToggle(false)
        setMenuMobile(!menuMobile);
    }








    const removeFromCart=(payload)=>{
       
        setState({
            ...state,
            cart:state.cart.filter(items=>items.id!==payload.id)
        })  

       
    }

    return {
        state,
        addToCart,
        addCartImg,
        removeFromCart,
        setAddCartImg,
        togleHeader:{
            handleToggle,
            handleToggleMyOrder,
            toggle,
            toggleOrders,


            menuMobile,
            handleToggleMenuMobile,
          
        },
      
        
    }
}

export default useInicialState;