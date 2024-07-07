import React from 'react';
import Header from "./components/Header";
import styled from "styled-components";
import Content from "./components/Content";
import Footer from "./components/Footer";



const App = () => {

    const AppContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
      
      width: 100%;
      height: 100%;
    `;

    const headerProps = {
        title: 'KernelRent',
        colorPrimary: '#4062e1',
        colorSecondary: '#5c677e',
        colorBorder: '#e8eef5',
    };
    const contentProps = {
        colorPrimary: '#4062e1',
        colorSecondary: '#94a2bd',
        colorBackground: '#f6f7f9',
    };

    return (
        <AppContainer>
          <Header init={headerProps}></Header>
            <Content init={contentProps}/>
            <Footer/>
        </AppContainer>
    );
};

export default App;