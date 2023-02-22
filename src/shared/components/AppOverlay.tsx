import React from 'react';
import { Box } from '@chakra-ui/react';

// type Props = {
//     children?: React.ReactNode,
// };

const AppOverlay: React.FC = () => {
    return <>
        <Box w="100%" h="100%" position="absolute" top="0" bottom="0" right="0" left="0" bg="blackAlpha.900" opacity="0.2" zIndex="4" />
    </>;
}

export default AppOverlay;