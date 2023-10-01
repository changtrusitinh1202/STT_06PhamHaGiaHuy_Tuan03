import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.containter}> 
      <View style={styles.top}>
        <Text>Top</Text>
      </View>
      <View style={styles.center}>
        <Text>Center</Text>
      </View>
      <View style={styles.bottom}>
        <Text>Bottom</Text>
      </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  containter:{
    flex: 1
  },

  top: {
    backgroundColor: '#FF1493',
    alignItems: 'center',
    justifyContent: 'center',
    height:'30%'
  },

  center: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height:'30%'
  },

  bottom: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    height:'30%'
  }
});


