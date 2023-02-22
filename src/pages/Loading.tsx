import React from 'react';
import { AppLoader } from '@Shared/index';
import { Flex } from '@chakra-ui/react';

const Loading: React.FC = () => {
    return <>
        <Flex w="100%" h="100%" bg="tomato" color="white" fontSize="3rem" justifyContent="center" alignItems="center">
            <AppLoader />
        </Flex>
    </>;
}

export default Loading;