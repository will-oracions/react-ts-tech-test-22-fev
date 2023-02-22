import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import AppContainer from '@Shared/components/AppContainer';
import React from 'react';

const Footer: React.FC = () => {
  return <>
    <Box bg="gray.200" h="60px">
      <AppContainer>
        <Flex w="100%" h="100%" alignItems="center" justifyContent="center">
          <Image w="30px" h="30px" src="/assets/images/art.png" alt="art" />
          <Text>Copy Right  &copy; -</Text>
          <Text><Link href="https://will-oracions.pages.dev" target="blank">&nbsp;will-oracions.pages.dev</Link> 2023</Text>
        </Flex>
      </AppContainer>
    </Box>
  </>;
}

export default Footer;