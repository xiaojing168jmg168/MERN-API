// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx'

// import { ChakraProvider } from "@chakra-ui/react";
// import { system } from "@chakra-ui/react/preset";
// import { BrowserRouter} from "react-router-dom";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//        <ChakraProvider value={system}>
//          <App />
//        </ChakraProvider>
//     </BrowserRouter>
//  </React.StrictMode>
// )


import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
