import { StyleSheet } from 'react-native'
import {
  View,
  Text
} from 'react-native';

const GoalItem = (props) => {
  return (
    <View key={props.id} style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white'
  }
})
