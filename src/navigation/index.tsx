import React from 'react';
import useAuth from 'hooks/useAuth';
import PrivateScreen from './PrivateScreen';
import PublicScreens from './PublicScreen';

const RootNavigation = () => {
  const {user} = useAuth();

  return user ? <PrivateScreen /> : <PublicScreens />;
};

export default RootNavigation;
