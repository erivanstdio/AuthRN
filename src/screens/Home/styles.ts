import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text :{
    color: '#fff',
    fontSize: 20
  },
  button: {
    backgroundColor: 'purple',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff'
  }
});

export default styles;