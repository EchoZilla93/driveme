import { useState, useCallback } from "react";
import { useSignIn, useSignUp } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { ROOT_ROUTES } from "@/app/common/routes";

const DEFAULT_FORM_STATE = {
  name: "",
  email: "",
  password: "",
};

const useAuth = () => {
  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: "",
  });
  const [code, setCode] = useState("");
  const [form, setForm] = useState(DEFAULT_FORM_STATE);
  const signUp = useSignUp();
  const signIn = useSignIn();
  const router = useRouter();

  const onFormChange = (
    value: string,
    field: "name" | "email" | "password",
  ) => {
    setForm({ ...form, [field]: value });
  };

  const onSignUp = async () => {
    if (!signUp.isLoaded) {
      return;
    }

    try {
      await signUp.signUp.create({
        emailAddress: form.email,
        password: form.password,
      });

      await signUp.signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      setVerification({ ...verification, state: "pending" });
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const onPressVerify = async () => {
    if (!signUp.isLoaded) {
      return
    }

    try {
      const completeSignUp = await signUp.signUp.attemptEmailAddressVerification({
        code:verification.code,
      })

      if (completeSignUp.status === 'complete') {
        await signUp.setActive({ session: completeSignUp.createdSessionId })
        router.replace(ROOT_ROUTES.HOME)
      } else {
        console.error(JSON.stringify(completeSignUp, null, 2))
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2))
    }
  }


  const onSignIn = useCallback(async () => {
    if (!signIn.isLoaded) {
      return;
    }

    try {
      const signInAttempt = await signIn.signIn.create({
        identifier: form.email,
        password: form.password,
      });

      if (signInAttempt.status === "complete") {
        await signIn.setActive({ session: signInAttempt.createdSessionId });
        setVerification({...verification,state: 'success'})
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2));
        setVerification({...verification,state: 'fail', error: 'Verification failed'})
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
      setVerification({...verification,state: 'fail', error: err.errors[0].longMessage});
    }
  }, [signIn.isLoaded, form.email, form.password]);

  return { form, onFormChange, onSignUp, onSignIn, onPressVerify };
};

export default useAuth;
