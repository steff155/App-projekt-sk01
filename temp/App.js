import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { trackSuccessfulUse } from './utils/reviewManager';

export default function App() {

  useEffect(() => {
    const runTest = async () => {
      await AsyncStorage.removeItem('hasReviewed');
      await AsyncStorage.removeItem('successCount');
      await trackSuccessfulUse();
    };

    runTest();
  }, []);

  return (
    <View style={styles.container}>
      <HomeScreen />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

