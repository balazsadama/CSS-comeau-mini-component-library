import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--underline-thickness': '1px',
    '--font-size': '14px',
    '--padding-bottom': '4px',
    '--padding-left': '24px',
    '--height': '16px',
  },
  large: {
    '--underline-thickness': '2px',
    '--font-size': '18px',
    '--padding-bottom': '6px',
    '--padding-left': '36px',
    '--height': '24px',
  },
}


const Wrapper = styled.div`
  height: 100%;
  position: relative;
  padding-bottom: var(--padding-bottom);
  border-bottom: var(--underline-thickness) solid ${COLORS.black};
  color: ${COLORS.gray700};

  &:has(input:focus) {
    outline: 2px solid -webkit-focus-ring-color;
    outline: 2px solid blue;
    outline-offset: 2px;
    border-radius: 2px;
  }

  :hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  appearance: none;
  border: none;
  font-weight: 700;
  outline: none;
  color: currentColor;  
  padding-left: var(--padding-left);
  height: var(--height);
  margin-block: auto;
  font-size: var(--font-size);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconStyled = styled(Icon)`
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  color: currentColor;
`;

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
    <Wrapper style={{ ...SIZES[size], width }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconStyled
        id={icon}
        size={size === 'small' ? 16 : 24}
        strokeWidth={size === 'small' ? 1 : 2}
      />
      <Input
        type="text"
        placeholder={placeholder}
      />
    </Wrapper>
  )
};

export default IconInput;
