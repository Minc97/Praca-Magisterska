import React from "react";
import { TextField } from "@material-ui/core";

const RenderTextField = ({ label, input, meta: { touched, invalid, error }, ...custom }: any) => (
  <TextField
    variant="outlined" fullWidth
    label={label}
    error={touched && invalid}
    helperText={touched && error}
    {...custom}
    {...input}
  />
);

export default RenderTextField
