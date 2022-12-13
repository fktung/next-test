import { Box, Button, Card, CardBody, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import {useProduct} from '../../hooks/useProduct';
import {useCheckout} from '../../hooks/useCheckout';

interface IProductData {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface IAcumulation {
  id?: IProductData
}

export const ListProduct = () => {
  const {getProduct, products, isLoading} = useProduct();
  const {setTroli, checkoutStore} = useCheckout()

  const acumulation: any = products.reduce((data: IAcumulation, value: IProductData) => {
    return {...data, [value.id]: value};
  }, {})
  
  const hendelSave = (e:any) => {
    // console.log(e)
    setTroli(e)
    // checkoutStore.setState({
    //   checkout: ((state:IAcumulation) => ({
    //     ...state, [e.id]: e
    //   }))
    // })
  }

  return (
    <Box>
      <Flex flexWrap={'wrap'}>
        {
          // products.map((row, index) => {
          //   return (
          //     <Card key={index} maxW={'20rem'} justifyContent={'center'}>
          //       <CardBody>
          //         <Text>{row.name}</Text>
          //         <Text>{row.price}</Text>
          //         <Text>{row.quantity}</Text>
          //       </CardBody>
          //     </Card>
          //   )
          // })
          Object.entries(acumulation).map(([key,row], index) => {
            // console.log(row);
            
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
