import { Text, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import useOnboarding from "@/app/(auth)/hooks/useOnboarding";
import { onboardingSlides } from "@/app/constants";
import SliderDot from "@/app/components/atoms/SliderDot";
import AppButton from "@/app/components/atoms/AppButton";
import SliderCard from "@/app/components/molecules/SliderCard";
import React from "react";
import SafeAreaContainer from "@/app/components/templates/SafeAreaContainer";

const Onboarding = () => {
  const { onSkipPress, swiperRef, onSwipeMove, buttonTitle, onNextPress } =
    useOnboarding();
  return (
    <SafeAreaContainer>
      <TouchableOpacity
        className={"flex w-full justify-end items-end p-5"}
        onPress={onSkipPress}
      >
        <Text className={"text-black text-md font-JakartaBold"}>Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<SliderDot color={"#e2e8f0"} />}
        activeDot={<SliderDot color={"#0286FF"} />}
        onIndexChanged={onSwipeMove}
      >
        {onboardingSlides.map(({ title, id, description, image }) => (
          <React.Fragment key={id}>
            <SliderCard
              id={id}
              image={image}
              title={title}
              description={description}
            />
          </React.Fragment>
        ))}
      </Swiper>
      <AppButton
        className={"w-11/12 mt-10"}
        title={buttonTitle}
        onPress={onNextPress}
      />
    </SafeAreaContainer>
  );
};

export default Onboarding;
