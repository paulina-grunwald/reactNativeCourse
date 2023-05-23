import { useState } from 'react';
import { StyleSheet, Button, View, FlatList, Modal, Image } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalVisibility] = useState(false);

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler()
  }


  const deletGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  startAddGoalHandler = () => {
    setModalVisibility(true);
  }

  endAddGoalHandler = () => {
    setModalVisibility(false);
  }

  return (
    <View style={styles.appContainer}>
      {!modalIsVisible && (
        <View>
          <Button title="Add Goal" onPress={() => startAddGoalHandler()}/>
        </View>
      )}
      {modalIsVisible && (
        <View>
          <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} />
        </View>
      )}
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteGoal={deletGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
 })
