'use client'
import Navigationbar from '../components/Navigationbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap'
import CartTable from "../components/CartTable";
import '../style.css'


export default function cart () {
    return(
    <>
        <Navigationbar/>
        <Container className="cont">
        <h1>Seu Carrinho</h1>
        <CartTable/>
        </Container>
    </>
    )
}