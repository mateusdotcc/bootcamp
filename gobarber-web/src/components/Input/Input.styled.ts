import styled from 'styled-components';

export const Container = styled.div`
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
