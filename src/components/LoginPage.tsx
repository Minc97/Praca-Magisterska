import React from "react";
import { Container } from "@material-ui/core";
import { LoginForm } from "./LoginForm";

export const LoginPage = () => {
  return (
    <Container maxWidth="lg">
      <LoginForm />
    </Container>
  );
};
