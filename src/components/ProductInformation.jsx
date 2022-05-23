import { ProductContext } from '../context/DatabaseContext';
import React, { useContext, useEffect, useState } from 'react';

export const ProductInformation = (props) => {

    const item = props.value;

    return(
        <>
        {console.log(item)}
        <div className=" bg-[#5A2317]/20 mx-[10%] mt-[3%] justify-center h-[60%] w-[80%] pt-[1%]">
            <h1 className='text-white/90 font-semibold text-center md:text-[40px] pb-4'>Details</h1>
            <div className="flex justify-between m-10 text-white/90">
                <div className="basis-[30%]">
                   <img src={item.photo} className='h-[300px] w-[400px] '></img>
                </div>
                <div className="basis-[60%] text-2xl">
                    <p className='py-[1%]'> <span className='italic font-bold'> Name: </span> {item.name}</p>
                    <p className='py-[1%]'> <span className='italic font-bold'> Category: </span> {item.category}</p>
                    <p className='py-[1%]'> <span className='italic font-bold'> Price: </span> {item.price}</p>
                    <p className='py-[1%]'> <span className='italic font-bold'> Instructions: </span> {item.instructions}</p>
                </div>
                
                
            </div>
            <div className='relative mr-10'> 
            <button className='bg-[#5A2317]/80 absolute right-0 hover:bg-slate-600 text-[#ffffff] text-center font-bold text-base border-hidden cursor-pointer w-[10%] h-[50px] outline-none'>ADD TO CART</button>
                </div>
        </div>
        
      
        </>
    )
}