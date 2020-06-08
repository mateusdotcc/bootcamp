import React from 'react';

import SignIn from './pages/SignIn/SignIn.layout';
// import SignUp from './pages/SignUp/SignUp.layout';

import AppProvider from './hooks';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
