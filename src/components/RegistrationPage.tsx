import React from "react";
import { Container } from "@material-ui/core";
import SignUpFirstStep from "./SignUpFirstStep";
import SignUpSecondStep from "./SignUpSecondStep";

export const RegistrationPage = () => {
  return (
    <Container maxWidth="lg">
      {/*<SignUpFirstStep />*/}
      <SignUpSecondStep />
    </Container>
  );
};
