import React from 'react';

import { ScreenPropertiesProvider } from './ScreenPropertiesContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <>
      <ScreenPropertiesProvider>{children}</ScreenPropertiesProvider>
    </>
  );
};

export default AppProvider;
