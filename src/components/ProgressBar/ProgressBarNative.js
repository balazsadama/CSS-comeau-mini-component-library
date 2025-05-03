/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--padding': '0px',
    '--bar-height': '8px',
  },
  medium: {
    '--padding': '0px',
    '--bar-height': '12px',
  },
  large: {
    '--padding': `${4 / 16}rem`,
    '--bar-height': '16px',
  },
};

const StyledProgressBar = styled.progress`
-webkit-appearance: none;
appearance: none;


/* &::-moz-progress-bar {
  background: ${COLORS.primary};
} */


&::-webkit-progress-bar {
  background: transparent;
}

&::-webkit-progress-value {
  background: ${COLORS.primary};
}
`;

const ProgressBarContainer = styled.div`
  padding: var(--padding);
  border-radius: 8px;
  background: ${COLORS.transparentGray15};
  width: fit-content;
  box-shadow: 0px 2px 4px 0px ${COLORS.transparentGray35} inset;
`;

const ProgressBarInnerWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
  height: var(--bar-height);
`;

const ProgressBar = ({ value, size }) => {
  return (
    <ProgressBarContainer style={SIZES[size]}>
      <ProgressBarInnerWrapper>
        <StyledProgressBar value={value} max={100}>{value}</StyledProgressBar>
      </ProgressBarInnerWrapper>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
