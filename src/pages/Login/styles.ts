import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const BackgroundImage = styled.ImageBackground`
  padding: 40px;
  padding-top: 120px;
`;

export const Container = styled.View``;

export const Title = styled.Text`
  width: 225px;
  height: 86px;

  font-family: 'Rubik';
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 43px;

  color: #ff6680;

  margin-top: 10%;
`;

export const Description = styled.Text`
  width: 217px;
  height: 75px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 25px;

  color: #edebf5;

  margin-top: 16px;
`;

export const Button = styled(RectButton)`
  background: #ff6680;
  border-radius: 100px;

  margin-top: 40px;
`;

export const ButtonText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  text-align: center;

  color: #ffffff;

  margin: 19px;
`;
