import React from 'react';
import { TouchableOpacity, SafeAreaView, Text, Button, View } from 'react-native';
import styles from '../styles/index.styles';   // ✅ import styles

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bottomButtons}>
        <Button title="Log" onPress={() => {}} />
        <Button title="Routines" onPress={() => {}} />
        <Button title="statistics" onPress={() => {}} />    
        <Button title="Profile" onPress={() => {}} />  
      </View>
    </SafeAreaView>
  );
}
export default index;

