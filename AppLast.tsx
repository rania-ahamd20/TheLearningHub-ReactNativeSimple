/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import CV from './CV.tsx';
import axios from 'axios';
//1- Functional Component
function App(): JSX.Element {
  const [data, setData] = useState([]);

  const fetchData = () => {
    /*fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        console.log(json);
      });*/
    /*axios.get('https://jsonplaceholder.typicode.com/todos/1').then(result => {
      console.log(result.data);
    });*/

    axios
      .get('https://07cb-92-253-117-0.ngrok-free.app/api/Course')
      .then(result => {
        console.log(result.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    axios
      .get('https://07cb-92-253-117-0.ngrok-free.app/api/Course')
      .then(result => {
        setData(result.data);
      })
      .catch(err => console.log(err));
  }, []);

  /*<Text>Hello</Text>
    <Button color="black" title="Click" onPress={fetchData} />*/
  return (
    <View>
      <Text style={styles.Welcome}> Courses</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.courseid.toString()}
        renderItem={({item}) => (
          <View>
            <Text style={styles.Text}> Course Id : {item.courseid}</Text>
            <Text style={styles.Text}> Course Name : {item.coursename}</Text>
            <Text style={styles.Text}>-----------------------------------</Text>
          </View>
        )}
      />
    </View>
  );
}
/*function App(): JSX.Element {
  return <CV />;
}*/

//Arrow Function
/*const Welcome = props => {
  return (
    <View>
      <Text style={styles.DataList}>Hello,{props.name}</Text>
      <Text style={styles.DataList}>Age : {props.Age}</Text>
      <Text style={styles.DataList}>Major:{props.Major}</Text>
    </View>
  );
};*/

//Exercise 1
/*class DataList extends React.Component {
  render(): React.ReactNode {
    return (
      <View>
        <Text style={styles.DataList}>Hello,Mazen</Text>
        <Text style={styles.DataList}>Age : 25</Text>
        <Text style={styles.DataList}>Major:Technecial</Text>
      </View>
    );
  }
}*/

//2-Class Component
/*class App extends React.Component {
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <Text style={styles.Welcome}>Hello World</Text>
        <Text>Using Arrow Function</Text>
        <Welcome name={'Rania'} Age={'23'} Major={'Computer Engineer'} />
        <Text>Using Class component</Text>
        <DataList />
      </View>
    );
  }
}*/

const styles = StyleSheet.create({
  Welcome: {color: 'black', textAlign: 'center', margin: 10, fontSize: 32},
  DataList: {margin: 25, color: 'lightblue'},
  container: {flex: 1, backgroundColor: 'white'},
  Text: {color: 'black', margin: 2, fontSize: 18},
});
export default App;
