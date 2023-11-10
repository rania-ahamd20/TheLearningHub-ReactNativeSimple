/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgetPassword = () => {
    console.log('Requesting password reset for email:', email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forget Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Button title="Reset Password" onPress={handleForgetPassword} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
});

export default ForgetPassword;
