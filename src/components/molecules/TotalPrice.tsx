import { Box, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useTotal } from '../../hooks/useCheckout'

export const TotalPrice = () => {
  const { totalTroly} = useTotal()
  // console.log();
  
  return (
    <Box h={'36'} >
      <Text>Total</Text>
      <Text>{totalTroly}</Text>
    </Box>
  )
}
