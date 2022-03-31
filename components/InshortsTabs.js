import { StyleSheet, Text, View,useWindowDimensions } from 'react-native'
import React,{useState,useContext} from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';
import DiscoverScreen from '../screens/DiscoverScreen';
import NewsScreen from '../screens/NewsScreen';
import TopNavigation from './TopNavigation'; 
import { NewsContext } from '../API/Context';

const InshortsTabs = () => {
  const layout = useWindowDimensions();

  const {index,setIndex} = useContext(NewsContext)
    // const [index,setIndex] = useState(1);

    const[routes] = useState([
      {key:"first",title:"Discover"},
      {key:"second",title:"News"},
    ]);

    const renderScene = SceneMap({
      first:DiscoverScreen,
      second:NewsScreen
    })

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
    />
  )
}

export default InshortsTabs

const styles = StyleSheet.create({})