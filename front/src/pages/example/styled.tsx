import { NextPage } from 'next'
import { Box, Button, ButtonProps, Stack, VStack } from '@chakra-ui/react'
import { FC } from 'react'

const Alert: FC<ButtonProps> = (props) => <Button {...props} bg={'red.300'} textColor={'white'} />

const Component: NextPage = () => {
  const animals = ['dog', 'cat', 'rabbit', 'mouse']

  return (
    <>
      <VStack spacing={10}>
        <Button rounded={'md'}>Hello</Button>
        <Button rounded={'full'}>Hello</Button>
        <Button boxShadow={'md'}>Hello</Button>
        <Button boxShadow={'full'}>Hello</Button>
        <Alert boxShadow={'md'} rounded={'full'}>
          Hello
        </Alert>
      </VStack>

      <Stack spacing={100}>
        <Box>
          <Box bg={'red.500'} textColor={'white'} ml={10}>
            {animals[0]}
          </Box>
        </Box>
        <Box>
          <Box bg={'red.500'} textColor={'white'} ml={10}>
            {animals[0]}
          </Box>
        </Box>
        <Box>
          <Box bg={'red.500'} textColor={'white'} ml={10}>
            {animals[0]}
          </Box>
        </Box>

        <Box bg={'red.500'} textColor={'white'} m={10}>
          {animals[1]}
        </Box>

        <Box bg={'red.500'} textColor={'white'} m={10}>
          {animals[2]}
        </Box>
        {/*{animals.map((animal) => (*/}
        {/*  <Box bg={'red.500'} textColor={'white'} m={10}>*/}
        {/*    {animal}*/}
        {/*  </Box>*/}
        {/*))}*/}
      </Stack>
    </>
  )
}

export default Component
