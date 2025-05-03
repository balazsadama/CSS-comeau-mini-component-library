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


const ProgressBarContainer = styled.div`
  padding: var(--padding);
  border-radius: 8px;
  background: ${COLORS.transparentGray15};
  width: fit-content;
  box-shadow: 0px 2px 4px 0px ${COLORS.transparentGray35} inset;
	min-width: 200px;
`;

const ProgressBarInnerWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
  height: var(--bar-height);
`;

const ProgressBarStyled = styled.div`
	background: ${COLORS.primary};
	width: ${props => props.value}%;
	height: inherit;
`;


const ProgressBar = ({ value, size }) => {
  return (
    <ProgressBarContainer style={SIZES[size]}>
      <ProgressBarInnerWrapper>
				<div
					role="progressbar"
					aria-valuenow={value}
					aria-valuemin={0}
					aria-valuemax={100}
				>
					<ProgressBarStyled value={value} />
				</div>
      </ProgressBarInnerWrapper>
    </ProgressBarContainer>
	);
};

export default ProgressBar;