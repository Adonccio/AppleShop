'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import products from '../../database.json'
import Container from 'react-bootstrap/Container';
import { Button } from 'reactstrap';
import Link from 'next/link';
import './style.css'
import Navigationbar from './components/Navigationbar';
import { UseCart } from '@/hooks/UseCart';



export default async function Home() {
  // const { CartContext }: any = UseCart()
  // console.log(CartContext)
  return (<>
 
    <Navigationbar/>
  <Container>
  <main>
    <Container className='py-5 text-center'>
              <h1 className='mt-5 display-1'>
                O melhor jeito de comprar produtos Apple 
              </h1>
    <Button className='initial-button' color='dark' variant="primary">
    <Link href='/products'>
    Ver Produtos
    </Link></Button>
    </Container>
  </main>
  </Container>
    </>
  )
}
