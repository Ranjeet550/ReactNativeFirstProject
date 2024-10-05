import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';

const Login = ({ navigation }) => {
  const [authStatus, setAuthStatus] = useState('');

  // Biometric authentication handler
  const handleBiometricAuth = async () => {
    const rnBiometrics = new ReactNativeBiometrics();

    const { available, biometryType } = await rnBiometrics.isSensorAvailable();

    if (available) {
      const result = await rnBiometrics.simplePrompt({
        promptMessage: 'Confirm fingerprint',
      });

      if (result && result.success) {
        setAuthStatus('Authentication Successful');
        navigation.navigate('Home'); // Navigate to Home screen on success
      } else {
        Alert.alert('Authentication failed', 'Please try again.');
        setAuthStatus('Authentication Failed');
      }
    } else {
      Alert.alert('Biometrics not available', 'This device does not support biometric authentication.');
      setAuthStatus('Biometric Sensor Not Available');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TouchableOpacity style={styles.button} onPress={handleBiometricAuth}>
        <Text style={styles.buttonText}>Authenticate with Biometrics</Text>
      </TouchableOpacity>
      <Text style={styles.statusText}>{authStatus}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  statusText: {
    fontSize: 16,
    marginTop: 20,
    color: '#333',
  },
});

export default Login;
