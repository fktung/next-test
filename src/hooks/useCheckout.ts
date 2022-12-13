import { useEffect, useState } from 'react';
import create from 'zustand'

interface IProductData {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string;
}
interface IProduct {
  checkout?: IProductData[]; isLoading: boolean;
}

const checkoutStore = create<IProduct>((set) => ({
  checkout : [],
  isLoading: false
}))

export const useCheckout = () => {
  const [getCheckout, setCheckout]:any = useState({})
  const {checkout, isLoading} = checkoutStore.getState()

  const setTroli = (el:IProductData) => {
    setCheckout((state:IProduct) => ({...state, [el.id]:el}))
  }
  
  
  checkoutStore.setState({
    checkout: getCheckout
  })
  console.log(checkout);
  
  // useEffect(() => {
  //   console.log(getCheckout)
  //   checkoutStore.setState({
  //     checkout: getCheckout
  //   })
  // }, [getCheckout])

  return {checkout, setTroli, checkoutStore}
}
