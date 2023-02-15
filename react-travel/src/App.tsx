import React from 'react';
import styles from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import SignInPage from './pages/signIn/SignInPage';
import RegisterPage from './pages/register/RegisterPage';
import DetailPage from './pages/detail/DetailPage';
import { HomePage } from './pages';

function App() {
  return (
    <div className={styles.App}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signIn" element={ <SignInPage />} />
          <Route path="/register" element={ <RegisterPage />} />
          <Route path="/detail/:touristRouteId" element={ <DetailPage />} />
          <Route path="*" element={ <h1> 404 not found !</h1>} />
        </Routes>
    </div>
  );
}

export default App;