import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'


import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@chakra-ui/react/preset";
import { BrowserRouter} from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
   
       <ChakraProvider value={system} >
         {/* 👇 Here's the script */}
         <Toaster />
        
         <App />
       </ChakraProvider>
       
    </BrowserRouter>
 </React.StrictMode>
)


