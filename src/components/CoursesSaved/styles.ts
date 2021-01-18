import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f0edf5;

  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 0 24px;
`;

export const Title = styled.Text`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;

  color: #3d3d4c;

  margin: 24px 0;
`;

export const Courses = styled.Text`
  font-family: System;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;

  text-align: right;

  color: #a0a0b2;

  margin: 24px 0;
`;
