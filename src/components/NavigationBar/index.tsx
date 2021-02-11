import React from 'react';

import { useScreenProperties } from '../../hooks/ScreenPropertiesContext';
import Desktop from './Desktop';
import Mobile from './Mobile';

const NavigationBar: React.FC = () => {
  const { isMobile } = useScreenProperties();

  return <>{isMobile ? <Mobile /> : <Desktop />}</>;
};

export default NavigationBar;
