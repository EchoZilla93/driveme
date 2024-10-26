import { Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  getBgVariantStyles,
  getTextColorVariant,
} from "@/app/common/helpers/styles";
import { ButtonProps } from "@/app/types/type";

const AppButton: React.FC<ButtonProps> = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}) => (
  <TouchableOpacity
    onPress={onPress}
    {...props}
    className={`w-full rounded-full p-3 flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${getBgVariantStyles(bgVariant)} ${className}`}
  >
    {IconLeft && <IconLeft />}
    <Text className={`text-lg font-bold ${getTextColorVariant(textVariant)}`}>
      {title}
    </Text>
    {IconRight && <IconRight />}
  </TouchableOpacity>
);

export default AppButton;
