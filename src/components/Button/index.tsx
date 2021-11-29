import React from 'react';
import { 
  TouchableOpacity, 
  TouchableOpacityProps, 
  Text } from 'react-native';

import styles from './styles';

interface Props extends TouchableOpacityProps {
  title: string
}

const Button = ({title, ...rest}: Props) => {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;