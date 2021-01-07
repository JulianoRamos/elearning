import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Image } from 'react-native';

import {
  BackgroundImage,
  Container,
  Title,
  Description,
  Button,
  ButtonText,
} from './styles';

import Background from '../../assets/home-background.png';
import Logo from '../../assets/logo.png';

const Login: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigate = useCallback(() => {
    navigate('MainBottom', {
      screen: 'Dashboard',
    });
  }, [navigate]);

  return (
    <BackgroundImage
      source={Background}
      imageStyle={{
        width: 390,
        height: 550,
      }}
    >
      <Image source={Logo} />
      <Container>
        <Title>Aprenda da melhor forma</Title>
        <Description>
          Entre na plataforma e acesse cursos de diversas áreas de conhecimento.
        </Description>
        <Button onPress={handleNavigate}>
          <ButtonText>Começar os estudos</ButtonText>
        </Button>
      </Container>
    </BackgroundImage>
  );
};

export default Login;
