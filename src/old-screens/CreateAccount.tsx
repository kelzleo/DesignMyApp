// import React from 'react';
// import { useState } from 'react';
// import { SafeAreaView, Text, TextInput, Button, StyleSheet } from 'react-native';

// const RegisterUser: React.FC = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const registerUser = async () => 
// {
//         try {
//             const response = await fetch('http://localhost:8080/auth/api/register', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     email,
//                     password,
//                 }),
//             });
//             console.log('Response:', response);
        

//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }

//             const data = await response.json();
//             console.log('User registered successfully:', data);
//         } catch (error) {
//             console.error('Error registering user:', error);
//         }
//     };

//     return (
//         <SafeAreaView style={styles.container}>
//             <Text style={styles.title}>Register User</Text>
        
//             <TextInput
//                 style={styles.input}
//                 placeholder="Email"
//                 value={email}
//                 onChangeText={setEmail}
//                 keyboardType="email-address"
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder="Password"
//                 value={password}
//                 onChangeText={setPassword}
//                 secureTextEntry
//             />
//             <Button title="Register" onPress={registerUser} />
//         </SafeAreaView>
//     );
// };
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//         padding: 20,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//     },
//     input: {
//         width: '100%',
//         height: 40,
//         borderColor: '#ccc',
//         borderWidth: 1,
//         borderRadius: 5,
//         paddingHorizontal: 10,
//         marginBottom: 15,
//     },
// });
// export default RegisterUser;