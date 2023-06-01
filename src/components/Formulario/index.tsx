import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Formulario = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para lidar com o envio do formulário
  };

  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box border="2px solid red" w="500px" p="10px" rounded={10}>
        <Text>Formulário de inscrição</Text>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <VStack spacing={4} flex="1">
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" required />
            </FormControl>
            <FormControl>
              <FormLabel>Senha</FormLabel>
              <Input type="password" required />
            </FormControl>
          </VStack>
          <Box mt="auto" display="flex" justifyContent="center">
            <Button colorScheme="teal" type="submit">
              Enviar
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Formulario;
