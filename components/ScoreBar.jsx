import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import Svg, { Rect, Defs, LinearGradient, Stop } from 'react-native-svg';

const ScoreBar = ({ score }) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(score / 10, { duration: 1000 });
  }, [score]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: `${progress.value * 100}%`,
    };
  });

  return (
    <View style={styles.container}>
      <Svg height="30" width="100%">
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor="red" stopOpacity="1" />
            <Stop offset="50%" stopColor="yellow" stopOpacity="1" />
            <Stop offset="100%" stopColor="green" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="30" fill="url(#grad)" />
      </Svg>
      <View style={StyleSheet.absoluteFill}>
        <Animated.View style={[styles.overlay, animatedStyle]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 30,
    borderRadius: 15,
    overflow: 'hidden',
    marginVertical: 10,
  },
  overlay: {
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default ScoreBar;
