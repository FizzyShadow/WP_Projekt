import React, { useContext } from "react";
import { CartItemContext } from "../context/CartItemContext";

export const CartItem = () => {

    const {cartItems, onAdd } = useContext(CartItemContext);
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.flower.price, 0);
    const totalPrice = itemsPrice;

    return (
        <>
            {cartItems.map(product => (
            <div className='text-white bg-[#5A2317]/50 text-2xl font-bold flex mt-5 justify-between px-[5%] mx-[15%] items-center w-[70%] py-[0.5%] 'key={product.uuid}>
                
                <div className='text-[#ffffff] text-sm font-bold w-[100%] mt-0 mb-0'>
                    {product.flower.name}
                </div>
                <div className='text-[#ffffff] text-sm text-right font-bold w-[100%] mt-0 mb-0'>
                    <div>
                        {product.qty} 
                    </div>
                    <div>
                        {product.flower.price} $
                    </div>
                </div>            
            </div>
        ))}
        <div className=" bg-[#060606]/20 mx-[15%] md:text-xs lg:font-bold text-base flex  mt-[1%] items-center justify-center md:h-[40px] lg:h-[40px] w-[15%]">
            <div className="m-10 text-white/90 text-center">
                <div>Total: {totalPrice.toFixed(2)} $ </div>
            </div>
        </div>
        </>

            
    )


}