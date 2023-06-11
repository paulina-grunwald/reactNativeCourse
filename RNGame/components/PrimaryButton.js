import { View, Text, Pressable, StyleSheet } from 'react-native';

const PrimaryButton = ({ children, ...props }) => {
  const pressHandler= () => {
    console.log('press')
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed]: styles.buttonInnerContainer}
        onPress={pressHandler}
        android_ripple={{ color: '#460425' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );}

  const styles = StyleSheet.create({
    buttonOuter: {
     borderRadius: 28,
     margin: 4,
     overflow: 'hidden',
    },
    buttonInnerContainer: {
      backgroundColor: '#72063c',
      paddingVertical: 8,
      paddingHorizontal: 16,
      elevation: 2,

    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      },
    pressed: {
      opacity: 0.5,
    }
  })

export default PrimaryButton
