import React, { useState } from "react";
import styled from "styled-components";
import { Heart, Fuel, ShipWheel, UsersRound } from "lucide-react";
import imgAd1 from "../../resources/adCar1.png";

const CatalogWrapper = styled.div`
  box-sizing: border-box;
  width: 304px;
  height: 388px;
  padding: 24px;
  border-radius: 10px;
  background-color: white;
`;
const CatalogContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
const CarNameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;
const CarName = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
const LikeContainer = styled.div`
  margin-left: auto;
  margin-top: 3px;
`;
const LikeWrapper = styled.div``;
const LikedWrapper = styled.div``;

const CarClass = styled.span`
  color: ${(props) => props.color};
  font-size: 14px;
  font-weight: 700;
`;
const CarImageWrapper = styled.div`
  position: absolute;
  top: 80px;
  left: calc((100% - 250px) / 2);
`;
const CarImage = styled.img`
  width: 250px;
`;

const CarInfoContainer = styled.div`
  position: absolute;
  top: 248px;
  display: flex;
  justify-content: space-between;
  width: 256px;
  height: 24px;
`;
const CarInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CarInfoSpan = styled.span`
  margin-left: 5px;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.color};
`;
const RentWrapper = styled.div`
  position: absolute;
  top: 296px;
`;
const RentContainer = styled.div`
  display: flex;
  width: 256px;
  justify-content: space-between;
  align-items: center;
`;
const PriceContainer = styled.div``;
const Price = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
const Day = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.color};
`;
const RentButton = styled.button`
  border: none;
  color: white;
  background-color: ${(props) => props.color};
  border-radius: 4px;
  font-size: 16px;
  width: 116px;
  height: 44px;
`;
const Catalog = ({ colorPrimary, colorSecondary }) => {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked(!liked);
  };
  return (
    <CatalogWrapper>
      <CatalogContainer>
        <CarNameContainer>
          <CarName>Koenigsegg</CarName>
          <LikeContainer onClick={toggleLike}>
            {liked ? (
              <LikedWrapper>
                <Heart fill="#ED3F3F" color="#ED3F3F" size="20" />
              </LikedWrapper>
            ) : (
              <LikeWrapper>
                <Heart fill="transparent" color={colorSecondary} size="20" />
              </LikeWrapper>
            )}
          </LikeContainer>
        </CarNameContainer>
        <CarClass color={colorSecondary}>Sport</CarClass>
        <CarImageWrapper>
          <CarImage
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWXQ6FRPTDhJPRzdjoMZV9oW6OiDpyW3KahA&s"
            }
            alt="carImage"
          />
        </CarImageWrapper>
        <CarInfoContainer>
          <CarInfoWrapper>
            <Fuel color={colorSecondary} />
            <CarInfoSpan color={colorSecondary}>90L</CarInfoSpan>
          </CarInfoWrapper>
          <CarInfoWrapper>
            <ShipWheel color={colorSecondary} />
            <CarInfoSpan color={colorSecondary}>Manual</CarInfoSpan>
          </CarInfoWrapper>
          <CarInfoWrapper>
            <UsersRound color={colorSecondary} />
            <CarInfoSpan color={colorSecondary}>2 people</CarInfoSpan>
          </CarInfoWrapper>
        </CarInfoContainer>
        <RentWrapper>
          <RentContainer>
            <PriceContainer>
              <Price>$00.00/</Price>
              <Day color={colorSecondary}> day</Day>
            </PriceContainer>
            <RentButton color={colorPrimary}>Rent Now</RentButton>
          </RentContainer>
        </RentWrapper>
      </CatalogContainer>
    </CatalogWrapper>
  );
};

export default Catalog;
