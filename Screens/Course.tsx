/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Course = () => {
  return (
    <View style={styles.container}>
      <Card >
        <Card.Content>
          <Icon name="laptop-mac" size={100} style={styles.icon} />
          <Text style={styles.title}>React Native Course</Text>
          <Text >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{' '}
          </Text>
        </Card.Content>
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
  lightCard: {
    width: '80%',
    padding: 16,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  darkCard: {
    width: '80%',
    padding: 16,
    borderRadius: 10,
    backgroundColor: 'black',
  },
  lightText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: 'black',
  },
  darkText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: 'white',
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
});

export default Course;
