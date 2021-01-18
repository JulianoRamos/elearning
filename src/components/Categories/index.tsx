import React, { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import Category from '../Category';

import { Container, Header, Title, Courses } from './styles';

interface ICategory {
  id: string;
  thumbnail: string;
}

const Categories: React.FC = () => {
  const [courses, setCourses] = useState<number>(43);

  const [categories, setCategories] = useState<ICategory[]>([
    {
      id: '1',
      thumbnail:
        'https://elearning-app-1000.s3.amazonaws.com/thumbnail/Build.png',
    },
    {
      id: '2',
      thumbnail:
        'https://elearning-app-1000.s3.amazonaws.com/thumbnail/English.png',
    },
    {
      id: '3',
      thumbnail:
        'https://elearning-app-1000.s3.amazonaws.com/thumbnail/Física.png',
    },
    {
      id: '4',
      thumbnail:
        'https://elearning-app-1000.s3.amazonaws.com/thumbnail/Math.png',
    },
    {
      id: '5',
      thumbnail:
        'https://elearning-app-1000.s3.amazonaws.com/thumbnail/Quimica.png',
    },
    {
      id: '6',
      thumbnail:
        'https://elearning-app-1000.s3.amazonaws.com/thumbnail/Talk.png',
    },
  ]);

  return (
    <Container>
      <Header>
        <Title>Categorias</Title>
        <Courses>43 cursos</Courses>
      </Header>

      <FlatList
        data={categories}
        keyExtractor={category => category.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        style={{
          paddingLeft: 16,
          paddingRight: 16,
        }}
        renderItem={({ item: category }) => (
          <Category thumbnail={category.thumbnail} />
        )}
      />
    </Container>
  );
};

export default Categories;
