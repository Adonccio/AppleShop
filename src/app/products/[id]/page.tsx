"use client"

import products from '../../../../database.json'
import Image from "next/image"
import '../../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartButton from '@/app/components/CartButton';
import Navigationbar from '@/app/components/Navigationbar';
import { useEffect, useState } from 'react';

export default function handler ({params}: any) {
    const product: any = products.find(prod => prod.id === Number(params.id))

    return (
        <>
        <Navigationbar/>
        <div className="product-page">
            
        <div className="product-image">
        <Image className="card-img-top img-item-productpage" src={product.imageUrl} alt={product.name} height={500} width={600} />

        </div>

        <div className="product-details">
        
        <h1>{product.name}</h1>
        <h3>R$ {product.price}</h3>
        <p>{product.description}</p>
        <CartButton value={product}/>
        </div>
        
        </div>
        </>
    )

}