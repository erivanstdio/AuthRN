import React, { useContext } from 'react';
import { View } from 'react-native';

import styles from './styles';
import Button from '../../components/Button';
import AuthContext from '../../contexts/auth';

const SingIn: React.FC = () => {

  // NOTE: após ter criado um contexto, hora de utilizar 
  // a partir do useContext --->

  const { signed, user,authSignIn } = useContext(AuthContext)

  // obtém o objeto armazenado nesse contexto no arquivo auth.tsx

  console.log(signed, user)

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
    authSignIn()
  }

  return (
    <View style={styles.container}>
      <Button title="Sign In" onPress={handleSingIn}/>
    </View>  
  );
}

export default SingIn;