import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Heading, Box, Button } from '@chakra-ui/react';

import URLConfig from '@Config/urls.config';
import AppContainer from '@Shared/components/AppContainer';

const Home: React.FC = () => {

  return <>
    <Box position="relative" w="100%" h="100%" border="1px" borderColor="transparent"> 
      <HelmetProvider>
        <Helmet>
          <title>Home page</title>
        </Helmet>

        <Box w="100%" h="100%" position="absolute" top="0" bottom="0" right="0" left="0" bg="blackAlpha.900" opacity="0.2" zIndex="4" />
          
          <AppContainer>

            <Box position="relative" zIndex="10" w={{ base: '100%', md: '80%'}} minH="300px" bg="white" mt="4rem" borderRadius="4px" mx="auto" display="flex" flexDirection="column" justifyContent="center" alignItems="center">    

              <Heading color="tomato" mb="1rem">Welcome</Heading>

              <Link to={URLConfig.POKEMON_LIST}>
                <Button colorScheme="blue">Display Pockemons</Button>
              </Link>
            </Box>

          </AppContainer>

      </HelmetProvider>
    </Box>
  </>;
}

export default Home;