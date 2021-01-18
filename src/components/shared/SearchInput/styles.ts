import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  height: 56px;
  padding: 0 26px;
  background: #fff;
  border-radius: 50px;

  flex-direction: row;
  align-items: center;

  margin: 0 24px 32px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 20px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #3d3d4c;
  font-size: 15px;
  line-height: 18px;
  font-family: System;
  font-style: normal;
  font-weight: normal;
`;
