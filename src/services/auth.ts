function SingIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: '123456',
        user: {
          name: 'Brunno',
          email: 'erivanstdio@gmail.com',
        },
      })
    }, 2000)
  })
}


export default SingIn;