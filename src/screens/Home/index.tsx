import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';



const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem vindo!</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}


export default Home;