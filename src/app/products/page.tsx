'use client'
import { ReactNode } from 'react'
import ListProducts from '../components/ListProduct'
import database from '../../../database.json'
import { ProductType, fetchProducts } from '../services/products'

function handler () {
  const products = database
  console.log(products[0])
  return (<>
  <h1>Produtos</h1>
  <pre>
     <ListProducts products={products}/>
    </pre>
  </>)
  }
export default handler