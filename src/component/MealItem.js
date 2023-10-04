import {StyleSheet, Text, View, Pressable, Image, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MealDetails from './MealDetails';
import { COLORS } from '../utils/theme';
export default function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();

  function selectMealItemHandler() {
    navigation.navigate('MealDetail', {
      mealId: id,
    });
  }

  return (
    <Pressable
      android_ripple={'#ccc'}
      style={({pressed}) => (pressed ? styles.Pressedbutton : null)}
      onPress={selectMealItemHandler}>
      <View style={styles.innerContainer}>
        <View style={styles.mealItems}>
          <Image source={{uri: imageUrl}} style={styles.image} />
          <Text style={styles.inputStyle}>{title}</Text>
        </View>

        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    fontFamily: 'serif',
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
    padding: 5,
    color: COLORS.primary,
    margin: 8,
  },

  image: {
    width: '100%',
    height: 200,
  },

  mealItems: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
  },

  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },

  Pressedbutton: {
    opacity: 0.8,
  },
});
