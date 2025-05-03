import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';


const SelectWrapper = styled.div`
  position: relative;
  width: fit-content;
  padding: 16px 52px 16px 16px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }

  &:has(select:focus) {
    outline: 2px dotted #212121;
    outline: 2px auto -webkit-focus-ring-color;
  }
`;

const SelectStyled = styled.select`
  position: absolute;
  appearance: none;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const IconStyled = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 16px;
  margin-block: auto;
  height: fit-content;
  pointer-events: none;
`;




const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <SelectStyled value={value} onChange={onChange}>
        {children}
      </SelectStyled>

      {displayedValue}
      
      <IconStyled id="chevron-down" strokeWidth={2} />
    </SelectWrapper>
  );
};

export default Select;
