import React from 'react';

// import SignIn from './pages/SignIn/SignIn.layout';
import SignUp from './pages/SignUp/SignUp.layout';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    {/* <SignIn /> */}
    <SignUp />
    <GlobalStyle />
  </>
);

export default App;