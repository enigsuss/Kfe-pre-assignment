import React from "react";
import styled from "styled-components";

const AdPane = (props) => {
  const { head, desc, img, colorPrimary, colorSecondary } = props.init;

  const AdContainer = styled.div`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 24px;
    width: 640px;
    height: 360px;
    background-color: ${colorPrimary};
    border-radius: 10px;
  `;
  const ContentWrapper = styled.div`
    z-index: 1;
  `;
  const Headline = styled.p`
    line-height: 1.5;
    margin: 0;
    width: 284px;
    font-size: 32px;
    font-weight: 600;
    color: white;
  `;
  const Description = styled.p`
    line-height: 1.5;
    width: 284px;
    font-size: 16px;
    font-weight: 500;
    color: white;
  `;
  const Button = styled.button`
    width: 120px;
    height: 44px;
    border: none;
    border-radius: 4px;
    margin-top: 3px;
    cursor: pointer;
    color: white;
    font-size: 16px;
    font-weight: 600;
    background-color: ${colorSecondary};
  `;
  const Image = styled.img`
    box-sizing: border-box;
    position: absolute;
    left: 137px;
    top: 234px;
    width: 406px;
    height: 116px;
    padding: 10px 30px;
  `;

  return (
    <AdContainer>
      <ContentWrapper>
        <Headline>{head}</Headline>
        <Description>{desc}</Description>
        <Button>Rental Car</Button>
        <Image src={img}></Image>
      </ContentWrapper>
    </AdContainer>
  );
};

export default AdPane;
