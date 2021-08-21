import { NextPage } from 'next'
import { Avatar, Box, Heading, HStack, Stack, StackDivider, VStack } from '@chakra-ui/react'

/**
 *  |       | 方向 | align      |
 *  | Stack | 縦   | 左(start)  |
 *  | HStack| 横   | 中央(center)|
 *  | VStack| 縦  | 中央(center)|
 */

const Component: NextPage = () => {
  return (
    <VStack align={'start'} width={'50%'}>
      <HStack spacing={'40px'}>
        <Box w={'40px'} h={'40px'} bg={'yellow.200'}>
          1
        </Box>
        <Box w={'40px'} h={'40px'} bg={'tomato'}>
          2
        </Box>
        <Box w={'40px'} h={'40px'} bg={'pink.100'}>
          3
        </Box>
      </HStack>

      <VStack divider={<StackDivider />} spacing={4} align={'stretch'}>
        <Box w={'40px'} h={'40px'} bg={'yellow.200'}>
          1
        </Box>
        <Box w={'40px'} h={'40px'} bg={'tomato'}>
          2
        </Box>
        <Box w={'40px'} h={'40px'} bg={'pink.100'}>
          3
        </Box>
      </VStack>

      <VStack spacing={4} align={'start'}>
        <Box p={10} background={'blue.100'} />
        <Box p={10} backgroundColor={'blue.100'} />
      </VStack>

      <Box display={'flex'} flexDirection={'row'}>
        <Avatar />
        <Box>
          <Heading size={'sm'}>Some member</Heading>
          <Box>
            あのイーハトーヴォのすきとほった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモーリオ市、郊外のぎらぎらひかる草の波
          </Box>
        </Box>
      </Box>

      <HStack>
        <Avatar />
        <Stack>
          <Heading size={'sm'}>Some member</Heading>
          <Box>
            あのイーハトーヴォのすきとほった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモーリオ市、郊外のぎらぎらひかる草の波
          </Box>
        </Stack>
      </HStack>
    </VStack>
  )
}

export default Component
