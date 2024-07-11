import React from "react";
import styled from "styled-components";

const Pattern = styled.div`
  width: 50px;
  height: 120px;
  position: absolute;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  background-color: rgba(255, 255, 255, 0.06);

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0; /* 삼각형을 사각형의 왼쪽에 배치 */
    width: 0;
    height: 0;
    border-top: 60px solid transparent;
    border-bottom: 60px solid transparent;
    border-left: 25px solid #3563e9;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 50px; /* 삼각형을 사각형의 왼쪽에 배치 */
    width: 0;
    height: 0;
    border-top: 60px solid transparent;
    border-bottom: 60px solid transparent;
    border-left: 25px solid rgba(255, 255, 255, 0.06);
  }
`;
const AdPaneBackground2Pattern = ({ top, left }) => {
  return <Pattern top={top} left={left}></Pattern>;
};

export default AdPaneBackground2Pattern;
