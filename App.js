import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View,Image } from 'react-native';
import {createAppContainer, NavigationContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import transactionScreen from './screens/transactionScreen';
import searchScreen from './screens/searchScreen';
import fs from './config';

export default class App extends React.Component{
  render(){

  return (
    <View style={styles.container}>
      
      <Container/>
      <StatusBar style="auto" />
    </View> 
  )}
}

const Navigator = createBottomTabNavigator({
  transaction:{screen:transactionScreen},
  search:{screen:searchScreen} 
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const routeName = navigation.state.routeName;
      if(routeName === 'transaction'){
        return( <Image
          source={require('./assets/book.png')}
          style={{width:30, height:30}}                
          />)
      } else if (routeName === 'search'){
        return( <Image
          source={require('./assets/searchingbook.png')}
          style={{width:30, height:30}}
          />)
      }
      
    },
  })
})

const Container = createAppContainer(Navigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  book:{
    width:100,
    height:100
  }
});
