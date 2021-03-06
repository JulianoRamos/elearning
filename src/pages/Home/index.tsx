import React from 'react';

import Header from '../../components/shared/Header';
import SearchInput from '../../components/shared/SearchInput';
import Categories from '../../components/Categories';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <SearchInput />
      <Categories />
    </Container>
  );
};

export default Home;
