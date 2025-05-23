import { useCallback, useRef, useState } from "react";
import { Animated, Pressable, StyleSheet } from "react-native";

export default function Index() {
  const [color, setColor] = useState("rgb(255, 255, 255)");

  const switchColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  const rotateValue = useRef(new Animated.Value(0)).current;
  const rotation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

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