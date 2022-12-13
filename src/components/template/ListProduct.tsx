import { Box, Button, Card, CardBody, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import {useProduct} from '../../hooks/useProduct';
import {useCheckout} from '../../hooks/useCheckout';
import {useUserV2} from '../../hooks/useUser'

interface IProductData {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface IAcumulation {
  id?: { id?: IProductData };
}

export const ListProduct = () => {
  const {getProduct, productOut, products, isLoading} = useProduct();
  const {setTroli} = useCheckout()
  const {clikData} = useUserV2()
  

  const acumulation: IAcumulation = products.reduce((data: IAcumulation, value: IProductData) => {
    return {...data, [value.id]: value};
  }, {})
  
  
  const hendelSave = (e:IProductData) => {
    setTroli(e)
    productOut(e)
    clikData()
  }

  return (
    <Box>
      <Flex flexWrap={'wrap'}>
        {
          products.map((row, index) => {
            return (
              <Card key={index}>
                <CardBody>
                  <Text>{row.name}</Text>
                  <Text>{row.price}</Text>
                  <Text>{row.quantity}</Text>
                  <Button onClick={() => {hendelSave(row)}} colorScheme='teal' size='xs'>
                    Button
                  </Button>
                </CardBody>
              </Card>
            )
          })
        }
      </Flex>
    </Box>
  )
}
