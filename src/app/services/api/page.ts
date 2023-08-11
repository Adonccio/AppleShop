import products from '../../../../database.json'

export default function handler () {
    return (JSON.stringify(products, null, 2))
}