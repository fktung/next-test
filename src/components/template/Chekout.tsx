import { Box, Card, CardBody, Text } from '@chakra-ui/react'
import React from 'react'
import {useCheckout} from '../../hooks/useCheckout';
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

export const Chekout = () => {
  const {checkout} = useCheckout()
  console.log('checkout', checkout);
  
  return (
    <Box>
      <Text>CheckOut</Text>
      {
        Object.entries(checkout).map(([key, row], index) => {
          console.log(key, row)
          return (
            <Card key={index}>
                <Text>ini</Text>
                <CardBody>
                  {/* <Text>{row.name}</Text> */}
                  <Text>{row.price}</Text>
                  <Text>{row.quantity}</Text>
                </CardBody>
              </Card>
          )
        })
      }
    </Box>
  )
}
