// import React from 'react';
// import { useState } from 'react';
// import { SafeAreaView, Text, TextInput, Button, StyleSheet } from 'react-native';
// import RegisterUser from './CreateAccount'; // Assuming this is the path to your RegisterUser component

// const LoginAccount: React.FC = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [showRegister, setShowRegister] = useState(false);

//     const loginUser = async () => 
// {
//         try {
//             const response = await fetch('http://localhost:8080/auth/api/login', {
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
//             console.log('User logged In successfully:', data);
//         } catch (error) {
//             console.error('Error loggin user:', error);
//         }
//     };

//     return (
//         <SafeAreaView style={styles.container}>
//             <Text style={styles.title}>Login</Text>
        
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
//             <Button title="Login" onPress={loginUser} />
//             <Button title="Register" onPress={() => setShowRegister(true)} />
//             {showRegister && <RegisterUser />}
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
// export default LoginAccount;