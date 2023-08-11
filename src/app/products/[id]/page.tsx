"use client"

import products from '../../../../database.json'

export default function handler ({params}: any) {
    const product: any = products.find(prod => prod.id === Number(params.id))
    console.log(product)

    return (
        <>
        <h1>{product.name}</h1>
        {JSON.stringify(product, null, 2)}
        </>
    )

}