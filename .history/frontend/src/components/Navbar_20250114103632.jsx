import {Container, Flex, HStack, Text, Button} from '@chakra-ui/react';
import {Link} from "react-router-dom";
import { FiPlusSquare } from "react-icons/fi";


const Navbar = () => {

   
  return (
    <Container maxW={"1140px"} px={4}>
        <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
            base:"column",
            sm:"row"
        }}
        >
            <Text 
            fontSize={{ base: "22", sm: "28" }}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            background={'linear-gradient(90deg, rgba(43,108,176,1) 10%, rgba(66,153,225,1) 90%)'}
            bgClip={"text"}
            >
                <Link to={"/"}>Product Store 🛒</Link>

            </Text>
            <HStack spacing={2} alignItems={"center"}>
                <Link to={"/create"}>
                <Button  background={'linear-gradient(90deg, rgba(43,108,176,1) 10%, rgba(66,153,225,1) 90%)'}>
                <FiPlusSquare fontSize={20}/>
                </Button>
                </Link>
           
             
            </HStack>

        </Flex>

    </Container>
  )
}
console.log("navbar");
export default Navbar;

