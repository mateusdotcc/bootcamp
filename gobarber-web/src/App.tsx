import React from 'react';

import SignIn from './pages/SignIn/SignIn.layout';
// import SignUp from './pages/SignUp/SignUp.layout';

import AuthContext from './context/AuthContext';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Mateus' }}>
      <SignIn />
    </AuthContext.Provider>

    <GlobalStyle />
  </>
);

export default App;
