'use client';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface OverlayContextProps {
  isActive: boolean;
  showOverlay: () => void;
  hideOverlay: () => void;
  //   toggleOverlay: () => void;
}

const OverlayContext = createContext<OverlayContextProps | undefined>(undefined);

export const useOverlay = () => {
  const context = useContext(OverlayContext);
  if (!context) throw new Error('useOverlay must be used within a OverlayContext Provider');
  return context;
};

export const OverlayProvider = ({ children }: { children: ReactNode }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      console.log('hi');
      document.getElementById('globalOverlay')?.classList.add('active');
    } else {
      document.getElementById('globalOverlay')?.classList.remove('active');
    }
    return () => document.getElementById('globalOverlay')?.classList.remove('active');
  }, [isActive]);

  const showOverlay = () => setIsActive(true);
  const hideOverlay = () => setIsActive(false);
  // const toggleOverlay = () => setIsActive(prev=>!prev);

  return (
    <OverlayContext.Provider value={{ isActive, showOverlay, hideOverlay }}>
      {children}
    </OverlayContext.Provider>
  );
};
