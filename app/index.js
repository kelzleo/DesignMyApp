import React from 'react';
import { TouchableOpacity, SafeAreaView, Text, Button } from 'react-native';
import styles from './styles/index.styles';   // ✅ import styles
import { Link } from 'expo-router'; 

const WelcomeScreen = () => (
  <SafeAreaView style={styles.welcomeContainer}>
    <Text style={styles.welcome}>Welcome to DesignMyWorkout</Text>
    <Link href="/home" asChild>
    <TouchableOpacity style={ styles.button}>
        <Text style={ styles.buttonText}>Begin</Text>
    </TouchableOpacity>
    </Link>
  </SafeAreaView>
);

export default WelcomeScreen;
