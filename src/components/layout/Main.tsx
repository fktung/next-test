import { Box, Flex } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface MainProps {
  children: ReactNode
}

export const Main: React.FC<MainProps> = ({children}) => {
  return (
    <>
      <Flex bg='green.700'>
        {children}
      </Flex>
    </>
  )
}

// export default Main