// app/_layout.jsx
import React from 'react';
import { Stack } from 'expo-router';
import { useColorScheme, StatusBar } from 'react-native';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <>
      {/* status bar color (so status bar icon color matches theme) */}
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />

      <Stack
        // apply header appearance for all screens in this stack
        screenOptions={{
          headerStyle: {
            backgroundColor: isDark ? '#000000' : '#FFFFFF', // header background
            // remove header shadow on Android/iOS if you prefer:
            // elevation: 0,
            // shadowOpacity: 0,
          },
          headerTintColor: isDark ? '#FFFFFF' : '#000000',   // title & back-button color
          headerTitleStyle: {
            fontWeight: '600',
          },
          // you can also set headerTransparent, headerLargeTitleStyle, etc.
        }}
      >
        <Stack.Screen
          name="index"
          options={{ title: 'Welcome' }}
        />

        <Stack.Screen
          name="profile"
          options={{ title: 'Profile' }}
        />
        <Stack.Screen 
        name="login"
        options={{ title: 'Login' }}
        />
      </Stack>
    </>
  );
}
