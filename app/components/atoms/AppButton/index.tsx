import {Text, TouchableOpacity} from "react-native";
import React from "react";

interface AppButton {
    onPress: (arg?: any) => any;
    title:string;
    variant:string;
    textStyle: string;
}

const AppButton:React.FC<AppButton> = ({onPress, title, variant = 'primary', textStyle = 'default', IconLeft, IconRight,className, ...props}) => (
    <TouchableOpacity className={className}>
        {IconLeft && <IconLeft/>}
        <Text>{title}</Text>
        {IconRight && <IconRight/>}
    </TouchableOpacity>
);

export default AppButton;
