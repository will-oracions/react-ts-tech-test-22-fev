import React from 'react';
import { Box, Flex, Heading, List, ListItem } from '@chakra-ui/react';
import { Link as NavLink } from 'react-router-dom';

import EnvConfig from '@Config/env.config';
import URLConfig from '@Config/urls.config';
import AppContainer from '@Shared/components/AppContainer';

const Header: React.FC = () => {
  return <>
    <Box bg="white" h={{ base: '80px', md: '60px' }} zIndex="10">
      <AppContainer>

        <Flex w="100%" h="100%" direction={{ base: 'column', md: 'row' }} justifyContent={{ base: 'center', md: 'space-between' }} alignItems="center">
          <NavLink to={URLConfig.HOME}>
            <Heading fontSize="20px">{EnvConfig.APP_NAME}</Heading>
          </NavLink>

          <List display="flex" color="tomato" fontWeight="semibold">

            {/* <NavLink to={URLConfig.HOME}>
              <ListItem mx="1rem">
                Home
              </ListItem>
            </NavLink> */}

            <NavLink to={URLConfig.POKEMON_LIST}>
              <ListItem mx="1rem">
                  Pokemons
              </ListItem>
            </NavLink>

          </List>
        </Flex>
      
      </AppContainer>
    </Box>
  </>;
}

export default Header;