import { NextPage } from 'next'
import NextLink from 'next/link'

import { Button, Link, LinkProps, VStack } from '@chakra-ui/react'
import { FC } from 'react'

const HoverLink: FC<LinkProps> = (props) => {
  return <Link bg={'blue.500'} textColor={'white'} _hover={{ bg: 'red.200' }} p={2} {...props} />
}

const Component: NextPage = () => {
  return (
    <VStack spacing={100}>
      <Link href={'https://example.com'}>
        <Button>default button(hover時underlineが入る)</Button>
      </Link>

      <Button as={'a'} href={'https://example.com'}>
        as=a button
      </Button>

      <NextLink href="https://google.com" passHref>
        <Button as="a">動的に飛べる</Button>
      </NextLink>

      <HoverLink>Hello</HoverLink>
    </VStack>
  )
}

export default Component
