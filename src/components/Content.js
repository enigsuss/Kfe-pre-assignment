import React from 'react';
import styled from "styled-components";


const Content = (props) => {

    const {colorBackground, colorPrimary, colorSecondary} = props.init;

    const ContentWrapper = styled.div`
      background-color: ${colorBackground};
      width: 1440px;
      height: 2120px;
    `;

    return (
        <ContentWrapper>

        </ContentWrapper>
    );
};

export default Content;