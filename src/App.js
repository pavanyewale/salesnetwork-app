import React, {useEffect, useState} from 'react';
import {Tabs} from './components/tabs/tabs';
import SplashScreen from './screens/Splash/SplashScreen';
import LoginScreen from './screens/login/login';
import CompleteProfileScreen from './screens/login/completeProfile';
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  if (isLoading) {
    return <SplashScreen />;
  }
  if (!isLoggedIn) {
    return <CompleteProfileScreen />;
    // <LoginScreen setLogin={setLoggedIn} />;
  }
  return <Tabs />;
};

export default App;
