import React, { useMemo, useState } from "react";
import { SafeAreaView, View, TouchableOpacity, Text, TextInput, useColorScheme,  } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter, Link } from "expo-router";
import createStyles from "./styles/index.styles";

const Login = () => {
    const colorScheme = useColorScheme();
    const styles = useMemo(() => createStyles(colorScheme), [colorScheme]);
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try{
            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            })
            const data = await response.json();
            if (response.ok) {
                await AsyncStorage.setItem('token', data.token)
                await AsyncStorage.setItem('email', data.email)
                console.log('login successl')
                router.push('/profile')
            } else {
                console.log('error logging in')
            }
           

        }  catch(err) {
                console.log('server error')
            }
    }
    return(
        <SafeAreaView style={styles.profileContainer}>
            <View style={styles.formContainer}>
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
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.button}>Login</Text>
                </TouchableOpacity>

                  <Link href="/signup" asChild>
                    <TouchableOpacity>
                        <Text style={styles.linkText}>Don't have an account? Sign up</Text>
                    </TouchableOpacity>
                </Link>

            </View>
        </SafeAreaView>
    )
}
export default Login