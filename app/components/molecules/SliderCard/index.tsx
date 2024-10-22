import { Image, Text, View } from "react-native";
import React from "react";

interface SliderCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
}

const SliderCard: React.FC<SliderCardProps> = ({
  id,
  image,
  title,
  description,
}) => (
  <View key={id} className={"flex items-center justify-center p-5"}>
    <Image
      source={image}
      className={"w-full h-[300px]"}
      resizeMode={"contain"}
    />
    <View className={"flex flex-row items-center justify-center w-full mt-10"}>
      <Text className={"text-black text-3xl font-bold mx-10 text-center"}>
        {title}
      </Text>
    </View>
    <Text
      className={
        "text-md font-JakartaBold text-center text-[#858585] mx-10 mt-3"
      }
    >
      {description}
    </Text>
  </View>
);

export default SliderCard;
