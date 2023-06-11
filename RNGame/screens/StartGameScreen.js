import {View, StyleSheet, TextInput} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {
    return (
      <View style={styles.inputContainer}>
        <TextInput style={styles.numberInput} maxLength={2} keyboardType='number-pad' autoCapitalize='none' autoCorrect={false}/>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#610834',
    borderRadius: 8,
    //add shadow andorid
    elevation: 4,
    marginHorizontal: 20,
    marginTop: 100,
    padding: 16,
    //add shadow ios
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
  },
  numberInput: {
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    fontSize: 32,
    width: 50,
    fontWeight: 'bold',
    height: 50,
    marginVertical: 8,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.5,
  }
});
