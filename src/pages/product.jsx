import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import {Chekout, ListProduct} from '../components/template';

function product() {
  return (
    <Box>
      <Text>Product</Text>
      <Flex>
        <Box w={'full'}>
          <ListProduct />
        </Box>
        <Box w={'full'} maxW={'md'} pb={'36'}>
          <Chekout />
        </Box>
      </Flex>
    </Box>
  )
}

export default product