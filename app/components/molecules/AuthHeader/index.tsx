import { Image, Text, View } from "react-native";
import { images } from "@/app/constants";

const AuthHeader = ({ title }: { title: string }) => (
  <View className={"relative w-full h-[250px]"}>
    <Image source={images.signUpCar} className={"z-0 w-full h-[250px]"} />
    <Text
      className={
        "text-2xl text-black font-JakartaBold absolute bottom-5 left-5"
      }
    >
      {title}
    </Text>
  </View>
);

export default AuthHeader;
