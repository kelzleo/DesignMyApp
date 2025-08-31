import React from 'react';
import { TouchableOpacity, SafeAreaView, Text, Button } from 'react-native';
import styles from '../styles/index.styles';   // ✅ import styles


const WelcomeScreen = ({ onContinue }) => (
  <SafeAreaView style={styles.welcomeContainer}>
    <Text style={styles.welcome}>Welcome to DesignMyWorkout</Text>
    <TouchableOpacity style={styles.button} onPress={onContinue}>
      <Text style={styles.buttonText}>Begin</Text>
    </TouchableOpacity>
  </SafeAreaView>
);

export default WelcomeScreen;
