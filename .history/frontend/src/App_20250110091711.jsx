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

import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      {/* Your application components */}
      <>
     <Button>Hello</Button>
    </>
    </ChakraProvider>
  );
}

export default App;
