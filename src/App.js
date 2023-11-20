import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from "./contexts/auth";

// Importando componentes, Header e Footer
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Importando Páginas (Routes)
import HomePage from "./routes/HomePage";
import Saúde from "./routes/Saúde";
import Insights from "./routes/Insights";
import SobrePage from "./routes/SobrePage";
import ContactPage from "./routes/ContactPage";
import ErrorPage from "./routes/ErrorPage"
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";

// Importando CSS
import "./App.css"; // 
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <AuthProvider>
      <>
      <Navbar />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/Saúde" element={<Saúde />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
      <Footer />
      </>
    </AuthProvider>  
  )
}

export default App;
