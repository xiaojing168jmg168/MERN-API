import { Box, Button, Container, Heading, Input, useToast,VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";




const CreatePage = () => {
	const [newProduct, setNewProduct] = useState({
		name: "",
		price: "",
		image: "",
	});
	const CustomToast = () => {
		const toast = useToast();
		// types are: "success", "info", "warning", "error"
	
		const addToast = (newRes) => {
			toast({
				description:newRes.message, 
				status: newRes.type, 
				position:"top-right", 
				isClosable: true, 
				duration: 5000,
				variant: 'left-accent' 
			})
		}
		
		return { addToast };
	}

	const { addToast } = CustomToast();
	const { createProduct } = useProductStore();

	const handleAddProduct = async () => {
		const { success, message } = await createProduct(newProduct);
		if (!success) {
			addToast({
				title: "Error",
				description: message,
				status: "error",
				isClosable: true,
			});
		} else {
			addToast({
				title: "Success",
				description: message,
				status: "success",
				isClosable: true,
			});
		}
		setNewProduct({ name: "", price: "", image: "" });
	};

	return (
		<Container maxW={"container.sm"}>
			<VStack spacing={8}>
				<Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
					Create New Product
				</Heading>

				<Box w={"full"} background={'linear-gradient(90deg, rgb(229, 231, 234) 10%, rgb(240, 243, 245) 90%)'} p={6} rounded={"lg"} shadow={"md"}>
					<VStack spacing={4}>
						<Input
							placeholder='Product Name'
							name='name'
							value={newProduct.name}
							onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
						/>
						<Input
							placeholder='Price'
							name='price'
							type='number'
							value={newProduct.price}
							onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
						/>
						<Input
							placeholder='Image URL'
							name='image'
							value={newProduct.image}
							onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
						/>

						<Button background={'linear-gradient(0deg, rgb(76, 91, 159) 10%, rgb(77, 162, 235) 90%)'} onClick={handleAddProduct} w='full'>
							Add Product
						</Button>
					</VStack>
				</Box>
			</VStack>
		</Container>
	);
};
export default CreatePage;