import React, { useEffect } from "react";
import { Route, Routes, Navigate  } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import { useAuthStore } from "./store/useAuthStore";
import PageLoader from "./components/common/PageLoader";
import { Toaster } from 'react-hot-toast';

const App = () => {
  const { checkAuth, isCheckingAuth, authUser } = useAuthStore();
  
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <PageLoader />;
  

  return (
    <div>
      <Routes>
        <Route path="/" element={ authUser ? <Navigate to="/chat" replace /> : <HomePage />}/>
        <Route path="/chat" element={authUser ? <ChatPage /> : <Navigate to={"/login"} />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to={"/chat"} />}/>
        <Route path="/signup" element={!authUser ? <SignupPage /> : <Navigate to={"/chat"} />}/>
      </Routes>
      <Toaster position="top-right" />
    </div>
  );
};

export default App;