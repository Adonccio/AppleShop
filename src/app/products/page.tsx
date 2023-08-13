'use client'
import { ReactNode } from 'react'
import ListProducts from '../components/ListProduct'
import database from '../../../database.json'
import { Container } from 'reactstrap'
import Navigationbar from '../components/Navigationbar'

function handler () {
  const products = database
  console.log(products[0])
  return (<>
  
  <Navigationbar/>
  <Container>
  <h1>Produtos</h1>
     <ListProducts products={products}/>
  </Container>
  </>)
  }
export default handler