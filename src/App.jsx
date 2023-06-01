import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Formulario from "./components/Formulario";

function App() {
  return (
    <ChakraProvider>
      <Formulario />
    </ChakraProvider>
  );
}

export default App;
