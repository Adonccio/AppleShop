import { Button, Toast, ToastBody, ToastHeader } from "reactstrap";

export default function SuccessToast (props:{ toastisOpen: boolean, setToastisOpen: any}) {
    return (
    <div >
    <Toast className="p-3 bg-success my-2 rounded" isOpen={props.toastisOpen}
    fade>
      <ToastHeader>
        Sucesso!
      </ToastHeader>
      <ToastBody>
        Produto Adicionado ao Carrinho!
      </ToastBody>
      <Button
          close
          className="btn-close-white"
          onClick={() => props.setToastisOpen(false)}
        ></Button>
    </Toast>
  </div>)
}