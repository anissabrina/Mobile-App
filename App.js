import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontsize:20 }}> Test :3 </Text>
      <Text>Another version by Sarah!</Text>
      <Text style={{ color: '#1e90ff', fontSize: 25}}>
        Anis is adding new line </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
