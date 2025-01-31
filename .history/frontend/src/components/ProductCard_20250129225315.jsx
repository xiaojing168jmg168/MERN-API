import { Box, Image, Heading, Text } from "@chakra-ui/react";

const ProductCard = (product) => {
  <Box
    shadow="lg"
    rounded="lg"
    overflow="hidden"
    transition="all 0.3s"
    _hover={{ transform: "translateY(-5px)", shadow: "x1" }}
  >
    <Image
      src={product.image}
      alt={product.name}
      h={48}
      w="full"
      objectFit="cover"
    />
    <Box p={4}>
      <Heading as="h3" size="md" mb={2}>
        {product.name}
      </Heading>

      <Text fontWeight="bold" fontSize="x1" color={textColor} mb={4}>
        ${product.price}
      </Text>
    </Box>
  </Box>;
};

export default ProductCard;
