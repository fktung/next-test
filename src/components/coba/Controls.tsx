import { Box, Button, Text } from '@chakra-ui/react'
import React, { useEffect, useMemo, useState } from 'react'
import { useBearStore, useUser } from '../../../helper/zustand'


export const Controls = () => {
  // const [user, setUser] = useState([]);
  // const getUser = async() => {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/users')
  //   const result = await res.json()
  //   // console.log(result);
  //   setUser(result)
  // }
  // useEffect (() => {
  //   getUser()
  // }, [])
  const increasePopulation = useBearStore((state) => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}
export const BearCounter = () => {
  const bears = useBearStore((state) => state.bears)
  return <h1>{bears} around here ...</h1>
}
export const ResetState = () => {
  const removeAllBears = useBearStore((state) => state.removeAllBears)
  return <button onClick={removeAllBears}>reset</button>
}

export const Users = () => {
  const {users, isLoading, getUser} = useUser()

  console.log("isLoading", isLoading)
  console.log("users", users)

  return (
    <>
    <Button onClick={getUser}></Button>
    <Box>

      {/* {isLoading ? "Loading . . . ." : users?.map((e, idx)=>{
        return (
          <Box key={idx}>
          <Text >{e.name}</Text>
          <Text>{e.email}</Text>
          </Box>
        )
      })} */}
      <Text>

        {/* Name {user.name} */}
      </Text>
    </Box>
    </>
  )
}