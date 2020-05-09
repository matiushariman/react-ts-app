import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import HomePage from 'Pages/HomePage';
import SecondaryPage from 'Pages/SecondaryPage';
import GlobalStyle from 'global-styles';

function App(): React.ReactElement {
  return (
    <>
      <nav>
        <Link to="/">HomePage</Link>
        <Link to="secondary">SecondaryPage</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/secondary" element={<SecondaryPage />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
