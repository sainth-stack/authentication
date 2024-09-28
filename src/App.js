import './App.css';
import Login from './pages/auth/Login';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/auth/Register';

//boostrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const clientId =
    "573823221354-d175srri1ta9un581atkp7b9qenst32u.apps.googleusercontent.com";
  return (

    <>
      <GoogleOAuthProvider clientId={clientId}>
        <Routes >
          <Route path="/login" element={<Login />} />
          <Route path='/' element={<Register />} />
        </Routes>

      </GoogleOAuthProvider>


    </>
  );
}

export default App;
