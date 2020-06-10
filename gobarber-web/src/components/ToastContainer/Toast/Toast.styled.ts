import styled, { css } from 'styled-components';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    color: #3172b7;
    background-color: #ebf8ff;
  `,
  success: css`
    color: #2e656a;
    background-color: #e6fffa;
  `,
  error: css`
    color: #fddede;
    background-color: #c53030;
  `,
};

export const Container = styled.div<ContainerProps>`
  display: flex;

  position: relative;
  padding: 16px 30px 16px 16px;
  width: 360px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  &:not(:first-of-type) {
    margin-top: 8px;
  }

  ${(props) => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    top: 19px;
    right: 16px;
    color: inherit;
    background-color: transparent;
    border: 0;
    opacity: 0.6;
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
