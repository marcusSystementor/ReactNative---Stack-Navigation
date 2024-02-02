import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import Cars from './screens/Cars';

const Stack = createStackNavigator();

export default function AppBefore() {
  return (
    <>

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
      screenOptions={{       headerStyle: {
        backgroundColor: "grey",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {fontWeight: "bold"},
        headerRight: () => (
          <Pressable onPress={() => alert("Menu pressed")}><Text style={{color: "#fff"
          , fontSize: 16}}>
            Menu</Text></Pressable>
        ), }}>
      <Stack.Screen name="Home" component={Home} options={{
        title: "Welcome to the Home Screen",
        headerStyle: {
          backgroundColor: "grey",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {fontWeight: "bold"},
          headerRight: () => (
            <Pressable onPress={() => alert("Menu pressed")}><Text style={{color: "#fff"
            , fontSize: 16}}>
              Menu</Text></Pressable>
          ), 
      
      }}
       />
      <Stack.Screen name="Cars" component={Cars} />
      </Stack.Navigator>
    
    </NavigationContainer>
   
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0bdf4',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
