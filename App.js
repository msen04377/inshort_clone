// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,StatusBar} from 'react-native';
import Context from './API/Context';
import InshortsTabs from './components/InshortsTabs';

function App() {
  return (
    <View style={[styles.container,{backgroundColor:'#282c35'}]}>
      <InshortsTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:StatusBar.currentHeight,
  },
});

export default () =>{
  return(
    <Context>
      <App />
    </Context>
  );
};
