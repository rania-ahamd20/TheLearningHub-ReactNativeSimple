/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
const MainPage = ({navigation}: any) => {
  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login Page' }],
    });
  };
  
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, textAlign: 'center'}}>
        The Learning Hub App
      </Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('GetCourses')}>
        <Text style={styles.texts}>Manange Courses</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('CreateCourse')}>
        <Text style={styles.texts}>Create Course</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle} onPress={handleLogout}>
        <Text style={styles.text2}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  texts: {color: 'black', fontSize: 16},
  text2: {color: 'red', fontSize: 16},
  buttonStyle: {
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    color: 'black',
    marginTop: 16,
  },
});
export default MainPage;
