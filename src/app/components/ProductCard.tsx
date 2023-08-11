'use client'
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { Button, Card, CardBody, CardSubtitle, Container } from "reactstrap"
import SuccessToast from "./SuccessToast"
import 'bootstrap/dist/css/bootstrap.min.css';

  const ProductCard = ({product}: any) => {
    const {ToastisOpen, SetToastisOpen}: any= useState(false)
    const {id, name, imageUrl, price} = product

  return (
    <><Card>
      <Link href={`/products/${id}`}>
        <Image className="card-img-top" src={imageUrl} alt={product.name} height={300} width={500} />
      </Link>

      <CardBody>
        <Link href={`/products/${id}`}>
          <h5 className="card-title" color="dark" style={{ cursor: 'pointer' }}>
            {name}
          </h5>
        </Link>

        <CardSubtitle className="mb-3 text-muted" tag="h6">
          R$ {price}
        </CardSubtitle>

        <Button
          color="dark"
          className="pb-2"
          block
          onClick={() => {
            SetToastisOpen(true)
            setTimeout(() => SetToastisOpen(false), 1000 * 3)
          } }

        >
          Adicionar ao Carrinho
        </Button>

      </CardBody>
    </Card>
    <SuccessToast toastisOpen={ToastisOpen} setToastisOpen={SetToastisOpen} />
    </>
  )
}

export default ProductCard