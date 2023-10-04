import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {COLORS, MARGIN, SIZES} from '../utils/theme';

export default function PrimaryButton({children, onPress, flag}) {
  //console.log('value flag: ' + flag);
  //console.log('value children: ' + children);
  if (flag == 1) {
    children = 'ORDER PLACED';
    console.log('if 1: ' + children);
  } else if (flag == 0) {
    console.log('if 0: ' + children);
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer2
        }
        onPress={onPress}
        android_ripple={{color: COLORS.primary}}>
        <Text style={styles.buttonText}> {children} </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: SIZES.btnRadius,
    margin: 2,
    overflow: 'hidden',
  },

  buttonInnerContainer: {
    backgroundColor: COLORS.primary500,
    paddingVertical: MARGIN.btnPaddingVertical,
    paddingHorizontal: 14,
    elevation: 2,
  },

  buttonInnerContainer2: {
    backgroundColor: COLORS.primaryBtn,
    paddingVertical: MARGIN.btnPaddingVertical,
    paddingHorizontal: 14,
    elevation: 2,
  },
  buttonText: {
    color: COLORS.white,
    textAlign: 'center',
    fontWeight: '700',
  },

  buttonText2: {
    color: COLORS.black,
    backgroundColor: '#8fa5e2',
    textAlign: 'center',
    fontWeight: '700',
  },

  pressed: {
    opacity: 0.75,
  },
});
