import { ScrollView, View } from "react-native";
import useAuth from "@/app/(auth)/hooks/useAuth";
import AuthHeader from "@/app/components/molecules/AuthHeader";
import AuthForm from "@/app/components/organisms/AuthForm";

const SignInPage = () => {
  const { form, onFormChange, onSignUp } = useAuth();
  return (
    <ScrollView className={"flex-1 bg-white"}>
      <View className="flex-1 bg-white">
        <AuthHeader title={"Welcome"} />
        <AuthForm
          form={form}
          onFormChange={onFormChange}
          onAuth={onSignUp}
          mode={"signIn"}
        />
      </View>
    </ScrollView>
  );
};

export default SignInPage;
