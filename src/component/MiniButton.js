import { StyleSheet, Text, View ,Pressable} from 'react-native'
import React from 'react'
import { COLORS, MARGIN, SIZES } from '../utils/theme';

export default function MiniButton({children,onPress}) {
  return (
    <View style={styles.buttonOuterContainer}>
    <Pressable
      style={({ pressed }) =>
        pressed
          ? [styles.pressed, styles.buttonInnerContainer]
          : styles.buttonInnerContainer
      }
      onPress={onPress}
      android_ripple={{ color: COLORS.primary }}
    >
      <Text style={styles.buttonText}> {children} </Text>
    </Pressable>


  </View>
);
}


const styles = StyleSheet.create({
buttonOuterContainer: {
  borderRadius: SIZES.btnRadius,
  margin: 2,
  overflow: "hidden",
  
},

buttonInnerContainer: {
  backgroundColor: COLORS.primaryBtn,
  elevation: 2,
  paddingHorizontal:10,
  paddingVertical:2

  
},
buttonText: {
  color: COLORS.white,
  textAlign: "center",
  fontWeight:'700',
  

},

pressed: {
  opacity: 0.75,
},
});