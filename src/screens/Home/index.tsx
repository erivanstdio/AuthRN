import React from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/Button';

import styles from './styles';


const Home = () => {

  // FIX: ajeita essa porra ai major

  function handleSingIn(navigation: any) {
    navigation.navigate("Dashboard")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem vindo!</Text>
      <Button title="Sign In"/>
    </View>
  );
}


export default Home;