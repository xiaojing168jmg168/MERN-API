import { Button } from "@chakra-ui/react";


// function App() {
//   return (
//     <>
//      <Button>Hello</Button>
//     </>
//   )
  
// }
// console.log('hello');
// export default App

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  // Custom theme configuration (if any)
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* Your application components */}
      <>
     <Button>Hello</Button>
    </>
    </ChakraProvider>
  );
}

export default App;
