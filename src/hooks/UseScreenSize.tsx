import { useState, useEffect } from 'react';

export default function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  console.log(screenSize.width);
  const screen = {
    isMobile: screenSize.width <= 640,
    isTablet: screenSize.width <= 1024,
    isLargeMonitor: screenSize.width > 1836,
  };
  return screen;
}
