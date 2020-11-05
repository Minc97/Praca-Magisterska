import { REGISTER_USER } from "./userReducer";
import MD5 from "../components/utils/md5";

export const registerUser = (formValues) => {
  const protectedFormValues = { ...formValues };
  protectedFormValues.password = MD5(protectedFormValues.password);
  return {
    type: REGISTER_USER,
    payload: protectedFormValues,
  };
};
