import React from "react";
import styled from "styled-components";
import AdPaneBackground2Pattern from "./AdPaneBackground2Pattern";

const AdPaneBackground2 = () => {
  const PatternContainer = styled.div`
    //z-index: 1;
    position: absolute;
    width: 640px;
    height: 360px;
  `;

  return (
    <PatternContainer>
      <AdPaneBackground2Pattern top="0px" left="-25px" />
      <AdPaneBackground2Pattern top="0px" left="65px" />
      <AdPaneBackground2Pattern top="0px" left="155px" />
      <AdPaneBackground2Pattern top="0px" left="240px" />
      <AdPaneBackground2Pattern top="0px" left="330px" />
      <AdPaneBackground2Pattern top="0px" left="420px" />
      <AdPaneBackground2Pattern top="0px" left="510px" />
      <AdPaneBackground2Pattern top="0px" left="600px" />

      <AdPaneBackground2Pattern top="120px" left="20px" />
      <AdPaneBackground2Pattern top="120px" left="110px" />
      <AdPaneBackground2Pattern top="120px" left="200px" />
      <AdPaneBackground2Pattern top="120px" left="290px" />
      <AdPaneBackground2Pattern top="120px" left="380px" />
      <AdPaneBackground2Pattern top="120px" left="470px" />
      <AdPaneBackground2Pattern top="120px" left="560px" />
      <AdPaneBackground2Pattern top="120px" left="650px" />

      <AdPaneBackground2Pattern top="240px" left="-25px" />
      <AdPaneBackground2Pattern top="240px" left="65px" />
      <AdPaneBackground2Pattern top="240px" left="155px" />
      <AdPaneBackground2Pattern top="240px" left="240px" />
      <AdPaneBackground2Pattern top="240px" left="330px" />
      <AdPaneBackground2Pattern top="240px" left="420px" />
      <AdPaneBackground2Pattern top="240px" left="510px" />
      <AdPaneBackground2Pattern top="240px" left="600px" />
    </PatternContainer>
  );
};

export default AdPaneBackground2;
