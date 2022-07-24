import { Flex } from "@chakra-ui/react";

const Board = ({ children, pcWidth }: { children: JSX.Element[], pcWidth: number }) => {
  return <Flex bg="orangered" gap={2} w={pcWidth * 36} p={2} wrap="wrap" outline="4px solid black" align="center" justifyContent="center">{children}</Flex>;
};

export default Board;
