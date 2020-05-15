import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  margin-top: 80px;
  max-width: 450px;
  font-size: 48px;
  line-height: 56px;
  color: #3a3a3a;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 40px;
  max-width: 700px;

  input {
    flex: 1;
    padding: 0 24px;
    height: 70px;
    color: #3a3a3a;
    border: 0;
    border-radius: 5px 0 0 5px;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background-color: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    display: block;
    padding: 24px;
    background: #fff;
    border-radius: 5px;
    width: 100%;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:not(:first-of-type) {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin: 0 16px;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        margin-top: 4px;
        font-size: 18px;
        color: #a8a8b3;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
