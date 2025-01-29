import { Container, VStack, Text, Link } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Container maxW="container.x1" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, rgb(135, 7, 137), rgb(237, 48, 130))"}
          bgClip={"text"}
          textAlign={"center"}
        >
          Current Product
        </Text>
        <Text
          fontSize="x1"
          textAlign={"center"}
          fontWeight="bold"
          color="gray.500"
        >
          No products found🥵{" "}
          <Link to={"/create"}>
            <Text
              as="span"
              color="red.900"
              _hover={{ textDecoration: "underline" }}
            >
              Create a product
            </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  );
};

export default HomePage;
