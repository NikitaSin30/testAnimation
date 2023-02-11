import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import LottieView from 'lottie-react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi</Text>
        <LottieView source={require('./animation.json')} autoPlay>
        </LottieView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
});
