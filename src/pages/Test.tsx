import React from 'react';
import { Heading, Stack, Text } from "@chakra-ui/layout"
import { Button } from '@chakra-ui/react';

const Test: React.FC = () => {
    return <>
        <h1>Test Chakra UI</h1>

        <Stack spacing={4} bg="white" p={8} borderRadius="lg">
            <Heading as="h1" size="md" color="primary.900">
                Learning Chakra UI
            </Heading>
            <Text as="p" fontSize="md" color="primary.500">
                Your first Chakra components:
            </Text>
            <Button bg="black.100" color="white.100">
                Click me
            </Button>
        </Stack>
    </>;
}

export default Test;