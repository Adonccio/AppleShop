import { Button } from "reactstrap";
import { useCartContext } from "../hooks";
import { BsFillTrashFill } from "react-icons/bs";

export default function RemoveBtn ({value}: any) {
    const { removeProduct } = useCartContext()

    return (
        <Button color="danger" className="btn" onClick={() => removeProduct(value)}> <BsFillTrashFill/></Button>
    )
}