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
  products : [],
  isLoading: false
}))

export const useProduct = () => {
  const [productState, setProductState] = useState([])
  const {products, isLoading} = store.getState()

  store.setState({ isLoading: true })
  const getProduct = async () => {
    const res = await Axios.get('http://localhost:3001/product')
    const data = await res.data
    setProductState(data)
    // store.setState({
    //   products: data
    // })
  }
  store.setState({
    products: productState
  })

  useEffect(() => {
    getProduct()
  }, [])

  return {getProduct, products, isLoading}
}