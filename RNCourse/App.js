import { StatusBar } from 'expo-status-bar';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList
} from 'react-native';

import {useState} from 'react';
export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);


  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setEnteredGoal('');
    setCourseGoals(currentGoals => [...currentGoals, {text: enteredGoal, id: Math.random().toString()}])
  }


  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          value={enteredGoal}
          onChangeText={goalInputHandler}
        ></TextInput>
        <Button title="Add Goal" onPress={addGoalHandler}></Button>
      </View>
      <FlatList
        data={courseGoals}
        renderItem={itemData => ( <View key={itemData.item.key} style={styles.goalItem}><Text style={styles.goalText}>{itemData.item.text}</Text></View>)}
        alwaysBounceVertical={false}
        keyExtractor={(item, index) => item.id}
        style={styles.goalsContainer}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  inputContainer: {
    alignItems: 'center',
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  textInput: {
    borderColor: '#cccccc',
    borderWidth: 1,
    marginRight: 8,
    padding: 8,
    width: '70%',
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white'

  }
});


