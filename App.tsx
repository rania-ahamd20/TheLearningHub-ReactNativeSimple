/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {StyleSheet, Button} from 'react-native';
import CreateCourse from './Screens/CreateCourse';
import GetCourses from './Screens/GetCourses';
import MainPage from './Screens/MainPage';
import UpdateCourse from './Screens/UpdateCourse';
import login from './Screens/login';
import Course from './Screens/Course';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login Page" component={login} />
        <Stack.Screen name="Course" component={Course} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen
          name="CreateCourse"
          component={CreateCourse}
          options={({navigation}) => ({
            headerBackVisible: false,
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="GetCourses"
          component={GetCourses}
          options={({navigation}) => ({
            headerBackVisible: false,
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="UpdateCourse"
          component={UpdateCourse}
          options={({navigation}) => ({
            headerBackVisible: false,
            headerShown: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  buttonStyle: {
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
});
export default App;
