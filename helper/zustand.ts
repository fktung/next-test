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

interface IAddress {
  street: string;
  suite: string
  zipcode: string;
}

interface IUser {
  email: string
  name: string;
  address: IAddress;
}

interface UStore {
  users: IUser[]; isLoading: boolean;
}
const store = create<UStore>(() => ({
  users: [],
  isLoading: false
}))



export const useUser = () => {
  const { users, isLoading } = store.getState()

  const getUser = async () => {
    store.setState({ isLoading: true })
    const axiosResponse = await Axios.get('https://jsonplaceholder.typicode.com/users')
    const data = await axiosResponse.data
    store.setState({
      users: await axiosResponse.data
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