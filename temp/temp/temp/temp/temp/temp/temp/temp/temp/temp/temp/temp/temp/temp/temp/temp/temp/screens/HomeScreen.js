import React from "react";
import { View, StyleSheet } from "react-native";
import { LevelComponentTop, LevelComponentBottom } from "../components/LevelComponent";
import LevelIndicatorRound from "../components/LevelIndicatorRound";
import LevelIndicatorLong from "../components/LevelIndicatorLong";
import LevelIndicatorShort from "../components/LevelIndicatorShort";
import useAccelerometer from '../hooks/useAccelerometer';
import SavedValuesComponent from '../components/SavedValuesComponent';

const HomeScreen = () => {
  const { angles } = useAccelerometer();

  return (
    <View style={styles.app}>
      <View style={styles.container}>
        <LevelIndicatorShort style={styles.shortIndicator} />
        <View style={styles.bottomSection}>
          <LevelIndicatorLong style={styles.longIndicator} />
          <View style={styles.rightSide}>
            <LevelComponentTop style={styles.levelComponent} />
            <LevelIndicatorRound style={styles.roundIndicator} />
            <View style={styles.rotatedContainer}>
              <LevelComponentBottom style={styles.levelComponent} />
            </View>
            <SavedValuesComponent currentAngles={angles} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    width: "100%",
    backgroundColor: "black",
    alignItems: "center",
  },

  container: {
    paddingTop: 70,
    width: 300,
    margin: "auto",
    alignItems: "center", 
  },

  bottomSection: {
    flexDirection: "row", 
    width: "100%", 
    paddingTop: 10,
  },

  levelComponent: {},

  roundIndicator: {},

  longIndicator: {},

  rotatedContainer: {
    transform: [{ rotate: "90deg" }],
    paddingLeft: 30,
    paddingBottom: 20,
  },

  rightSide: {
    flex: 1, 
    alignItems: "flex-end", 
  },
});

export default HomeScreen;
