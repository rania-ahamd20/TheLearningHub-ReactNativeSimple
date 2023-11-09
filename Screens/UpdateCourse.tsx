/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { TextInput, Text, View, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const UpdateCourse = ({navigation}: any) => {
  const handleUpdate = () => {
    axios
      .put(
        ' https://2f1b-92-253-117-0.ngrok-free.app/api/Course/Update',
        {
          courseid: id,
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
        alert('Course Updated Successfully');
        navigation.navigate('GetCourses');
      })
      .catch((err) => console.log(err));
  };
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update Course</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter course id"
        defaultValue={id}
        onChangeText={(courseid) => setId(courseid)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter course name"
        defaultValue={name}
        onChangeText={(coursename) => setName(coursename)}
      />
      <Button color="black" title="Update" onPress={handleUpdate} />
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

export default UpdateCourse;
