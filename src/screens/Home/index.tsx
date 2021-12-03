import React from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/Button';

import styles from './styles';

interface Props {
  navigation: any;
}

const Home = ({navigation}: Props) => {

  function handleSingIn() {
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