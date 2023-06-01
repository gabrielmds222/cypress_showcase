import { ChakraProvider } from "@chakra-ui/react";
import Formulario from "./components/Formulario";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <Formulario />
    </ChakraProvider>
  );
}

export default App;
