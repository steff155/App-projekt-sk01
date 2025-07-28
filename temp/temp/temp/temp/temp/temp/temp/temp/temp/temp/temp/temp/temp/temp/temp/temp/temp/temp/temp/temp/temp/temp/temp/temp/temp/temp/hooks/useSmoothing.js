import { useState, useEffect, useRef } from 'react';

const useSmoothing = (targetValue, smoothingFactor = 0.025) => {
  const target = useRef(targetValue);
  const [smoothedValue, setSmoothedValue] = useState(targetValue);

  useEffect(() => {
    target.current = targetValue;
  }, [targetValue]);

  useEffect(() => {
    const smoothMotion = () => {
      setSmoothedValue((prevSmoothedValue) => prevSmoothedValue + smoothingFactor * (target.current - prevSmoothedValue));
    };

    const intervalId = setInterval(smoothMotion, 16); 

    return () => clearInterval(intervalId); 
  }, [smoothingFactor]);

  return smoothedValue;
};

export default useSmoothing;
