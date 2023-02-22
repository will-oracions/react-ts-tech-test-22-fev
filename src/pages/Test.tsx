import React from 'react';
import { Heading, Stack, Text,  } from "@chakra-ui/layout"
import { Button, Flex, Box, Center } from '@chakra-ui/react';

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

        <Flex justifyContent="space-between" direction={{ base: 'column', md: 'row'}}>
            <Box borderWidth="2px" borderRadius="lg" borderColor="black.100" bg="tomato" w="100%" maxWidth={{ base: '100%', md: '200px'}} h="50px"></Box>
            <Box borderWidth="2px" borderRadius="lg" borderColor="black.100" bg="blue.400" w="100%" maxWidth={{ base: '100%', md: '200px'}} h="50px"></Box>
            <Box borderWidth="2px" borderRadius="lg" borderColor="black.100" bg="green.400" w="100%" maxWidth={{ base: '100%', md: '200px'}} h="50px"></Box>
            <Box borderWidth="2px" borderRadius="lg" borderColor="black.100" bg="yellow.400" w="100%" maxWidth={{ base: '100%', md: '200px'}} h="50px"></Box>
        </Flex>

        <Stack>
            <Button maxWidth={{ base: '100px', md: '200px'}}>Button1</Button>
            <Button maxWidth={{ base: '100px', md: '200px'}}>Button2</Button>
            <Button maxWidth={{ base: '100px', md: '200px'}}>Button3</Button>
        </Stack>
    </>;
}

export default Test;