import {router} from "expo-router";
import {AUTH_ROUTES} from "@/app/common/routes";
import {useRef, useState} from "react";
import Swiper from "react-native-swiper";

const useOnboarding = () => {
    const swiperRef = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const onSkipPress = () => router.replace(AUTH_ROUTES.SIGN_UP);

    const onSwipeMove = (index:number) => setActiveIndex(index);

    return {onSkipPress, swiperRef, onSwipeMove}
};

export default useOnboarding;
