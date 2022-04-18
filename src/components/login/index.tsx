import React, { useState } from 'react';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

const Auth: React.FC = () => {
  const [isLoginPage, setIsLoginPage] = useState<boolean>(true);

  const switchPage = () => {
    setIsLoginPage((prev) => !prev);
  };

  if (isLoginPage) {
    return <LogIn switchPage={switchPage} />;
  } else {
    return <SignUp switchPage={switchPage} />;
  }
};

export default Auth;
