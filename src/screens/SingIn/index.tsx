import React from 'react';
import { View } from 'react-native';
import Button from '../../components/Button';
import { singIn } from '../../services/auth';
import styles from './styles';

const SingIn: React.FC = () => {

  // NOTE: essa função vai demorar demorar 2 segundos para resolver, 
  // então pode ser escrita de duas formas:
  
  
  /*
  async function handleSignIn() {
    const response = await singIn();

    console.log(response);
  }
  */
// ou
  function handleSingIn(){
    singIn().then(res => {
      console.log(res)
    })
  }

  return (
    <View style={styles.container}>
      <Button title="Sign In" onPress={handleSingIn}/>
    </View>  
  );
}

export default SingIn;