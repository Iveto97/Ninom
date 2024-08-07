import { useId, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import About from "./components/about/About";
import Destination from "./components/destination/Destination";
import CreateDestination from "./components/destination-create/CreateDestination";
import Contact from "./components/contact/Contact";
import Info from "./components/more-info/Info";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import DestinationDetails from "./components/destination-details/DestinationDetails";
import { AuthContextProvider } from './context/authContext'
import Logout from "./components/logout/Logout";

export default function App() {

  const [authState, setAuthState] = useState({});

  const changeAuthState = (state) => {
    localStorage.setItem('accessToken', state.accessToken);

	setAuthState(state);
  }

  const contextData = {
    useId: authState._id,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState,
  }


  return (
    <AuthContextProvider>
      <Header />

      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/about" element={<About />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/destination/:destinationId/details" element={<DestinationDetails />} />
        <Route path="/create" element={<CreateDestination />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      
      <Info />
      <Footer />
    </AuthContextProvider>
  );
}
