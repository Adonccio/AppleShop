import { Button, Toast, ToastBody, ToastHeader } from "reactstrap";

const SuccessToast = (props:{ toastisOpen: any, settoastisOpen: (isOpen: any)=> void} ) => {
    return (
    <>
    
    <Toast className="p-3 bg-success my-2  fixed-bottom  ms-auto me-4 mb-4" isOpen={props.toastisOpen}
    fade>
      <ToastHeader>
        Sucesso!
      </ToastHeader>
      <ToastBody className=".text-white">
        Produto Adicionado ao Carrinho!
      </ToastBody>
      <Button 
          close
          className="btn-close-white "
          onClick={() =>  props.settoastisOpen(false)}
        ></Button>
      
    </Toast>
  </>)
}

export default SuccessToast