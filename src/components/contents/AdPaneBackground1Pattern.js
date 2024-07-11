import React from "react";
import styled from "styled-components";

const Pattern = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 999px;
  border: 20px solid ${(props) => props.color};
  left: calc(50% - ${(props) => props.size} / 2);
  top: calc(50% - ${(props) => props.size} / 2);
`;

const AdPaneBackground1Pattern = ({ size, color }) => {
  return <Pattern size={size} color={color} />;
};

export default AdPaneBackground1Pattern;
