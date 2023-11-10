/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Course = ({ navigation }: any) => {

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login Page' }],
    });
  };

  return (
    <View style={styles.container}>
      <Card >
        <Card.Content style={styles.content}>
          <Icon name="laptop-mac" size={100} style={styles.icon} />
          <Text style={styles.title}>React Native Course</Text>
          <Text >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{' '}
          </Text>
        </Card.Content>
        <Button color="black" title="Logout" icon="logout" mode="contained" onPress={handleLogout} style={styles.logoutButton}/>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  icon: {
    alignSelf: 'center',
    color: 'black',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: 'black',
  },
  content:{paddingBottom: 40},

});

export default Course;
