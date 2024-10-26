import { View } from "react-native";

const SliderDot = ({ color }: { color: string }) => (
  <View
    style={{ backgroundColor: color }}
    className={`w-[8px] h-[8px] mx-1 rounded-full`}
  />
);

export default SliderDot;
