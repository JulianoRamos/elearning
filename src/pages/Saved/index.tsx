import React from 'react';

import Header from '../../components/shared/Header';
import SearchInput from '../../components/shared/SearchInput';
import CoursesSaved from '../../components/CoursesSaved';

import { Container } from './styles';

const Saved: React.FC = () => {
  return (
    <Container>
      <Header />
      <SearchInput />
      <CoursesSaved />
    </Container>
  );
};

export default Saved;
