import { Flex } from "@chakra-ui/react";

const Piece = ({ n, width }: { n: number; width: number }) => {
  return (
    <Flex
      bg="yellow"
      w={width}
      h={width}
      justifyContent="center"
      align="center"
      fontWeight={800}
      fontSize={32}
      _hover={{ bg: "green" }}
      transition="0.5s all"
      cursor="pointer"
    >
      {n}
    </Flex>
  );
};

export default Piece;
