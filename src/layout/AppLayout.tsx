import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '@Layout/index';
import { Box, Flex } from '@chakra-ui/react';

const AppLayout: React.FC = () => {    
  return <>
    <Box w="100wv" h="100vh" color="blackAlpha.700" bgImage="/assets/images/container_bg.png" bgPosition="cover">
      <Flex h="100%" direction="column">
        <Header />
        <Box flex="1">
          <Outlet />
        </Box>
        <Footer />
      </Flex>
    </Box>
  </>;
}

export default AppLayout;