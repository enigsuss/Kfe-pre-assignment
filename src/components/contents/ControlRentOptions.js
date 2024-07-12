import React from "react";
import styled from "styled-components";
import { ChevronDown } from "lucide-react";

const Wrapper = styled.div`
  box-sizing: border-box;
  background: white;
  width: 582px;
  height: 132px;
  margin: 33px 0;
  padding: 24px 48px;
  border-radius: 10px;
`;
const BulletPoint = styled.div`
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-radius: 50%;
  background: ${(props) => props.color};
  border: 4px solid rgba(255, 255, 255, 0.8);
`;
const LabelBP = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
const LabelSelect = styled.label`
  display: flex;
  flex-direction: column;
  width: 126px;
  height: 20px;
`;
const StyledTitle = styled.span`
  font-weight: 500;
  font-size: 16px;
`;
const StyledItemName = styled.span`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 10px;
`;
const ItemWrapper = styled.div`
  display: flex;
  width: 486px;
  height: 48px;
`;
const StyledSelect = styled.select`
  z-index: 1;
  background-color: transparent;
  appearance: none;
  border: none;
  width: 100%; height: 100%;
  color: ${(props) => props.color};
  option {
    color:${(props) => props.color}
    font-size: 12px;
  }
  option[value=""][disabled] {
    display: none;
  }
`;
const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  width: 130px;
  height: 20px;
`;
const Separation = styled.div`
  height: 100%;
  width: 0;
  border-left: 1px solid rgba(195, 212, 233, 0.4);
  margin: 0 24px;
`;
const ArrowWrapper = styled.div`
  position: absolute;
  left: 110px;
`;

const ControlRentOptions = ({ name, colorPrimary, colorSecondary }) => {
  return (
    <Wrapper>
      <LabelBP>
        <BulletPoint color={colorPrimary} />
        <StyledTitle>{name}</StyledTitle>
      </LabelBP>
      <ItemWrapper>
        <LabelSelect>
          <StyledItemName>Locations</StyledItemName>
          <SelectWrapper>
            <StyledSelect color={colorSecondary} required>
              <option value="" disabled selected>
                Select your city
              </option>
            </StyledSelect>
            <ArrowWrapper>
              <ChevronDown size={18} />
            </ArrowWrapper>
          </SelectWrapper>
        </LabelSelect>
        <Separation />
        <LabelSelect>
          <StyledItemName>Date</StyledItemName>
          <SelectWrapper>
            <StyledSelect color={colorSecondary} required>
              <option value="" disabled selected>
                Select your date
              </option>
            </StyledSelect>
            <ArrowWrapper>
              <ChevronDown size={18} />
            </ArrowWrapper>
          </SelectWrapper>
        </LabelSelect>
        <Separation />
        <LabelSelect>
          <StyledItemName>Time</StyledItemName>
          <SelectWrapper>
            <StyledSelect color={colorSecondary} required>
              <option value="" disabled selected>
                Select your time
              </option>
            </StyledSelect>
            <ArrowWrapper>
              <ChevronDown size={18} />
            </ArrowWrapper>
          </SelectWrapper>
        </LabelSelect>
      </ItemWrapper>
    </Wrapper>
  );
};

export default ControlRentOptions;
