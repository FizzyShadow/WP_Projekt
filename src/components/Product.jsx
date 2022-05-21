import { uid } from "uid";
import { set, ref, onValue, remove, update } from "firebase/database";
import { useState, useEffect } from "react";
import { db } from "../firebase";

export const Product = () => {

    const [flower, setAddProducts] = useState("");
    const [products, setProducts] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [tempUuid, setTempUuid] = useState("");

    const handleTodoChange = (e) => {
        setAddProducts(e.target.value);
    };
  
    //read
    useEffect(() => {
      onValue(ref(db), (snapshot) => {
        setProducts([]);
        const data = snapshot.val();
        if (data !== null) {
          Object.values(data).map((addProducts) => {
            setProducts((oldArray) => [...oldArray, addProducts]);
          });
        }
      });
    }, []);
  
    //write
    const writeToDatabase = () => {
      const uuid = uid();
      set(ref(db, `/${uuid}`), {
        uuid,
        flower,
      });
  
      setAddProducts("");
    };

     //update
  const handleUpdate = (flower) => {
    setIsEdit(true);
    setTempUuid(flower.uuid);
    setAddProducts(flower.flower);
  };

  const handleSubmitChange = () => {
    update(ref(db, `/${tempUuid}`), {
        flower,
        uuid: tempUuid,
    });

    setAddProducts("");
    setIsEdit(false);
  };

  //delete
  const handleDelete = (flower) => {
    remove(ref(db, `/${flower.uuid}`));
  };

  return (
    <>
        <div className='flex justify-center items-center flex-wrap'>
            {products.length === 0 && <div class>slow internet...no products to display</div>}
            {products.map(product => (
                <div className='w-[300px] h-auto m-5 flex flex-col justify-start items-start text-xs font-semibold text-center shadow-2xl relative 'key={product.uuid}>
                    <div className='w-[100%] h-[200px]'>
                    
                      <a href="https://google.com" target="_blank" rel="noreferrer">
                      <img class ="object-fill h-[100%] w-[100%] brightness-90" src={product.flower.photo} alt="404 Not found"/>
                      </a>
                      <div className='absolute w-[100%] mt-0 text-[#ffffff] inset-y-[170px] text-lg font-bold'>
                        {product.flower.name}
                    </div>
                    </div>
                    
                    <div className='bg-[#5A2317]/50 text-[#ffffff] text-sm font-bold w-[100%] mt-0 mb-0'>
                        {product.flower.price} $
                    </div>
                <button className='bg-[#5A2317]/80 hover:bg-slate-600 text-[#ffffff] text-center font-bold text-base border-hidden cursor-pointer w-[100%] h-[30px] outline-none'>ADD TO CART</button>
                </div>
            ))}
        </div>
    </>
)
  
}
