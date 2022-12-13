import create from 'zustand'
import Axios from 'axios';
import { useEffect, useState } from 'react';

interface IProductData {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface IProduct {
  products: IProductData[]; isLoading: boolean;
}

const store = create<IProduct>((set) => ({
  products: [],
  isLoading: false
}))

export const useProduct = () => {
  const products = store((e) => e.products)
  const isLoading = store((e) => e.isLoading)
  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async () => {
    store.setState({ isLoading: true })
    const res = await Axios.get('http://localhost:3001/product')
    const data = await res.data
    store.setState({
      products: data
    })
  }

  const productOut = (e: IProductData) => {
    // const {products} = store.getState()
    // const products = store((e) => e.products)
    if (e.quantity === 0) return;
    // const result = { ...e }
    // const prod = { ...products }
    // result.quantity -= 1
    products.forEach(row => {
      if (row.id === e.id) {
        row.quantity -= 1;
        return
      }
    });
    // e.quantity = e.quantity - 1
  }


  return { getProduct, productOut, products, isLoading }
}