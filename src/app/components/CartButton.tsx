
import { Button } from "reactstrap";
import SuccessToast from "./SuccessToast";
import { useContext, useEffect, useState } from "react";
import { BsCart4 } from 'react-icons/bs'
import { createContext } from "vm";
import { CartProvider, useCartContext } from "../hooks";

export default function CartButton ({value}: any)  {
    
  const { cart, addProduct } = useCartContext()
   const [toastIsOpen, setToastIsOpen] = useState(false)
  
    return <>
    
    <Button
          color="dark"
          className="pb-2 btn"
          onClick={() => 
            {setToastIsOpen(true)
            addProduct(value)
            setTimeout(() => {
              setToastIsOpen(false)
            }, 2500)}
            // location.reload();
           }

        >
          Adicionar ao Carrinho <BsCart4/>
        </Button>
    
        <SuccessToast toastisOpen={toastIsOpen} settoastisOpen={setToastIsOpen} />
    </>
}
