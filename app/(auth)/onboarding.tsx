import {Image, Text, TouchableOpacity, View} from "react-native";
import Swiper from 'react-native-swiper';
import {SafeAreaView} from "react-native-safe-area-context";
import useOnboarding from "@/app/(auth)/hooks/useOnboarding";
import {onboardingSlides} from "@/app/constants";
import SliderDot from "@/app/components/atoms/SliderDot";

const Onboarding = () => {
    const {onSkipPress, swiperRef, onSwipeMove} = useOnboarding();
    return (
        <SafeAreaView className={'flex h-full w-full items-center justify-between bg-white'}>
          <TouchableOpacity className={'flex w-full justify-end items-end p-5'} onPress={onSkipPress}>
              <Text className={'text-black text-md font-JakartaBold'}>Skip</Text>
          </TouchableOpacity>
            <Swiper
                ref={swiperRef}
                loop={false}
                dot={<SliderDot color={'#e2e8f0'}/>}
                activeDot={<SliderDot color={'#0286FF'}/>}
                onIndexChanged={onSwipeMove}
            >
                {
                    onboardingSlides.map(({title,id,description, image}) => (
                        <View key={id} className={'flex items-center justify-center p-5'}>
                            <Image source={image} className={'w-full h-[300px]'} resizeMode={'contain'}/>
                            <View className={'flex flex-row items-center justify-center w-full mt-10'}>
                                <Text className={'text-black text-3xl font-bold mx-10 text-center'}>
                                    {title}
                                </Text>
                            </View>
                            <Text className={'text-md font-JakartaBold text-center text-[#858585] mx-10 mt-3'}>
                                {description}
                            </Text>
                        </View>
                    ))
                }
            </Swiper>
        </SafeAreaView>
    )
};

export default Onboarding
