import {StyleSheet, Pressable, Image} from 'react-native';

export default function IconButtons({onPress, flag}) {
  
  return (
    <Pressable
      style={({pressed}) => pressed && styles.pressed}
      onPress={onPress}>
      {flag == 0 ? (
        <Image
          style={styles.img}
          source={require('../../data/image/star.png')}
        />
      ) : (
        <Image
          style={styles.img}
          source={require('../../data/image/star-filled.png')}
        />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.65,
    elevation: 4,
  },

  img: {
    width: 24,
    height: 24,
    resizeMode: 'cover',
  },
});
