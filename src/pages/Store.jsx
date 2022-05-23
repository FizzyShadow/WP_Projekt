import { Product } from "../components/Product";
import { CategoryCheckBox } from "../components/CategoryCheckBox";
import { ProductProvider } from "../context/DatabaseContext";

const Store = () => {
    return (
      <ProductProvider>
        <div className="flex justify-between flex-row p-[3%] px-[6%]">
          <div className="basis-[20%]">
          <CategoryCheckBox />
          </div>
          <div className="basis-[80%]">
            <div className='flex justify-center items-center flex-wrap'>
            <Product></Product>
            </div>
          </div>
        </div>
      </ProductProvider>
      );
}
 
export default Store;
