import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SavedValuesComponent = ({ currentAngles }) => {
  const [savedValues, setSavedValues] = useState([]);

  const saveCurrentValues = () => {
    const currentValues = { x: currentAngles.x.toFixed(1), y: currentAngles.y.toFixed(1) };
    setSavedValues(prevValues => {
      const newValues = [currentValues, ...prevValues];
      return newValues.slice(0, 4);
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={saveCurrentValues}>
        <Image source={require('../assets/save_icon.png')} style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.valuesContainer}>
        {savedValues.map((value, index) => (
          <Text key={index} style={styles.savedValue}>
            X: {value.x}° Y: {value.y}°
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width:200,
    height:200,
    bottom: 20, 
    alignItems: 'center',

  },
  buttonContainer: {
    position: 'relative',
    top: 0, 
    left: 0,
    transform: [{ rotate: '180deg' }],
  },

  icon: {
    width: 50,
    height: 50,
  },

  valuesContainer: {
    position: 'absolute',
    top: 70, 
    right: 58,
    width:150,
    height:150,
    alignItems: 'left',
    transform: [{ rotate: '90deg' }],
   
  },
  savedValue: {
    color: '#D6EC53',
    fontSize: 16,
   
   
    
  },
});

export default SavedValuesComponent;
