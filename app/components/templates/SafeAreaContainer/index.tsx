import { SafeAreaView } from "react-native-safe-area-context";
import React, { PropsWithChildren } from "react";

const SafeAreaContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <SafeAreaView
      className={"flex h-full w-full items-center justify-between bg-white"}
    >
      {children}
    </SafeAreaView>
  );
};

export default SafeAreaContainer;
