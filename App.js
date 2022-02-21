import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.weatherContainer}> 
        <ImageBackground 
          source={require('./assets/gradient-bkgrd.png')}
          style={styles.image}
        />
        <View style={styles.titles}>
          <Text style={styles.title}>Today's Forecast</Text>
          
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCD3F8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weatherContainer: {
    width: '100%',
    height: '100%',
  },
  titles: {
    marginTop: '40%',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: '#95A5A6',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  }
});
