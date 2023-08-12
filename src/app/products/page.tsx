'use client'
import { ReactNode } from 'react'
import ListProducts from '../components/ListProduct'
import database from '../../../database.json'

function handler () {
  const products = database
  console.log(products[0])
  return (<>
  <h1>Produtos</h1>
     <ListProducts products={products}/>
  </>)
  }
export default handler