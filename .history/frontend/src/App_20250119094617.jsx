import {Box} from "@chakra-ui/react";
import { Route, Routes } from 'react-router-dom';
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import TestPage from "./pages/TestPage";



function App() {

  return (
    <Box minH={"100vh"}>
     <Navbar /> 
     <Routes>

      <Route path="/" element={ <HomePage />} />
      <Route path="/create" element = {<CreatePage />} />

<Route path="/test" element = {<TestPage />} />
     </Routes>

    </Box>
  )
  
}
console.log('hello');
export default App

