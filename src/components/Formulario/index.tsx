import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Formulario = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email && !senha) {
      alert("Por favor, preencha o email e a senha.");
    } else if (!email) {
      alert("Por favor, preencha o email.");
    } else if (!senha) {
      alert("Por favor, preencha a senha.");
    } else {
      alert("parabens");
    }
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
              <Input
                type="email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Senha</FormLabel>
              <Input
                type="password"
                onChange={(event) => setSenha(event.target.value)}
              />
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
