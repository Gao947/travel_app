import React from 'react';
import styles from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import SignInPage from './pages/signIn/SignInPage';
import RegisterPage from './pages/register/RegisterPage';
import DetailPage from './pages/detail/DetailPage';
import { HomePage, ShoppingCartPage } from './pages';
import { SearchPage } from './pages';
import  { Navigate } from "react-router-dom";
import { useSelector } from './redux/hooks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getShoppingCart } from './redux/shoppingCart/slice';
import { PlaceOrderPage } from './pages';

const PrivateRoute = ({ children }) => {
  const jwt = useSelector((s) => s.user.token);
  return jwt ? children : <Navigate to="/signIn" />;
};

function App() {
  const jwt = useSelector((s) => s.user.token);
  const dispatch = useDispatch();
useEffect(()=>{
  if(jwt) {
    dispatch(getShoppingCart(jwt));
  }
}, [jwt]);

  return (
    <div className={styles.App}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signIn" element={ <SignInPage />} />
          <Route path="/register" element={ <RegisterPage />} />
          <Route path="/detail/:touristRouteId" element={ <DetailPage />} />
          <Route path="/search/:keywords?" element={<SearchPage />} />
          <Route path="*" element={ <h1> 404 not found !</h1>} />
          <Route 
          //isAuthenticated={jwt!== null}
          path="/shoppingCart" 
          element={
          <PrivateRoute>
            <ShoppingCartPage />
          </PrivateRoute>
          } />
          <Route 
          path="/placeOrder" 
          element={
          <PrivateRoute>
            <PlaceOrderPage />
          </PrivateRoute>
          } />
        </Routes>
    </div>
  );
}

export default App;