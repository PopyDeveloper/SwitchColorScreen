import { useCallback } from "react";
import { Animated, Pressable, StyleSheet } from "react-native";
import { useAnimated } from "./hooks/useAnimated";
import { useColors } from "./hooks/useColors";

export default function Index() {

  const { color, switchColor } = useColors();
  const { rotateValue, rotation } = useAnimated()

  const handlePress = useCallback(() => {
    rotateValue.setValue(0);
    switchColor();
    Animated.spring(rotateValue, {
      toValue: 1,
      friction: 4,     
      tension: 100,    
      useNativeDriver: true, 
    }).start();
  }, []);

  return (
    <Pressable
      onPress={handlePress}
      style={{
        backgroundColor: color,
        ...styles.container
      }}
    >
      <Animated.Text style={[styles.text,{
        transform: [{ rotate: rotation }]
      }
      ]}>Hello there</Animated.Text>
    </Pressable>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    color: "#000",
  },
})