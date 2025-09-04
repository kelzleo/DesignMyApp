import React, { useEffect, useMemo, useState } from 'react';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity, SafeAreaView, Text, Button, View, useColorScheme } from 'react-native';
import createStyles from './styles/index.styles'; 
import { Link } from 'expo-router';
import UserEmailBox from './userEmailBox';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () =>{
      const colorScheme = useColorScheme(); // detects light/dark
      const styles = useMemo(() => createStyles(colorScheme), [colorScheme]); // memoize styles
      const iconColor = colorScheme === 'dark' ? '#FFFFFF' : '#000000';

      const [email, setEmail] = useState('');
useEffect(() => {
  const loadEmail = async () => {
    const storedEmail = await AsyncStorage.getItem('email')
    setEmail(storedEmail)
  };
  loadEmail();
}, []);

    return(
        <SafeAreaView style={ styles.profileContainer }>
            <View style={styles.leftAligned}>
                 <Text style={[styles.h1, {marginTop: 50}]}>Profile</Text>
            </View>
            <View style={ styles.repcount }>
                <Text style={ styles.repcountH2 }>RepCount Prenium</Text>
                <Text style={ styles.p }>Analyze your progress, unlock advanced tracking features and support RepCont development</Text>
                <TouchableOpacity style={styles.repcountButton} >
            <Text style={styles.repcountButton}>Discover Prenium</Text>
          </TouchableOpacity>
            </View>
            <View style={styles.leftAligned}>
            <Text style={styles.h1}>Account</Text>
            </View>
           <View style={[styles.repcount, styles.emailRow]}>
            <Ionicons name="person-circle" size={36} color="blue" />
    <Text style={[styles.repcountH2, {alignItems: 'center'}]}>{email || 'no email'}</Text>
</View>

<View style={styles.splitDiv}>
    <Link href="/EditExcercises" asChild>
              <Text style={styles.repcountH3}>Edit Excersice</Text>
            </Link>
    <View style={styles.line}></View>
    <Link href="/EditCategories" asChild>
              <Text style={styles.repcountH3}>Edit Categories</Text>
            </Link>
</View>

<View style={styles.leftAligned}>
    <Text style={styles.h1}>Feedback</Text>

</View>

        </SafeAreaView>
    )
}

export default Profile