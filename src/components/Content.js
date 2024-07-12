import React from "react";
import styled from "styled-components";
import AdPane from "./contents/AdPane";
import imgAd1 from "../img/ad1.png";
import imgAd2 from "../img/ad2.png";
import AdPaneBackground1 from "./contents/AdPaneBackground1";
import AdPaneBackground2 from "./contents/AdPaneBackground2";
import ControlRentOptions from "./contents/ControlRentOptions";
import { ArrowUpDown } from "lucide-react";

const ContentWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.colorBackground};
  width: 1440px;
  height: 2120px;
  padding: 32px 64px;
`;
const ContentArea = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: lightgrey;
  width: 100%;
  height: 1900px;
`;

const AdContainer = styled.div`
  display: flex;
  position: relative;
  width: 640px;
  height: 360px;
  overflow: hidden;
`;
const AdArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const ControlArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const SwitchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background: ${(props) => props.color};
  border-radius: 10px;
  cursor: pointer;
`;
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

  return (
    <ContentWrapper colorBackground={colorBackground}>
      <ContentArea>
        <AdArea>
          <AdContainer>
            <AdPane init={initAdPane1} />
            <AdPaneBackground1 />
          </AdContainer>
          <AdContainer>
            <AdPane init={initAdPane2} />
            <AdPaneBackground2 />
          </AdContainer>
        </AdArea>

        <ControlArea>
          <ControlRentOptions
            name="Pick - Up"
            colorPrimary={colorPrimary}
            colorSecondary={colorSecondary}
          />
          <SwitchWrapper color={colorPrimary}>
            <ArrowUpDown color="white" size="24" />
          </SwitchWrapper>
          <ControlRentOptions
            name="Drop - Off"
            colorPrimary="#54A6FF"
            colorSecondary={colorSecondary}
          />
        </ControlArea>
      </ContentArea>
    </ContentWrapper>
  );
};

export default Content;
