import React, { useMemo } from 'react';
import { SafeAreaView, Text, View, useColorScheme } from 'react-native';
import createStyles from './styles/index.styles'; // ✅ use the dynamic style creator
import { Link } from 'expo-router';

const Home = () => {
  const colorScheme = useColorScheme(); // detects light/dark
  const styles = useMemo(() => createStyles(colorScheme), [colorScheme]); // memoize styles

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bottomButtons}>
        <Link href="/profile" asChild>
          <Text style={styles.linkText}>Profile</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Home;
