import React, {
  createContext,
  FunctionComponent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

export interface ScreenPropertiesContextProps {
  isMobile: boolean;
  windowHeight: number;
  windowWidth: number;
}

export const ScreenPropertiesContext = createContext<ScreenPropertiesContextProps>(
  {
    isMobile: false,
    windowHeight: 0,
    windowWidth: 0,
  },
);

const ScreenPropertiesProvider: FunctionComponent = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const checkMobileView = useCallback(() => {
    setWindowWidth(window.innerWidth);
    const width = window.innerWidth;

    const currentState = width <= 1024;

    if (currentState && !isMobile) {
      setWindowHeight(window.innerHeight);
      setIsMobile(true);
    } else {
      setWindowHeight(window.innerHeight);
      setIsMobile(false);
    }
  }, [isMobile]);

  useEffect(() => {
    checkMobileView();
    window.addEventListener('resize', () => checkMobileView());
  }, []);

  return (
    <ScreenPropertiesContext.Provider
      value={{
        isMobile,
        windowWidth,
        windowHeight,
      }}
    >
      {children}
    </ScreenPropertiesContext.Provider>
  );
};

function useScreenProperties(): ScreenPropertiesContextProps {
  const context = useContext(ScreenPropertiesContext);

  if (!context) {
    throw new Error('UseAuth must be used within an AuthProvider');
  }

  return context;
}

export { ScreenPropertiesProvider, useScreenProperties };
