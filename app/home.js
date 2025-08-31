import React from 'react';
import { TouchableOpacity, SafeAreaView, Text, Button, View } from 'react-native';
import styles from './styles/index.styles';   // ✅ import styles
import { Link } from 'expo-router';

const Home = () => {
    return(
       <SafeAreaView style={styles.container}>
      <View style={styles.bottomButtons}>

       

        <Link href="/profile" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTex}>Profile</Text>
          </TouchableOpacity>
        </Link>

      </View>
    </SafeAreaView>

    )
}
export default Home