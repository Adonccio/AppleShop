// src/components/CartTable.tsx
'use client'
import React from 'react';
import { Row, Col} from 'reactstrap';
import Image from "next/image";
import { useCartContext } from '../hooks';
import OnCartButton from './onCartButton';
import RemoveBtn from './onCartRemove';

export default function CartRow  (props: {entry : any}) {
    const {addProduct} = useCartContext()
    
  return (<>
    <tr><td>
        
            <Row className="align-items-center">
              {/* <Col xs={4} md={2} lg={1}> */}
                <div className="imgcart">
                
                  <Image
                    className='cartimg'
                    src={props.entry.product.imageUrl}
                    alt={props.entry.product.name}
                    height={50}
                    width={60}
                  />

                </div>
              {/* </Col> */}
            </Row>
    </td>
    <td>
        <Col xs={8} md={10} lg={11}>
                {props.entry.product.name}
              </Col>
    </td>
      <td>R$ {props.entry.product.price}</td>
      <td>{props.entry.quantity}</td>
      <td>R$ {(props.entry.product.price * props.entry.quantity)}</td>
      <td>
        <div className="buttons">
        
        <OnCartButton value={props.entry.product}/>
        <RemoveBtn value={props.entry.product.id}/>
        
      </div></td>
      </tr>
    </>)
    }
