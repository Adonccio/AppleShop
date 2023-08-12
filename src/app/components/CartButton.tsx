import { Button } from "reactstrap";
import SuccessToast from "./SuccessToast";
import { useState } from "react";

export default function CartButton () {
    
    const [toastIsOpen, setToastIsOpen] = useState(false)
    return <>
    
    <Button
          color="dark"
          className="pb-2"
          onClick={() => 
            {setToastIsOpen(true)
            setTimeout(() => {
              setToastIsOpen(false)
            }, 2500);}
           }

        >
          Adicionar ao Carrinho
        </Button>
    
        <SuccessToast toastisOpen={toastIsOpen} settoastisOpen={setToastIsOpen} />
    </>
}