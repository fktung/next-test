import { useEffect, useState } from 'react';
import create from 'zustand'
import Axios from 'axios'
interface IStore {
  bears: number;
  // data:[any];
  increasePopulation: () => void;
  removeAllBears: () => void;
}

export const useBearStore = create<IStore>(set => ({
  bears: 0,
  data: [],
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // increasePopulation: (data) => {console.log()},
  removeAllBears: () => set({ bears: 0 }),
}))

interface IProductData {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface IProduct {
  users: IProductData[]; isLoading: boolean;
}

const store = create<IProduct>((set) => ({
  users : [],
  isLoading: false
}))

export const useUser = () => {
  const { users, isLoading } = store.getState()

  const getUser = async () => {
    store.setState({ isLoading: true })
    const axiosResponse = await Axios.get('http://localhost:3001/product')
    const data = await axiosResponse.data
    console.log(data)
    store.setState({
      users: data
    })
    // return data
  }


  // store.setState({
  //   users: getData
  // })
  useEffect(() => {
    getUser()
  }, [])

  return { users, isLoading, getUser }
}