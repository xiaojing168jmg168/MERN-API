import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import theme from './theme'

import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@chakra-ui/react/preset";
import { BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
       <ChakraProvider value={system}>
         {/* 👇 Here's the script */}
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        
         <App />
       </ChakraProvider>
    </BrowserRouter>
 </React.StrictMode>
)

