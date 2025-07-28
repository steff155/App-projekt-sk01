import React, { useState, useEffect, useRef } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import useAccelerometer from '../hooks/useAccelerometer';
import useSmoothing from '../hooks/useSmoothing'; 


const limitToCircle = (x, y, radius) => {
  const distance = Math.sqrt(x * x + y * y);
  if (distance <= radius) {
  
    return { x, y };
  } else {
    
    const angle = Math.atan2(y, x);
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  }
};

const LevelIndicatorRound = () => {
  const { angles } = useAccelerometer();
  const smoothedX = useSmoothing(angles.y * -5);
  const smoothedY = useSmoothing(angles.x * -5);

  const maxRadius = 70; 
  const limitedPosition = limitToCircle(smoothedX, smoothedY, maxRadius);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/indicator_round.png')} style={styles.backgroundImage} />
      <Image
        source={require('../assets/bubble_round.png')}
        style={[
          styles.indicatorImage,
          { transform: [{ translateX: limitedPosition.x }, { translateY: limitedPosition.y }] }
        ]}
      />
      <Image source={require('../assets/circle.png')} style={styles.circleImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  circleImage: {
    position: 'absolute',
    width: '30%',
    height: '30%',
    borderRadius: 100,
  },
  indicatorImage: {
    position: 'absolute',
    width: 50,
    height: 50,
  },
});

export default LevelIndicatorRound;
