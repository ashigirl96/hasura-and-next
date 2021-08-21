import { NextPage } from 'next'
import { useBreakpointValue } from '@chakra-ui/react'

const Component: NextPage = () => {
  // md以下ならtrue、以上ならfalse
  const isMobile = useBreakpointValue({ base: true, md: false })

  if (isMobile) {
    return <div>Mobile</div>
  }

  return <div>Laptop</div>
}

export default Component
