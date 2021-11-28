import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';


const Home = () => {

  // FIX: ajeita essa porra ai major

  function handleSingIn(navigation: any) {
    navigation.navigate("Dashboard")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem vindo!</Text>
      <TouchableOpacity style={styles.button} onPress={() => handleSingIn}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}


export default Home;