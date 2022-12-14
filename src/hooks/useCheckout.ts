import { useEffect, useMemo, useState } from 'react';
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
  checkout: { [id: string]: IProductData };
  isLoading: boolean;
}

interface ITotal {
  total: number
}

const checkoutStore = create<IProduct>((set) => ({
  checkout: {},
  isLoading: false
}))

const totalStore = create<ITotal>((set) => ({
  total: 0
}))

export const useTotal = () => {
  const { total } = totalStore.getState()
  const totalAry: number[] = []
  const { checkout, isLoading } = checkoutStore.getState()
  let totalTroly = 0
  if (Object.values(checkout).length > 0) {
    totalTroly = Object.values(checkout).reduce((accumalator, val) => accumalator + val.price * val.quantity, 0)
    // totalTroly = useMemo(() => {
    //   return Object.values(checkout).reduce((accumalator, val) => accumalator + val.price * val.quantity, 0)
    // }, [checkout])
  }
  totalStore.setState({
    total: totalTroly
  })
  return { totalTroly }
}

export const useCheckout = () => {
  const { checkout, isLoading } = checkoutStore.getState()
  const setTroli = (el: IProductData) => {
    let cekProduct = { ...el }
    if (cekProduct.quantity <= 0) {
      alert('out of stock')
      return;
    }
    if (checkout[el.id]) {
      cekProduct = checkout[el.id]
      cekProduct.quantity++
      checkoutStore.setState((state) => ({ checkout: { ...state.checkout, [cekProduct.id]: cekProduct } }))
    }
    else {
      cekProduct.quantity = 1
      checkoutStore.setState((state) => ({ checkout: { ...state.checkout, [cekProduct.id]: cekProduct } }))
    }


  }
  const minus = (el: IProductData) => {
    let troly = { ...el }
    if (troly.quantity - 1 < 0) {
      alert('out of stock')
      return;
    }
    if (checkout[el.id]) {
      troly = checkout[el.id]
      if (troly.quantity <= 1) {
        delete checkout[el.id]
        return
      }
      troly.quantity--
      checkoutStore.setState((state) => ({ checkout: { ...state.checkout, [troly.id]: troly } }))
    }
  }

  const plus = (el: IProductData) => {
    let troly = { ...el }
    // if (troly.quantity <= 0) {
    //   alert('out of stock')
    //   return;
    // }
    if (checkout[el.id]) {
      troly = checkout[el.id]
      troly.quantity++
      checkoutStore.setState((state) => ({ checkout: { ...state.checkout, [troly.id]: troly } }))
    }
  }

  return { checkout, setTroli, isLoading, minus, plus }
}



