import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Platform, SafeAreaView} from 'react-native';

const PreferenceSurvey: React.FC = () => {
  const [goal, setGoal] = useState('');
  const [daysPerWeek, setDaysPerWeek] = useState('');
  const [focus, setFocus] = useState('');
  const [routineType, setRoutineType] = useState('');
  const [createdAt] = useState(new Date().toISOString());

  const handleSubmit = () => {
    // You can send this data to your backend or process it as needed
    const surveyData = { goal, daysPerWeek, focus, routineType, createdAt };
    console.log('Survey Data:', surveyData);
    // Add navigation or feedback here
  };

  return (
     <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Preference Survey</Text>
      
      <Text style={styles.label}>Goal</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your goal"
        value={goal}
        onChangeText={setGoal}
      />

      <Text style={styles.label}>Days Per Week</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. 3"
        value={daysPerWeek}
        onChangeText={setDaysPerWeek}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Focus</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Strength, Cardio"
        value={focus}
        onChangeText={setFocus}
      />

      <Text style={styles.label}>Routine Type</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Full Body, Split"
        value={routineType}
        onChangeText={setRoutineType}
      />

      <Button title="Submit" onPress={handleSubmit} />
     </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
  label: { fontSize: 16, marginTop: 12 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 8, marginTop: 4 },
});

export default PreferenceSurvey;