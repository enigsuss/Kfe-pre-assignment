import React from "react";
import styled from "styled-components";
import AdPane from "./contents/AdPane";
import imgAd1 from "../img/ad1.png";
import imgAd2 from "../img/ad2.png";
import AdPaneBackground1 from "./contents/AdPaneBackground1";
import AdPaneBackground2 from "./contents/AdPaneBackground2";

const Content = (props) => {
  const { colorBackground, colorPrimary, colorSecondary } = props.init;

  const initAdPane1 = {
    head: "The Best Platform for Car Rental",
    desc: "Ease of doing a car rental safely and reliably. Of course at a low price.",
    img: imgAd1,
    colorPrimary: "#54A6FF",
    colorSecondary: "#3563E9",
  };
  const initAdPane2 = {
    head: "Easy way to rent a car at a low price",
    desc: "Providing cheap car rental services and safe and comfortable facilities.",
    img: imgAd2,
    colorPrimary: "#3563E9",
    colorSecondary: "#54A6FF",
  };

  const ContentWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colorBackground};
    width: 1440px;
    height: 2120px;
    padding: 32px 64px;
  `;
  const ContentMain = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    background-color: lightgrey;
    width: 100%;
    height: 764px;
  `;
  const ContentSub = styled.div`
    background-color: lightblue;
    width: 100%;
    height: 1356px;
  `;
  const AdPaneContainer = styled.div`
    display: flex;
    position: relative;
    width: 640px;
    height: 360px;
    overflow: hidden;
  `;

  return (
    <ContentWrapper>
      <ContentMain>
        <AdPaneContainer>
          <AdPane init={initAdPane1} />
          <AdPaneBackground1 />
        </AdPaneContainer>
        <AdPaneContainer>
          <AdPane init={initAdPane2} />
          <AdPaneBackground2 />
        </AdPaneContainer>
      </ContentMain>
      <ContentSub></ContentSub>
    </ContentWrapper>
  );
};

export default Content;
