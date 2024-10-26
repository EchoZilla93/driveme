import { router } from "expo-router";
import { AUTH_ROUTES } from "@/app/common/routes";
import { useRef, useState } from "react";
import Swiper from "react-native-swiper";
import { onboardingSlides } from "@/app/constants";

const useOnboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const isLastSlide = activeIndex === onboardingSlides.length - 1;
  const buttonTitle = isLastSlide ? "Get started" : "next";

  const onSkipPress = () => router.replace(AUTH_ROUTES.SIGN_UP);

  const onSwipeMove = (index: number) => setActiveIndex(index);

  const onNextPress = () => {
    if (swiperRef.current) {
      isLastSlide
        ? router.replace(AUTH_ROUTES.SIGN_UP)
        : swiperRef.current.scrollBy(1);
    }
  };

  return { onSkipPress, swiperRef, onSwipeMove, buttonTitle, onNextPress };
};

export default useOnboarding;
