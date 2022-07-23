import { Box, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Box bg="brown" color="#ddd" textAlign="center"><Heading as="h1" lineHeight="64px">Chess Online</Heading></Box>
  )
}

export default Home;
