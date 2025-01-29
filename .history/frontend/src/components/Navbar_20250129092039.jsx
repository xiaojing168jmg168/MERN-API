import { Container, Flex, HStack, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { useColorMode, useColorModeValue } from "./ui/color-mode";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container
      maxW={"1140px"}
      px={4}
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient="linear(to-r,rgb(1, 28, 110),rgb(48, 136, 237))"
          bgClip="text"
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button
              background={
                "linear-gradient(90deg, rgba(43,108,176,1) 10%, rgba(66,153,225,1) 90%)"
              }
            >
              <CiSquarePlus fontSize={20} />
            </Button>
          </Link>
          <button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
          </button>
        </HStack>
      </Flex>
    </Container>
  );
};
console.log("navbar");
export default Navbar;
