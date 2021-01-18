import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  padding: ${getStatusBarHeight() + 24}px 24px 24px 24px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
