import { Text, View } from "react-native";
import InputField from "@/app/components/atoms/InputField";
import { icons } from "@/app/constants";
import AppButton from "@/app/components/atoms/AppButton";
import OAuthButton from "@/app/components/atoms/OAuthButton";
import { Link } from "expo-router";
import { AUTH_ROUTES } from "@/app/common/routes";
import React from "react";

interface AuthFormProps {
  form: any;
  onFormChange: (
    value: string,
    fieldName: "name" | "email" | "password",
  ) => void;
  onAuth: () => void;
  mode: "signIn" | "signUp";
}
const AuthForm: React.FC<AuthFormProps> = ({
  form,
  onFormChange,
  onAuth,
  mode,
}) => {
  const isSignUp = mode === "signUp";
  return (
    <View className={"p-5"}>
      {isSignUp && (
        <InputField
          label={"Name"}
          placeholder={"Enter your name"}
          icon={icons.person}
          value={form.name}
          onChangeText={(value: string) => onFormChange(value, "name")}
        />
      )}
      <InputField
        label={"Email"}
        placeholder={"Enter your email"}
        icon={icons.email}
        value={form.email}
        onChangeText={(value: string) => onFormChange(value, "email")}
      />
      <InputField
        label={"Password"}
        placeholder={"Enter your password"}
        icon={icons.lock}
        secureTextEntry
        value={form.password}
        onChangeText={(value: string) => onFormChange(value, "password")}
      />
      <AppButton
        title={isSignUp ? "Sign Up" : "Sign In"}
        onPress={onAuth}
        className={"mt-6"}
      />
      <OAuthButton />
      <Link
        href={isSignUp ? AUTH_ROUTES.SIGN_IN : AUTH_ROUTES.SIGN_UP}
        className={"flex text-lg text-center text-general-200 mt-10"}
      >
        <Text>
          {isSignUp ? "Already have an account?" : "Dont have an account? "}{" "}
        </Text>
        <Text className={"text-primary-500"}>
          {isSignUp ? "Log In" : "Create account"}
        </Text>
      </Link>
    </View>
  );
};

export default AuthForm;
