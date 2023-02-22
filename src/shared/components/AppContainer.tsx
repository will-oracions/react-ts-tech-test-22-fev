import React from 'react';
import { Box } from '@chakra-ui/react';

type Props = {
    children: React.ReactNode,
};

const AppContainer: React.FC<Props> = ({ children }) => {
    return <>
        <Box maxWidth="1200px" mx="auto" h="100%" px={{ base: '1rem', md: '2rem' }}>
            { children }    
        </Box>        
    </>;
}

export default AppContainer;