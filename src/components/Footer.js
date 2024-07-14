import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  position: relative;
  width: 1440px;
  height: 480px;
`;
const Logo = styled.p`
  margin: 0;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 15px;
  color: ${(props) => props.color};
  cursor: pointer;
`;
const LogoContainer = styled.div`
  position: absolute;
  width: 292px;
  height: 108px;
  left: 60px;
  top: 80px;
`;
const LetterBox = styled.div`
  font-size: 16px;
  color: ${(props) => props.color};
  font-weight: 500;
  padding: 15px 0;
`;
const LetterBox2 = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
const AboutContainer = styled.div`
  position: absolute;
  left: 804px;
  top: 80px;
`;
const CommunityContainer = styled.div`
  position: absolute;
  left: 1016px;
  top: 80px;
`;
const SocialsContainer = styled.div`
  position: absolute;
  left: 1228px;
  top: 80px;
`;
const GroupName = styled.div`
  font-size: 20px;
  width: 152px;
  height: 32px;
  margin-bottom: 15px;
  font-weight: 600;
`;
const Hr = styled.div`
  position: absolute;
  width: 1320px;
  top: 360px;
  left: calc(50% - 1320px / 2);
  border-bottom: 1px solid rgba(19, 19, 19, 0.16);
`;
const CopyrightWrapper = styled.div`
  position: absolute;
  top: 396px;
  left: 60px;
`;
const PrivacyWrapper = styled.div`
  position: absolute;
  top: 396px;
  left: 1032px;
`;
const TermsWrapper = styled.div`
  position: absolute;
  top: 396px;
  left: 1236px;
`;

const Footer = (props) => {
  const { colorPrimary, colorSecondary } = props.init;
  return (
    <FooterWrapper>
      <LogoContainer>
        <Logo color={colorPrimary}>KernelRent</Logo>
        <LetterBox color={colorSecondary}>
          <span>
            Our vision is to provide convenience and help increase your sales
            business.
          </span>
        </LetterBox>
      </LogoContainer>

      <AboutContainer>
        <GroupName>
          <span>About</span>
        </GroupName>
        <LetterBox color={colorSecondary}>
          <span>How it works</span>
        </LetterBox>
        <LetterBox color={colorSecondary}>
          <span>Featured</span>
        </LetterBox>
        <LetterBox color={colorSecondary}>
          <span>Partnership</span>
        </LetterBox>
        <LetterBox color={colorSecondary}>
          <span>Bussiness Relation</span>
        </LetterBox>
      </AboutContainer>

      <CommunityContainer>
        <GroupName>
          <span>Community</span>
        </GroupName>
        <LetterBox color={colorSecondary}>
          <span>Events</span>
        </LetterBox>
        <LetterBox color={colorSecondary}>
          <span>Blog</span>
        </LetterBox>
        <LetterBox color={colorSecondary}>
          <span>Podcast</span>
        </LetterBox>
        <LetterBox color={colorSecondary}>
          <span>Invite a friend</span>
        </LetterBox>
      </CommunityContainer>

      <SocialsContainer>
        <GroupName>
          <span>Socials</span>
        </GroupName>
        <LetterBox color={colorSecondary}>
          <span>Discord</span>
        </LetterBox>
        <LetterBox color={colorSecondary}>
          <span>Instagram</span>
        </LetterBox>
        <LetterBox color={colorSecondary}>
          <span>Twitter</span>
        </LetterBox>
        <LetterBox color={colorSecondary}>
          <span>Facebook</span>
        </LetterBox>
      </SocialsContainer>

      <Hr />
      <CopyrightWrapper>
        <LetterBox2>
          <span>©2024 KernelRent. All rights reserved</span>
        </LetterBox2>
      </CopyrightWrapper>
      <PrivacyWrapper>
        <LetterBox2>
          <span>Privacy & Policy</span>
        </LetterBox2>
      </PrivacyWrapper>
      <TermsWrapper>
        <LetterBox2>
          <span>Terms & Condition</span>
        </LetterBox2>
      </TermsWrapper>
    </FooterWrapper>
  );
};

export default Footer;
