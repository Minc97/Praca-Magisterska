import React from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "./layout/theme";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <h1>Praca Magisterska </h1>
      </ThemeProvider>
    </>
  );
}

export default App;
