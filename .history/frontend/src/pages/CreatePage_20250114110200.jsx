
import {container, VStack, Heading} from '@chakra-ui/react';
import {useState} from 'react'

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name:"",
    price:"",
    image:"",
  });
  return (
   
    <container  maxW={"container.sm"}>

    <VStack 
    spacing={8}>
      <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb ={8}>
        Create New Product
      </Heading>

    </VStack>
   </container>
  )
}

export default CreatePage