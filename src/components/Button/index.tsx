import React from "react";

const Botao = () => {
  const handleClick = () => {
    console.log("foi apertado");
  };

  return <button onClick={handleClick}>Clique aqui</button>;
};

export default Botao;
