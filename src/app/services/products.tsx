import produtos from '../../../database.json'

export type ProductType = {
    id: number;
    name: string;
    description: string
    price: number;
    imageUrl: string;
    inStock: number
}

export const fetchProducts = async () => {
    const products = JSON.stringify(produtos)
    return products
}

export const fetchProduct = async (id: number | string) => {
    const product: any= await fetch (`${process.env.NEXT_APPLESHOP}/api/products/${id}`)
    return product
}