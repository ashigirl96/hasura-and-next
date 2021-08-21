import { NextPage } from 'next'
import { Box, VStack } from '@chakra-ui/react'

const Component: NextPage = () => {
  return (
    <>
      <Box px={10}>
        <Box bg={'red.100'}>padding-x 10</Box>
      </Box>
      <Box px={12}>
        <Box bg={'red.100'}>padding-x 12</Box>
      </Box>
      <Box px={14}>
        <Box bg={'red.100'}>padding-x 14</Box>
      </Box>
      <Box w={100}>
        <Box bg={'red.100'}>width 100px</Box>
      </Box>
      <Box w={120}>
        <Box bg={'red.100'}>width 120px</Box>
      </Box>
      <Box w={140}>
        <Box bg={'red.100'}>width 140px</Box>
      </Box>

      <VStack spacing={10}>
        <Box px={10} _hover={{ backgroundColor: 'blue.200', fontSize: 'xl' }}>
          <Box bg={'red.100'}>padding-x 10</Box>
        </Box>
        <Box px={12}>
          <Box bg={'red.100'}>padding-x 12</Box>
        </Box>
        <Box px={14}>
          <Box bg={'red.100'}>padding-x 14</Box>
        </Box>
        <Box w={100}>
          <Box bg={'red.100'}>width 100px</Box>
        </Box>
        <Box w={120}>
          <Box bg={'red.100'}>width 120px</Box>
        </Box>
        <Box w={140} _before={{ content: `'「'` }} _after={{ content: `'」'` }}>
          <Box bg={'red.100'}>width 140px</Box>
        </Box>
      </VStack>

      {/* レスポンシブデザイン */}
      <Box bg={{ base: 'green.200', lg: 'blue.200' }}>Hello</Box>

      {/*  sx Prop(Chakra-UIで対応してないcssを対応できる) */}
      <Box sx={{ breakInside: 'avoid' }}>Hello</Box>
    </>
  )
}

export default Component
