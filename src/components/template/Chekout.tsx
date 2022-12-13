import { Box, Button, Card, CardBody, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useMemo, useState } from 'react'
import {useCheckout} from '../../hooks/useCheckout';
import { useProduct } from '../../hooks/useProduct';
import {useUserV2} from '../../hooks/useUser'
import { TotalPrice } from '../molecules/TotalPrice';

interface IProductData {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string;
}
interface IProduct {
  checkout?: {}; isLoading: boolean;
}

export const Chekout = () => {
  const [ini, setIni] = useState({})
  const {checkout, minus, plus, setTroli} = useCheckout()
  // const coba = useMemo(() => {
  //   setIni(checkout)
  // },[checkout])
  // console.log(coba)
  const {productOut} = useProduct();
  const {countol} = useUserV2()
  // const checkoutProduct = useMemo(() => {
  //   return checkout
  // },[checkout])
  
  const hendelMinus = (el:IProductData) => {
    // useMinus:void(el.id)
    minus(el)
  }
  const hendelPlus = (el:IProductData) => {
    setTroli(el)
    productOut(el)
  }

  return (
    <Box minH={'100vh'} position={'relative'}>
      <Text>CheckOut</Text>
      <Text>{countol}</Text>
      {
        Object.entries(checkout).map(([key, row], index) => {
          return (
            <Card key={index}>
                <CardBody>
                  <Text>Name : {row.name}</Text>
                  <Text>Price : {row.price}</Text>
                  <Flex>
                    <Text mr={'2'}>quantity : </Text>
                    <Button size='xs' onClick={() => {hendelMinus(row)}}>-</Button>
                    <Text mx={'2'}>{row.quantity}</Text>
                    <Button size='xs' onClick={() => {hendelPlus(row)}}>+</Button>
                  </Flex>
                </CardBody>
              </Card>
          )
        })
      }
      <Box position={'absolute'} bottom={0} right={0} left={0}>
        <TotalPrice />
      </Box>
    </Box>
  )
}
