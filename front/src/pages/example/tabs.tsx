import { NextPage } from 'next'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

const Component: NextPage = () => {
  return (
    <>
      <Tabs colorScheme={"red"}>
        <TabList>
          <Tab>Dog</Tab>
          <Tab>Cat</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            🐶
          </TabPanel>
          <TabPanel>
            🐱
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

export default Component
