import { useRef } from "react";
import { Animated } from "react-native";

export function useAnimated() {
  const rotateValue = useRef(new Animated.Value(0)).current;
  const rotation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });


  return {
    rotateValue,
    rotation
  }

}