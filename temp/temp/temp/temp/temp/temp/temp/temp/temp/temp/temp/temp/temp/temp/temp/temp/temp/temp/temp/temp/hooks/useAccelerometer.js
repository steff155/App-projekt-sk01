import { useState, useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';

const useAccelerometer = () => {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });
  const [angles, setAngles] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    Accelerometer.setUpdateInterval(150);

    const subscription = Accelerometer.addListener(accelerometerData => {
      setData(accelerometerData);

      let x = accelerometerData.x;
      let y = accelerometerData.y;
      let z = accelerometerData.z;

      let angleX = Math.atan2(y, Math.sqrt(x * x + z * z)) * (180 / Math.PI);
      let angleY = Math.atan2(-x, Math.sqrt(y * y + z * z)) * (180 / Math.PI);
      let angleZ = Math.atan2(Math.sqrt(x * x + y * y), z) * (180 / Math.PI);

      setAngles({ x: angleX, y: angleY, z: angleZ });
    });

    return () => subscription && subscription.remove();
  }, []);

  return { data, angles };
};

export default useAccelerometer;
