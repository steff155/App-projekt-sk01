import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import useAccelerometer from '../hooks/useAccelerometer';
import useSmoothing from '../hooks/useSmoothing';


const limitToHorizontal = (x, minX, maxX) => {
  return Math.min(Math.max(x, minX), maxX);
};

const LevelIndicatorShort = () => {
  const { angles } = useAccelerometer();
  const smoothedX = useSmoothing(angles.y * -5); 

  
  const minX = -88; 
  const maxX = 89;  
  const limitedX = limitToHorizontal(smoothedX, minX, maxX);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/indicator_short.png')} style={styles.backgroundImage} />
      <Image
        source={require('../assets/bubble_short.png')}
        style={[
          styles.indicatorImage,
          { transform: [{ translateX: limitedX }] }
        ]}
      />
      <Image source={require('../assets/square_short.png')} style={styles.squareImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 300,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },

  backgroundImage: {
    position: 'absolute',
    width: undefined,
    height: '100%',
    aspectRatio: 910 / 212,
  },
  
  squareImage: {
    position: 'absolute',
    width: undefined,
    height: '100%',
    aspectRatio: 380 / 212,
  },

  indicatorImage: {
    position: 'absolute',
    width: undefined,
    height: '90%',
    aspectRatio: 337 / 176,
  },
});

export default LevelIndicatorShort;
