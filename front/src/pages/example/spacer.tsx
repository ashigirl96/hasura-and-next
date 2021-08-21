import { NextPage } from 'next'
import { Box, Spacer, HStack, Flex } from '@chakra-ui/react'

const Component: NextPage = () => {
  return (
    <>
      <HStack w={'50%'} spacing={2}>
        <Box fontWeight={200}>@taro:</Box>
        <Box>Hello</Box>
        <Spacer />
        <Box fontWeight={200}>2021-08-21 12:00</Box>
      </HStack>

      <Flex width={'50%'}>
        <Box color={'gray.500'} px={1}>
          @taro:
        </Box>
        <Box fontWeight={'bold'}>Hello!</Box>
        <Spacer />
        <Box color={'gray.500'}>2021-08-21 12:00</Box>
      </Flex>
    </>
  )
}

export default Component
