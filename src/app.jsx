import React from 'react';
import Header from './component/header/header';

const App = () => {
  const loginState = true;
  return <Header loginState={loginState} />;
};

export default App;
