import React from "react";
import styled from "styled-components";
import AdPaneBackground1Pattern from "./AdPaneBackground1Pattern";

const AdPaneBackground1 = () => {
  const patternColor = "rgba(255,255,255,0.06)";

  const PatternContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 775px;
    height: 775px;
    left: -163px;
    top: -80px;
  `;

  return (
    <PatternContainer>
      <AdPaneBackground1Pattern size="80px" color={patternColor} />
      <AdPaneBackground1Pattern size="200px" color={patternColor} />
      <AdPaneBackground1Pattern size="315px" color={patternColor} />
      <AdPaneBackground1Pattern size="430px" color={patternColor} />
      <AdPaneBackground1Pattern size="545px" color={patternColor} />
      <AdPaneBackground1Pattern size="660px" color={patternColor} />
      <AdPaneBackground1Pattern size="775px" color={patternColor} />
    </PatternContainer>
  );
};

export default AdPaneBackground1;
