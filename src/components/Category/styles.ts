import styled from 'styled-components/native';

export const Container = styled.View`
  flex-grow: 1;
  flex-basis: 0;

  background-color: #fff;

  border-radius: 16px;

  padding: 24px 25px;
  margin: 9px 8px;
`;

export const Title = styled.Text`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;

  color: #6c6c80;

  margin-top: 24px;
`;

export const Description = styled.Text`
  font-family: System;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;

  color: #c4c4d1;

  margin-top: 4px;
`;
