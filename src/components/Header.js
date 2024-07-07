import React from 'react';
import { Heart, Bell, Settings, Settings2, Search, CircleUserRound } from 'lucide-react';
import styled from "styled-components";


const Header = (props) => {

    const {title, colorPrimary, colorSecondary, colorBorder} = props.init;

    const HeaderWrapper = styled.div`
      display: flex;
      width: 1440px;  
      height: 124px;
      align-items: center;
    `;
    const HeaderTitle = styled.p`
      margin-left: 60px;
      margin-right: 60px;
      font-size: 2.3rem;
      font-weight: bold;
      color: ${colorPrimary};
    `;
    const ProfilePane = styled.div`
      display: flex;
      justify-content: space-between;
      width: 236px;
      height: 44px;
      margin-left: auto;
      margin-right: 60px;
    `;
    const ProfileBorder = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 44px;
      height: 44px;
      border: 1px solid ${colorBorder};
      border-radius: 100px;
    `;
    const InputWrapper = styled.div`
      display: flex;
      align-items: center;
      width: 492px;
      height: 44px;
      border: 1px solid ${colorBorder};
      border-radius: 100px;
      padding: 0 16px 0 16px;
    `;
    const Input = styled.input`
      border: none;
      width: 100%;
      height: 80%;
      font-size: 1.2rem;
      color: ${colorSecondary};
      margin: 0 10px 0 10px;
      &::placeholder {
        color: ${colorSecondary};  
      }
      &:focus {
        outline: none;
      }
    `;


    return (
        <HeaderWrapper>
            <HeaderTitle>{title}</HeaderTitle>
            <InputWrapper>
                <Search color={colorSecondary} size={35}/>
                <Input placeholder="Search something here"/>
                <Settings2 color={colorSecondary} size={35}/>
            </InputWrapper>
            <ProfilePane>
                <ProfileBorder><Heart color={colorSecondary} fill={colorSecondary}/></ProfileBorder>
                <ProfileBorder><Bell color={colorSecondary} fill={colorSecondary}/></ProfileBorder>
                <ProfileBorder><Settings color={colorSecondary} fill={colorSecondary}/></ProfileBorder>
                <CircleUserRound color={colorSecondary} size={46}/>
            </ProfilePane>
        </HeaderWrapper>
    );
};

export default Header;