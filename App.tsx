import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/Button/Button';



export default function App() {
  return (
    <View style={styles.container}>
      <Button bgColor="red" color="white"> Annuler</Button>
      <Button bgColor="green" color="white"> OK</Button>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
