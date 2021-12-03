interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  }
}

// NOTE: essa sintaxe no cabeçalho da função indica que a 
// função signIn vai retornar uma promise e essa promise vai 
// retornar uma resposta desse tipo "Response".

export function singIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: '123456',
        user: {
          name: 'Brunno',
          email: 'erivanstdio@gmail.com',
        },
      });
    }, 2000);
  });
}
