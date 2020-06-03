import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  margin-top: 16px;
  padding: 0 16px;
  width: 100%;
  height: 56px;
  color: #312e38;
  background-color: #ff9000;
  font-weight: 500;
  border: 0;
  border-radius: 10px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#ff9000')};
  }
`;
