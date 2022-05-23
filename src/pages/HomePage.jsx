import { Product } from "../components/Product";
import { CategoryCheckBox } from "../components/CategoryCheckBox";
import { ProductProvider } from "../context/DatabaseContext";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/globalValues";
import { RowOfItemas } from "../components/RowOfItems";

const Home = () => {
    return (
      <>
       
          <div className="flex-nowrap px-[5%] w-[98vw]">
            <ImageSlider slides={SliderData}></ImageSlider>
            <div className="justify-center pb-10">
              <ProductProvider>
                <RowOfItemas></RowOfItemas>
              </ProductProvider>
            </div>
          </div>

       
      </>
      );
}
 
export default Home;
