import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import useAccelerometer from '../hooks/useAccelerometer';
import useSmoothing from '../hooks/useSmoothing';

const limitToHorizontal = (y, minY, maxY) => {
  return Math.min(Math.max(y, minY), maxY);
};

const LevelIndicatorLong = () => {
  const { angles } = useAccelerometer();
  const smoothedY = useSmoothing(angles.x * -5); 

  
  const minY = -197; 
  const maxY = 197;  
  const limitedY = limitToHorizontal(smoothedY, minY, maxY);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/indicator_long.png')} style={styles.backgroundImage} />
      <Image
        source={require('../assets/bubble_long.png')}
        style={[
          styles.indicatorImage,
          { transform: [{ translateY: limitedY }] } 
        ]}
      />
      <Image source={require('../assets/square_long.png')} style={styles.squareImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 70,
    height: 550,
    alignItems: 'center',
    justifyContent: 'center',
  },

  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: undefined,
    aspectRatio: 212 / 1573,
  },

  squareImage: {
    position: 'absolute',
    width: '100%',
    height: undefined,
    aspectRatio: 212 / 380,
    
  },
  indicatorImage: {
    position: 'absolute',
    width: '90%',
    height: undefined,
    aspectRatio: 176 / 337,
  },
});

export default LevelIndicatorLong;
