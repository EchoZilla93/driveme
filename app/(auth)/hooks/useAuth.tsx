import { useState } from "react";

const DEFAULT_FORM_STATE = {
  name: "",
  email: "",
  password: "",
};

const useAuth = () => {
  const [form, setForm] = useState(DEFAULT_FORM_STATE);

  const onFormChange = (
    value: string,
    field: "name" | "email" | "password",
  ) => {
    setForm({ ...form, [field]: value });
  };

  const onSignUp = async () => {};

  return { form, onFormChange, onSignUp };
};

export default useAuth;
