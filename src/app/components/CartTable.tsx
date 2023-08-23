'use client'
import { useEffect, useState } from "react";
import CartRow from "./CartRow";
import { Table } from "reactstrap";
import { useCartContext } from "../hooks";


export default function CartTable() {
  const { cart } = useCartContext()
  const [cartEntries, setCartEntries] = useState([])

  useEffect(() => {
    const entriesList = cart.reduce((list: any, product: any) => {
      const entryIndex = list.findIndex((entry: any) => entry.product.id === product.id)

      if (entryIndex === -1) {
        return [
          ...list,
          {
            product,
            quantity: 1
          }
        ]
      }

      list[entryIndex].quantity++
      return list

    }, [])

    entriesList.sort((a: any,b: any)  => a.product.id - b.product.id)
    setCartEntries(entriesList)

  }, [cart])

  return (<>
    <Table responsive className="align-middle tabela" style={{ minWidth: '32rem' }}>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Nome</th>
          <th>Preço</th>
          <th>Qtd.</th>
          <th>Total</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody>
				{cartEntries.map((entry: any) => 
        <CartRow key={entry.product.id} entry={entry} />
        )}
      </tbody>
    </Table>
    
    <h2>
        Total: {cart.reduce((accum: any, num: any) => accum + num.price, 0)}
    </h2></>
  )
}