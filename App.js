// import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View ,StatusBar} from 'react-native';
import Context, { NewsContext } from './API/Context';
import InshortsTabs from './components/InshortsTabs';

function App() {

  const { darkTheme } = useContext(NewsContext)

  return (
    <View style={[styles.container,{backgroundColor: darkTheme ? '#282c35' : 'white'}]}>
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
