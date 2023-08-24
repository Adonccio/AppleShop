'use client'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Button } from 'reactstrap';
import Link from 'next/link';
import Navigationbar from './components/Navigationbar';



export default async function Home() {
  return (<>
 
    <Navigationbar/>
  <Container>
  <main>
    <Container className='py-5 text-center'>
              <h1 className='mt-5 display-1'>
                O melhor jeito de comprar produtos Apple 
              </h1>
    <Button className='initial-button' color='dark' variant="primary">
    <Link href='/products' className='productslink'>
    Ver Produtos
    </Link></Button>
    </Container>
  </main>
  </Container>
    </>
  )
}
