/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  LogBox,
} from 'react-native';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const Login = ({ navigation }: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, SetPasswordVisible] = useState(true);

  useEffect(() => {
    LogBox.ignoreLogs(['Reanimated 2']);
    LogBox.ignoreLogs([
      'ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes ' +
        "exported from 'deprecated-react-native-prop-types'.",
      'NativeBase : The contrast ratio of',
      '[react-native-gesture-handler] ' +
        +"Seems like you're using an old API with gesture components, check out new Gestures system!",
    ]);
  }, []);

  (globalThis as any).url = 'https://2f1b-92-253-117-0.ngrok-free.app/api';
  let token: any;

  const CheckValidation = async () => {
    try {
      const res = await axios.post(
        (globalThis as any).url + '/jwt',
        {
          username: username,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      token = jwt_decode(res.data);
      console.log(token.username);
      if (token.roleid === '2') {
        console.log(token);
        navigation.navigate('MainPage');
      } else if (token.roleid === '1') {
        console.log(token);
        (globalThis as any).name = token.name;
        navigation.navigate('Course');
      } else {
        Alert.alert('Username or password is incorrect!!');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Something went wrong');
    }
  };

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View>
        <Image source={require('../Images/show.png')} style={styles.logo} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor={'#646464'}
        onChangeText={(username) => setUsername(username)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={'#646464'}
        onChangeText={(password) => setPassword(password)}
        secureTextEntry={passwordVisible}
      />
      <View style={styles.register}>
        <Text
          style={{
            color: '#00ADEE',
            left: 70,
            bottom: 40,
            fontWeight: '500',
            margin: 20,
          }}>
          Forgot password?
        </Text>
      </View>
      <View>
        <Pressable style={styles.button} onPress={CheckValidation}>
          <Text style={styles.login}> Login</Text>
        </Pressable>
      </View>
      <View style={styles.register}>
        <Text style={styles.register}>
          Don't have an account?{'   '}
          <Text style={{ color: '#00ADEE', fontWeight: 'bold' }}>Register</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 150,
    left: 60,
    top: 28,
    resizeMode: 'contain',
    marginBottom: 80,
  },
  register: {
    top: 40,
    left: 40,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#212529',
  },
  login: {
    fontSize: 20,
    fontWeight: 'bold',
    position: 'relative ',
    left: 155,
    color: 'white',
    top: 10,
    opacity: 1,
  },
  button: {
    backgroundColor: '#00ADEE',
    borderRadius: 20,
    color: 'black',
    height: 50,
    top: 10,
    width: 370,
    left: 10,
  },
  header: {
    fontFamily: 'Gotham-Book',
    fontWeight: 'bold',
    fontSize: 28,
    alignItems: 'center',
    color: '#4d4d4d',
    marginTop: -62,
    marginBottom: 15,
    left: 15,
  },
  input: {
    height: 50,
    margin: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    color: 'black',
    borderColor: '#c0c0c0',
    paddingLeft: 20,
  },
  home: {
    color: '#212529',
    fontWeight: 'bold',
    top: 55,
    left: 157,
    fontSize: 15,
    textDecorationLine: 'underline',
  },
});

export default Login;
