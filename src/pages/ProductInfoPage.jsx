import React, {useContext, useEffect} from 'react'
import { ProductInformation } from '../components/ProductInformation'
import { ProductProvider } from '../context/DatabaseContext'
import { useParams, useLocation } from 'react-router-dom'



export const ProductInfoPage = (props) => {

    var id = useParams();
    var property = useLocation().state.item.flower;

    return(
        <>
            <div className="h-screen">
              <ProductProvider>
                    <ProductInformation value={property}></ProductInformation>
              </ProductProvider>

          </div>
        </>
    )
}