import "./App.css";
import axios from "axios";
import React from "react";

//Custom component(s)
import Header from "./components/header/header";
import AppDrawer from "./components/appdrawer/appdrawer";
import Footer from "./components/footer/footer";

const App = () => {
  React.useEffect(() => {
    axios.defaults.baseURL = "https://dev.cloud.hydroware.com";
    // axios.defaults.baseURL = "https://cloud.hydroware.com";
  });
  return (
    <>
      <Header />
      <AppDrawer />
      <Footer />
    </>
  );
};

export default App;
