import React from "react";
import styled from "styled-components";
import AdPane from "./contents/AdPane";
import imgAd1 from "../resources/adCar1.png";
import imgAd2 from "../resources/adCar2.png";
import AdPaneBackground1 from "./contents/AdPaneBackground1";
import AdPaneBackground2 from "./contents/AdPaneBackground2";
import ControlRentOptions from "./contents/ControlRentOptions";
import { ArrowUpDown } from "lucide-react";
import Catalog from "./contents/Catalog";

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
const PopularCarArea = styled.div`
  display: flex;
  flex-direction: column;
`;
const GroupLabel = styled.span`
  width: 132px;
  height: 44px;
  text-align: center;
  line-height: 2.8;
  font-weight: 500;
  margin-bottom: 20px;
  color: ${(props) => props.color};
`;
const CarContainer = styled.div`
  display: flex;
  width: 100%;
  background: gray;
`;

const Content = (props) => {
  const { colorBackground, colorPrimary, colorSecondary, colorTertiary } =
    props.init;

  const initAdPane1 = {
    head: "The Best Platform for Car Rental",
    desc: "Ease of doing a car rental safely and reliably. Of course at a low price.",
    img: imgAd1,
    colorPrimary: colorSecondary,
    colorSecondary: colorPrimary,
  };
  const initAdPane2 = {
    head: "Easy way to rent a car at a low price",
    desc: "Providing cheap car rental services and safe and comfortable facilities.",
    img: imgAd2,
    colorPrimary: colorPrimary,
    colorSecondary: colorSecondary,
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
            colorSecondary={colorTertiary}
          />
          <SwitchWrapper color={colorPrimary}>
            <ArrowUpDown color="white" size="24" />
          </SwitchWrapper>
          <ControlRentOptions
            name="Drop - Off"
            colorPrimary={colorSecondary}
            colorSecondary={colorTertiary}
          />
        </ControlArea>

        <PopularCarArea>
          <GroupLabel color={colorTertiary}>Popular Car</GroupLabel>
          <CarContainer>
            <Catalog
              colorPrimary={colorPrimary}
              colorSecondary={colorTertiary}
            />
          </CarContainer>
        </PopularCarArea>
      </ContentArea>
    </ContentWrapper>
  );
};

export default Content;
