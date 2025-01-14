
import {container, VStack} from '@chakra-ui/react';
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

    </VStack>
   </container>
  )
}

export default CreatePage