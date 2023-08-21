
import { Button } from "reactstrap";
import SuccessToast from "./SuccessToast";
import { useContext, useEffect, useState } from "react";
import { BiSolidPlusCircle } from "react-icons/bi";
import { createContext } from "vm";
import { CartProvider, useCartContext } from "../hooks";

export default function OnCartButton ({value}: any)  {
    
  const { cart, addProduct } = useCartContext()
   const [toastIsOpen, setToastIsOpen] = useState(false)
  
    return <>
    
    <Button
          color="success"
          className="pb-2 btn"
          onClick={() => 
            {
            setToastIsOpen(true)
            addProduct(value)
            setTimeout(() => {
              setToastIsOpen(false)
            }, 2500);}
           }

        >
          <BiSolidPlusCircle/>
        </Button>
    
        <SuccessToast toastisOpen={toastIsOpen} settoastisOpen={setToastIsOpen} />
    </>
}
