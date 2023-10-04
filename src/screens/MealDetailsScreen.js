import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import List from '../component/List';
import MealDetails from '../component/MealDetails';
import Subtitle from '../component/Subtitle';
import {MEALS} from '../../data/dummy-data';
import {useLayoutEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addOrder, removeOrder} from '../Store/redux/order';
import {addCart, removeCart} from '../Store/redux/order';
import {COLORS, MARGIN} from '../utils/theme';
import PrimaryButton from '../component/PrimaryButton';
import IconButtons from '../component/IconButtons';

export default function MealDetailsScreen({route, navigation}) {
  const OrderMealIds = useSelector(state => state.orderCarts.ids);
  const OrderCartIds = useSelector(state => state.orderCarts.idsOrderCart);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;
  const mealIdCart = route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const mealIsFavorite = OrderMealIds.includes(mealId);
  const mealIsOrder = OrderCartIds.includes(mealIdCart);
  function changeStatusHandler() {
    if (mealIsFavorite) {
      dispatch(removeOrder({id: mealId}));
    } else {
      dispatch(addOrder({id: mealId}));
    }
  }

  function addOrderHandler() {
    if (mealIsOrder) {
      dispatch(removeCart({id: mealIdCart}));
    } else {
      dispatch(addCart({id: mealIdCart}));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={{padding: 10}}>
            <IconButtons
              onPress={changeStatusHandler}
              flag={mealIsFavorite ? 1 : 0}
            />
          </View>
        );
      },
    });
  }, [navigation, changeStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <View style={{backgroundColor: '#d3dce9'}}>
        <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
        <Text style={styles.heading}> {selectedMeal.title} </Text>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textstyle={styles.detailText}
        />

        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal.ingredients} />

            <Subtitle>STEPS</Subtitle>
            <List data={selectedMeal.steps} />
          </View>
        </View>

        <View style={styles.btnContainer}>
          <PrimaryButton onPress={addOrderHandler} flag={mealIsOrder ? 1 : 0}>ADD ORDER</PrimaryButton>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 340,
    resizeMode: 'cover',
  },

  heading: {
    padding: 10,
    textAlign: 'center',
    fontFamily: 'serif',
    fontSize: 18,
    color: COLORS.primary,
    fontWeight: 'bold',
    marginLeft: 10,
    textDecorationLine: 'underline',
    textTransform: 'capitalize',
  },

  detailText: {
    color: '#044d7eF',
  },

  listContainer: {
    width: '80%',
  },

  listOuterContainer: {
    flex: 1,
    alignItems: 'center',
  },

  btnContainer: {
    marginTop: MARGIN.top,
    marginBottom: MARGIN.bottom,
    marginHorizontal: 10,
  },

  rootContainer: {},
});
