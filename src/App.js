import React from "react";
import Header from "./components/Header";
import styled from "styled-components";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Home = () => {
  const initHeader = {
    title: "KernelRent",
    colorPrimary: "#3563e9",
    colorSecondary: "#596780",
    colorBorder: "#e8eef5",
  };
  const initContent = {
    colorPrimary: "#3563E9",
    colorSecondary: "#54A6FF",
    colorTertiary: "#90A3BF",
    colorBackground: "#F6F7F9",
  };
  const initFooter = {
    colorPrimary: "#3563E9",
    colorSecondary: "rgba(19,19,19,0.6)",
  };

  return (
    <AppContainer>
      <Header init={initHeader} />
      <Content init={initContent} />
      <Footer init={initFooter} />
    </AppContainer>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
