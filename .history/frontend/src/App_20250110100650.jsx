import {Box, Button} from "@chakra-ui/react";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Box minH={"100vh"}>
     {/* <Navbar /> */}
     <Routes>
      <Route path="/" element={ <HomePage />} />
      <Route path="/" element = {<CreatePage />} />

     </Routes>

    </Box>
  )
  
}
console.log('hello');
export default App

