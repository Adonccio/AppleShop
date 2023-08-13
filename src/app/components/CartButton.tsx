
import { Button } from "reactstrap";
import SuccessToast from "./SuccessToast";
import { useState } from "react";
import { BsCart4 } from 'react-icons/bs'

export default function CartButton () {
    
    const [toastIsOpen, setToastIsOpen] = useState(false)
    return <>
    
    <Button
          color="dark"
          className="pb-2 btn"
          onClick={() => 
            {setToastIsOpen(true)
            setTimeout(() => {
              setToastIsOpen(false)
              // addProduct()
            }, 2500);}
           }

        >
          Adicionar ao Carrinho <BsCart4/>
        </Button>
    
        <SuccessToast toastisOpen={toastIsOpen} settoastisOpen={setToastIsOpen} />
    </>
}