import React, { useMemo } from 'react';
import { TouchableOpacity, SafeAreaView, Text, useColorScheme } from 'react-native';
import createStyles from './styles/index.styles'; // ✅ import styles
import { Link } from 'expo-router'; 

const WelcomeScreen = () => {
  const colorScheme = useColorScheme();
  const styles = useMemo(() => createStyles(colorScheme), [colorScheme]);

  return (
    <SafeAreaView style={styles.welcomeContainer}>
      <Text style={styles.welcome}>Welcome to DesignMyWorkout</Text>
      <Link href="/login" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Begin</Text>
        </TouchableOpacity>
      </Link>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
