import { Box, Flex, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Board from "../components/Board";
import Piece from "../components/Piece";

const Home: NextPage = () => {
  const pieces = [];
  const pieceWidth = 20;

  for (let i = 1; i < 65; i++) {
    pieces.push(<Piece n={i} width={pieceWidth} />);
  }

  return (
    <>
      <Box bg="brown" color="#ddd" textAlign="center">
        <Heading as="h1" lineHeight="64px">
          Chess Online
        </Heading>
      </Box>

      <Flex justifyContent="center" py={10} bg="#bbb">
        <Board pcWidth={pieceWidth}>{pieces}</Board>
      </Flex>
    </>
  );
};

export default Home;
