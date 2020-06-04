import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip/Tooltip.layout';

interface ContainerProps {
  isFilled: boolean;
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  padding: 16px;
  width: 100%;
  color: #666360;
  background-color: #232129;
  border-radius: 10px;
  border: 2px solid #232129;

  &:not(:first-child) {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    flex: 1;
    color: #f4ede8;
    background-color: transparent;
    border: 0;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    color: #ffffff;
    background-color: #c53030;

    &:before {
      border-color: #c53030 transparent;
    }
  }
`;
