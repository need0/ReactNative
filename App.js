import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>

      <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
      screenOptions={{
        headerStyle:{
          backgroundColor:'#0f8aff'
        },
        headerTintColor:'#ffff',
        headerTitleStyle:{
          fontWeight:'bold',
        }
      }}>

        <Stack.Screen 
         name='Home' 
         component={HomeScreen}
         initialParams = {{ itemId : 53}}/>

         <Stack.Screen 
         name='Details' 
         component={DetailsScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
     flex:1,
  }
 })