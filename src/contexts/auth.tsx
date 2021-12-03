import React, { createContext, useState } from "react";
import { singIn } from '../services/auth'

// NOTE: usando contexto para comunicação entre componentes.
// é possível usar o Async Storage para armazenar 
// essas informações, porém não é recomendado (afinal
// esses dados devem viajar entre diversos componentes).

// NOTE: criando interface para tipagem do createContext.
// da maneira que foi escrita, o dev é forçado a iniciar o estado
// informando todas essas variáveis.
interface AuthContextData {
  signed: boolean;
  // NOTE: caso fosse necessário, adicionaria também um token:
  // token: string;

  // NOTE: setando dessa maneira possibilita o estado inicial ser nulo,
  // o que auxiliaria na hora de identificar se existe um usuário
  user: object | null;
  authSignIn(): Promise<void>;
}


// NOTE: inciando já falando que o usuário tá logado:

// existem algumas maneiras de iniciar o objeto em questão, dentre elas:
// const AuthContext = createContext<AuthContextData>({signed: true, token: "", user: {}});
// const AuthContext = createContext<AuthContextData | null>(null);

// e aqui seria mais ou menos... "esse objeto (por mais que não pareça)
// tem exatamente esse tipo determinado..."
// const AuthContext = createContext<AuthContextData>({} as AuthContextData);


const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// NOTE: inserindo as informações de valores no arquivo de contexto:
// No começo do exercício, essas informações estavam no App.tsx, e agora não mais.
// Isso facilitará a escalabilidade da aplicação (em relação aos contextos).

interface ContextProps{
  children: any;
}

export const AuthProvider = ({children}: ContextProps) => {

  // NOTE: mais uma vez tipando o estado como objeto ou nulo,
  // somente para possibilitar que ele possua qualquer um dos dois estados.
  const [user, setUser] = useState<object | null>(null)


  async function authSignIn() {
    const response = await singIn()
    
    // NOTE: após ter escrito a tipagem direitinho
    // o acesso a itens aninhados pode ser feito dessa maneira:
    // const { user: {email}, token } = response
    const { token, user } = response;

    setUser(response.user)
  }

  // !!user verifica ser existe algum valor dentro do user, pra eventualmente retornar um booleano
  return (
    <AuthContext.Provider value={{signed: !!user, user, authSignIn}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;