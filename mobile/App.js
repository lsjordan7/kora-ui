import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

// Replace with the IP address of the machine running `npm run dev`
// e.g. 'http://192.168.1.42:5173'
// On Android emulator, use 'http://10.0.2.2:5173'
const DEV_SERVER_URL = 'http://10.0.2.2:5173';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <WebView
        source={{ uri: DEV_SERVER_URL }}
        style={styles.webview}
        originWhitelist={['*']}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
