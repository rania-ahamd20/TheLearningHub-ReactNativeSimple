/* eslint-disable prettier/prettier */
import React, { useState, useEffect} from 'react';
import {FlatList, View, Text, StyleSheet, Button} from 'react-native';
import {Appbar, Card, Provider} from 'react-native-paper';
import axios from 'axios';

const GetCourses = () => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    fetch('https://2f1b-92-253-117-0.ngrok-free.app/api/Course')
      .then(response => response.json())
      .then(responseJson => {
        setDataSource(responseJson);
      })
      .catch(error => console.log(error));
  }, []);

  const handleDelete = id => {
    axios
      .delete(
        `https://2f1b-92-253-117-0.ngrok-free.app/api/Course/DeleteCourse/${id}`,
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
                    <Button color="red"
                      title="X"
                      onPress={() => handleDelete(item.courseid)}
                    />
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
    alignItems: 'flex-end',
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
