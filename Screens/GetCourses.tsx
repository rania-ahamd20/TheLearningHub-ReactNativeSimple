/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet, Button } from 'react-native';
import { Appbar, Card, Provider } from 'react-native-paper';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the Material Icons library

const GetCourses = () => {
  const [dataSource, setDataSource] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('https://380f-92-253-117-0.ngrok-free.app/api/Course')
      .then(response => response.json())
      .then(responseJson => {
        setDataSource(responseJson);
      })
      .catch(error => console.log(error));
  }, []);

  const handleDelete = id => {
    axios
      .delete(
        `https://380f-92-253-117-0.ngrok-free.app/api/Course/DeleteCourse/${id}`,
      )
      .then(() => {
        alert('Course Deleted Successfully');
      })
      .catch(err => console.log(err));
  };

  return (
    <Provider>
      <Appbar.Header>
        <Appbar.Content title="Get All Courses" subtitle="LMS" />
      </Appbar.Header>
      <View style={styles.container}>
        <FlatList
          data={dataSource}
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <Card.Content>
                <View style={styles.cardContent}>
                  <View style={styles.cardContentLeft}>
                    <Text style={styles.cardText}>
                      <Text style={styles.label}>Course Id : </Text>
                      {item.courseid}
                    </Text>
                    <Text style={styles.cardText}>
                      <Text style={styles.label}>Course Name : </Text>
                      {item.coursename}
                    </Text>
                  </View>
                  <View style={styles.cardContentRight}>
                  <Button
                      color="#00ADEE"
                      title="Update"
                      icon={() => <Icon name="create" size={25} color="white" />}
                      onPress={() => navigation.navigate('UpdateCourse')}
                    />
                       <View style={{ paddingLeft: 10 }}>
                      <Button
                        color="red"
                        title="X"
                        onPress={() => handleDelete(item.courseid)}
                      />
                    </View>
                  </View>
                </View>
              </Card.Content>
            </Card>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    marginBottom: 20,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContentLeft: {
    flex: 1,
  },
  cardContentRight: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  cardText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  label: {
    color: 'black',
  },
});
export default GetCourses;
