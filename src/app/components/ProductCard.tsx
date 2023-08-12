'use client'
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { Button, Card, CardBody, CardSubtitle, Container } from "reactstrap"
import SuccessToast from "./SuccessToast"
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartButton from "./CartButton"

  const ProductCard = ({product}: any) => {
    
    const [toastIsOpen, setToastIsOpen] = useState(false)
    const {id, name, imageUrl, price} = product
    console.log(toastIsOpen)

  return (
    <>
    <Card className="card" >
      
      <Link className="product-tittle" href={`/products/${id}`}>
        <Image className="card-img-top" src={imageUrl} alt={product.name} height={300} width={500} />
      </Link>

      <CardBody className="card-name">
        <Link href={`/products/${id}`}>
          <h5 className="card-title" color="dark" style={{ cursor: 'pointer' }}>
            {name}
          </h5>
        </Link>

        <CardSubtitle className="mb-3 text-muted" tag="h6">
          R$ {price}
        </CardSubtitle>

      <CartButton/>
      </CardBody>
      
    </Card>
    
    <SuccessToast toastisOpen={toastIsOpen} settoastisOpen={setToastIsOpen} />
    </>
  )
}

export default ProductCard