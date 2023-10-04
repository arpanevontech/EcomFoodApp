import {StyleSheet, Text, View, Pressable, Image, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS, SIZES} from '../utils/theme';
import MiniButton from './MiniButton';
import {useSelector, useDispatch} from 'react-redux';
import {MEALS} from '../../data/dummy-data';
import { useState } from 'react';
import { incQuantity,decQuantity} from '../Store/redux/order';


export default function CartItem({id, title, imageUrl}) {
  const dispatch = useDispatch();
  const OrderMealIds = useSelector(state => state.orderCarts.idsOrderCart);
  const OrderCountIds = useSelector(state => state.orderCarts.cartItemsCount);
  const [text,setText] = useState(1);

  const orderCarts = MEALS.filter(meal => OrderMealIds.includes(meal.id));

  const orderCount = MEALS.filter(meal => OrderCountIds.includes(meal.id));

  const navigation = useNavigation();

  function selectMealItemHandler() {
    navigation.navigate('MealDetail', {
      mealId: id,
    });
  }

  function pressAddHandler() {
    if (orderCount) {
      console.log("orderId",id)
      const countAdd = dispatch(incQuantity({id: orderCount}));
      console.log('addddddd '+countAdd);
      setText(text+1);
    }
  }

  function pressRemoveHandler() {
    if (orderCount) {
      dispatch(decQuantity({id: orderCount}));
      setText(text-1)
      //console.log('add item count :' +text );
    } else {
      console.log('log here');
    }
  }

  return (
    <View style={{flex: 1}}>
      <Pressable
        android_ripple={'#ccc'}
        style={({pressed}) => (pressed ? styles.Pressedbutton : null)}
        onPress={selectMealItemHandler}>
        <View style={styles.innerContainer}>
          <View style={styles.mealItems}>
            <Image source={{uri: imageUrl}} style={styles.image} />
            <Text style={styles.inputStyle}>{title}</Text>
          </View>
        </View>
      </Pressable>

      <View style={{padding: 10}}>
        <Text style={styles.count}>{text}</Text>
      </View>

      <View style={styles.btnContainer}>
        <MiniButton onPress={pressAddHandler}> + </MiniButton>
        <MiniButton onPress={pressRemoveHandler}> - </MiniButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    flex: 1,
    fontFamily: 'serif',
    fontSize: SIZES.regular,
    fontWeight: '600',
    padding: 5,
    color: COLORS.primary,
    alignSelf: 'center',
    paddingLeft: 10,
  },

  image: {
    width: 90,
    height: 90,
    resizeMode: 'center',
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
    flexDirection: 'row-reverse',
  },

  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },

  Pressedbutton: {
    opacity: 0.8,
  },

  btnContainer: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    flexDirection: 'row-reverse',
    marginHorizontal: 20,
  },

  count: {
    textAlign: 'right',
    marginHorizontal: 40,
    fontWeight: '700',
    fontFamily: 'serif',
    color: COLORS.primary,
  },
});
