import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      {/* Your app components */}
    </ChakraProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
