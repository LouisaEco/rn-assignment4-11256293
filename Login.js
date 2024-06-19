import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Alert } from 'react-native';
import { FontAwesome, FontAwesome5, Entypo } from '@expo/vector-icons';

const Login = ({ navigation, onLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (name && email) {
      onLogin({ name, email });
      navigation.navigate('Home');
    } else {
      Alert.alert('Login Failed', 'Please enter both name and email.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Jobizz</Text>
        <Text style={styles.subtitle}>Welcome Back 👋</Text>
        <Text style={styles.description}>Let's log in. Apply to Jobs!</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, styles.nameInput]}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={[styles.input, styles.emailInput]}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or continue with</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="apple" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome5 name="google" size={24} color="#DD4B39" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Entypo name="facebook-with-circle" size={24} color="#3b5998" />
        </TouchableOpacity>
      </View>

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Haven't account? <Text style={styles.registerLink}>Register</Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  iconButton: {
    backgroundColor: '#fff',
    borderRadius: 28,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 12,
    elevation: 2, 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    paddingTop: 'auto',
    },
    textContainer: {
    marginBottom: 24,
    },
    title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    width: 150,
    height: 33,
    color: '#356899',
    },
    subtitle: {
    fontSize: 28,
    marginBottom: 2,
    fontWeight: 'bold',
    width: 600,
    height: 34,
    lineHeight: 33.6,
    color: '#0D0D26',
    },
    description: {
    fontSize: 14,
    marginBottom: 25,
    },
    inputContainer: {
      width: '100%',
    },
    input: {
      width: '100%',
      height: 52,
      borderWidth: 1,
      borderColor: '#AFB0B6',
      borderRadius: 10,
      paddingHorizontal: 8,
    },
    nameInput: {
      marginBottom: 14,
    },
    emailInput: {
      marginBottom: 40,
    },
    button: {
      backgroundColor: '#356899',
      paddingVertical: 10,
      paddingHorizontal: 20,
      paddingTop: 15,
      borderRadius: 5,
      alignItems: 'center',
      height: 52,
      width: '100%',
      marginBottom: 40,
    },
    buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    },
    orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    },
    line: {
    flex: 1,
    height: 1,
    backgroundColor: '#AFB0B6',
    },
    orText: {
    marginHorizontal: 16,
    color: '#AFB0B6',
    marginBottom: 20,
    },
    registerContainer: {
    alignItems: 'center',
    marginTop: 16,
    },
    registerText: {
    marginTop: 30,
    color: '#AFB0B6',
    },
    registerLink: {
    color: '#356899',
    }
});

export default Login;