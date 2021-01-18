import React, { memo } from 'react';
import { Image } from 'react-native';

import { Container, Title, Description } from './styles';

interface ICategory {
  thumbnail: string;
}

const Category: React.FC<ICategory> = ({ thumbnail }) => {
  return (
    <Container>
      <Image style={{ width: 64, height: 64 }} source={{ uri: thumbnail }} />
      <Title>Matemática</Title>
      <Description>16 Aulas</Description>
    </Container>
  );
};

export default memo(Category);
