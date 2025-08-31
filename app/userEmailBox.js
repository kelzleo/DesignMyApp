// UserEmailBox.js
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles/index.styles';

const UserEmailBox = ({ email }) => {
  return (
    <View style={styles.repcount}>
      <Text style={styles.repcountH2}>{email}</Text>
    </View>
  );
};

export default UserEmailBox;
