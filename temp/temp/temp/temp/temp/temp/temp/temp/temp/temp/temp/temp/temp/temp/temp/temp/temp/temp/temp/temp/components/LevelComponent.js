import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useAccelerometer from '../hooks/useAccelerometer';

const LevelComponentTop = () => {
  const { angles } = useAccelerometer();

  const roundToHalf = (value) => Math.round(value * 10) / 10;
  const displayAngleX = roundToHalf(angles.x).toFixed(1);
  const displayAngleY = roundToHalf(angles.y).toFixed(1);

  return (
    <View style={styles.topContainer}>
      <View style={styles.row}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>X:</Text>
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.value}>{displayAngleY}°</Text>
        </View>
        <Text style={styles.spacer}>; </Text>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Y:</Text>
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.value}>{displayAngleX}°</Text>
        </View>
      </View>
    </View>
  );
};

const LevelComponentBottom = () => {
  const { angles } = useAccelerometer();

  const roundToHalf = (value) => Math.round(value * 10) / 10;
  const displayAngleX = roundToHalf(angles.x).toFixed(1);
  const displayAngleY = roundToHalf(angles.y).toFixed(1);

  return (
    <View style={styles.bottomContainer}>
      <View style={styles.row}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>X:</Text>
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.value}>{displayAngleY}°</Text>
        </View>
        <Text style={styles.spacer}></Text>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Y:</Text>
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.value}>{displayAngleX}°</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    position: 'relative',
    top: -10, 
    left: 25, 
    width: 270,
    paddingLeft: 30,
    paddingTop: 0,
    paddingBottom: 0,
  },
  bottomContainer: {
    position: 'relative',
    top: 80, 
    left: 0, 
    width: 270,
    paddingLeft: 30,
    paddingTop: 0,
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelContainer: {
    width: 25,
  },
  valueContainer: {
    width: 70,
    alignItems: 'flex-end',
  },
  label: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#D6EC53',
  },
  value: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#D6EC53',
  },
  spacer: {
    width: 10, 
  },
});

export { LevelComponentTop, LevelComponentBottom };
