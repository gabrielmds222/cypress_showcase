import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

const Formulario = () => {
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     // Coloque aqui a lógica para lidar com o envio do formulário
  //   };

  return (
    <Box
      maxWidth="400px"
      mx="auto"
      mt={10}
      p={4}
      borderWidth={1}
      borderRadius="md"
    >
      <form>
        <FormControl>
          <FormLabel>E-mail</FormLabel>
          <Input type="email" name="email" required />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Senha</FormLabel>
          <Input type="password" name="password" required />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          Enviar
        </Button>
      </form>
    </Box>
  );
};

export default Formulario;
