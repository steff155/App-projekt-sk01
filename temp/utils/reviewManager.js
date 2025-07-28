import * as StoreReview from 'expo-store-review';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const trackSuccessfulUse = async () => {
  const hasReviewed = await AsyncStorage.getItem('hasReviewed');
  if (hasReviewed) return;

  const count = parseInt(await AsyncStorage.getItem('successCount')) || 0;
  const newCount = count + 1;
  await AsyncStorage.setItem('successCount', newCount.toString());

  if (newCount >= 3 && await StoreReview.isAvailableAsync()) {
    await StoreReview.requestReview();
    await AsyncStorage.setItem('hasReviewed', 'true');
  }
};
