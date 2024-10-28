import { Image, Text, View } from "react-native";
import AppButton from "@/app/components/atoms/AppButton";
import { icons } from "@/app/constants";

const GoogleLogo = () => (
  <Image
    resizeMode={"contain"}
    source={icons.google}
    className={"w-5 h-5 mr-5"}
  />
);

const OAuthButton = () => {
  const onOauth = async () => {};
  return (
    <View>
      <View
        className={"flex flex-row justify-center items-center mt-4 gap-x-3"}
      >
        <View className={"flex-1 h-[1px] bg-general-100"} />
        <Text className={"text-lg"}>Or</Text>
        <View className={"flex-1 h-[1px] bg-general-100"} />
      </View>
      <AppButton
        onPress={onOauth}
        textVariant={"primary"}
        bgVariant={"outline"}
        title={"Login with Google"}
        className={"mt-5 w-full shadow-none"}
        IconLeft={() => <GoogleLogo />}
      />
    </View>
  );
};

export default OAuthButton;
