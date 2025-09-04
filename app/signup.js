import React, { useMemo, useState } from "react";
import { SafeAreaView, View, Text, TextInput, useColorScheme, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter, Link } from "expo-router";
import createStyles from "./styles/index.styles";

const Signup = () => {
    const colorScheme = useColorScheme();
    const styles = useMemo(() => createStyles(colorScheme), [colorScheme])
    const router = useRouter();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try{
            const response = await fetch('http://localhost:4000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, email, password})
            })
            const data = response.json();
            if (response.ok) {
                await AsyncStorage.setItem('token', data.token)
                console.log('signup successful', data)
                router.push('/home')
            } else {
                console.log('error signing up', data.message )
            }
        }
        catch(err) {
            console.log('error signing up', err)
        }
    }
    return(
        <SafeAreaView style={styles.profileContainer}>
            <View style={styles.formContainer}>
                <Text>Sign Up</Text>
                <TextInput 
                style={styles.input}
                placeholder="Username"
                placeholderTextColor={colorScheme === 'dark'? '#aaa' : '#666'}
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                />
                <TextInput 
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={colorScheme === 'dark' ? '#aaa' : '#666'}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                />
                <TextInput 
                style={styles.input}
                placeholder="password"
                placeholderTextColor={colorScheme === 'dark' ? '#aaa' : "#666"}
                value={password}
                onChangeText={setPassword}
                secureTextEntry

                />
                <TouchableOpacity style={styles.button}onPress={handleSignup} >
                    <Text>Sign up</Text>
                </TouchableOpacity>
            </View>
            

        </SafeAreaView>
    )
}

export default Signup;