import { CartItem } from "../components/CartItem";
import { CartItemProvider } from "../context/CartItemContext";


export const ShoppingCartPage = () => {

    return (
      <>
      <div className="flex flex-col h-screen">
       <div className=" text-white bg-[#060606]/20 text-2xl font-bold flex mt-5 justify-between px-[5%] mx-[15%] items-center w-[70%] py-[0.5%]"> 
        <p>Items</p>
        <p>Price</p>
       </div>
       <div>
        <CartItemProvider>
        <CartItem></CartItem>
        </CartItemProvider>
       </div>
        </div>
      </>
      );
}
 
