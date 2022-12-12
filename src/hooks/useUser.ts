import create from 'zustand'
import Axios from 'axios'
import { useEffect } from 'react';
import { join } from 'path';
interface IStore {
  count: number;
  increase: () => void;
  data: [];
}
const store = create<IStore>((set) => ({
  count: 0,
  data: [],
  increase: () => set((state) => ({ count: state.count + 1 }))

}))
export const useUserV2 = () => {
  const countol = store((state) => state.count)
  const clikData = store((satate) => satate.increase)
  const data = store((state) => state.data)
  // const { data, count, increase } = store.getState()

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/users').then((e) => {
      store.setState({ data: e.data })
    })
  }, [])

  return { data, clikData, countol }
}