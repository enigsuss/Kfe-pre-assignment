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
  margin-right: 32px;
  &:nth-child(4n) {
    margin-right: 0;
  }
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
const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const PriceContainer = styled.div`
  width: 128px;
`;
const Price = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
const PriceOriginal = styled.span`
  margin-top: 5px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: line-through;
  color: ${(props) => props.color};
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
  cursor: pointer;
`;
const Catalog = ({ colorPrimary, colorSecondary, data }) => {
  const {
    name,
    type,
    image,
    fuelCapacity,
    gearType,
    seats,
    isLiked,
    salePrice,
    originalPrice,
  } = data;
  const [liked, setLiked] = useState(isLiked);

  const toggleLike = () => {
    setLiked(!liked);
  };
  return (
    <CatalogWrapper>
      <CatalogContainer>
        <CarNameContainer>
          <CarName>{name}</CarName>
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
        <CarClass color={colorSecondary}>{type}</CarClass>
        <CarImageWrapper>
          <CarImage src={image} alt="carImage" />
        </CarImageWrapper>
        <CarInfoContainer>
          <CarInfoWrapper>
            <Fuel color={colorSecondary} />
            <CarInfoSpan color={colorSecondary}>{fuelCapacity}L</CarInfoSpan>
          </CarInfoWrapper>
          <CarInfoWrapper>
            <ShipWheel color={colorSecondary} />
            <CarInfoSpan color={colorSecondary}>{gearType}</CarInfoSpan>
          </CarInfoWrapper>
          <CarInfoWrapper>
            <UsersRound color={colorSecondary} />
            <CarInfoSpan color={colorSecondary}>{seats} people</CarInfoSpan>
          </CarInfoWrapper>
        </CarInfoContainer>
        <RentWrapper>
          <RentContainer>
            <PriceWrapper>
              {salePrice ? (
                <PriceContainer>
                  <Price>${salePrice}.00/</Price>
                  <Day color={colorSecondary}> day</Day>
                </PriceContainer>
              ) : (
                <PriceContainer>
                  <Price>${originalPrice}.00/</Price>
                  <Day color={colorSecondary}> day</Day>
                </PriceContainer>
              )}
              {salePrice && (
                <PriceOriginal color={colorSecondary}>
                  ${originalPrice}.00
                </PriceOriginal>
              )}
            </PriceWrapper>
            <RentButton color={colorPrimary}>Rent Now</RentButton>
          </RentContainer>
        </RentWrapper>
      </CatalogContainer>
    </CatalogWrapper>
  );
};

export default Catalog;
