import React from 'react';

import { TouchableOpacity, SafeAreaView, Text, Button, View } from 'react-native';
import styles from './styles/index.styles';   
import { Link } from 'expo-router';
import UserEmailBox from './userEmailBox';

const Profile = () =>{
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
           <View style={styles.repcount}>
    <Text style={[styles.repcountH2, {alignItems: 'center'}]}>{"user@example.com" || "No email available"}</Text>
</View>

<View style={styles.splitDiv}>
    <Link href="/EditExcercises">Edit Excercises</Link>
    <View style={styles.line}></View>

</View>

        </SafeAreaView>
    )
}

export default Profile