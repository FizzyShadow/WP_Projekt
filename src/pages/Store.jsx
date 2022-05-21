import { Product } from "../components/Product";

const Store = () => {
    return (
        <div className="flex justify-between flex-row p-[3%] px-[6%]">
          <div className="basis-[20%]">

          </div>
          <div className="basis-[80%]">
            <Product></Product>
          </div>
        </div>
      );
}
 
export default Store;
