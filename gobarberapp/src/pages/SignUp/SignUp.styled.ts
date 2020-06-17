import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  margin: 64px 0 24px;
  color: #f4ede8;
  font-size: 24px;
  font-family: 'RobotoSlab-Medium';
`;

export const BackToSignIn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex-direction: row;

  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 16px 0 ${16 + getBottomSpace()}px;
  background-color: #312e38;
  border-top-width: 1px;
  border-color: #232129;
`;

export const BackToSignInText = styled.Text`
  margin-left: 16px;
  color: #fff;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
`;
