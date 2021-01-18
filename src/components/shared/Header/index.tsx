import React from 'react';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Feather';

import { Container } from './styles';

import Logo from '../../../assets/logo-tipo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Image source={Logo} />
      <TouchableOpacity>
        <Icon name="power" size={20} color="#FF6680" />
      </TouchableOpacity>
    </Container>
  );
};

export default Header;
