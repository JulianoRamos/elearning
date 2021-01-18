import React from 'react';

import { Container, Icon, TextInput } from './styles';

const SearchInput: React.FC = () => {
  return (
    <Container>
      <Icon name="search" size={20} color="#C4C4D1" />

      <TextInput
        keyboardAppearance="dark"
        placeholder="Busque um curso"
        placeholderTextColor="#C4C4D1"
      />
    </Container>
  );
};

export default SearchInput;
