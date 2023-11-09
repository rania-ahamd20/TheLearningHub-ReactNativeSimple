/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { TextInput, Text, View, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const CreateCourse = ({navigation}: any) => {
  const handleCreate = () => {
    axios
      .post(
        'https://2f1b-92-253-117-0.ngrok-free.app/api/Course',
        {
          courseid: Math.floor(Math.random() * 100),
          coursename: name,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then((res) => {
        console.log(res.data);
        alert('Course Created Successfully');
        navigation.navigate('GetCourses');
      })
      .catch((err) => console.log(err));
  };
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add new Course</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter course name"
        defaultValue={name}
        onChangeText={(courseName) => setName(courseName)}
      />
      <Button color="black" title="Add" onPress={handleCreate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default CreateCourse;
