import { StyleSheet, Text, View } from 'react-native'
import MealsList from '../component/MealsList'
import { useSelector } from "react-redux";
import { MEALS } from '../../data/dummy-data';
import { COLORS } from '../utils/theme';


export default function Favorite() {

  const OrderMealIds = useSelector(state => state.orderCarts.ids);

  const orderCarts = MEALS.filter((meal) =>
  OrderMealIds.includes(meal.id)
);

if (orderCarts.length === 0) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.textStyle}>You have not favorite Meals Yet.</Text>
    </View>
  );
}


  return (
     <MealsList items={orderCarts} />

  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#c3d5db",
    justifyContent: "center",
    alignItems: "center",
  },

  textStyle: {
    fontFamily: "serif",
    fontSize: 28,
    color: COLORS.primary,
    fontWeight: "700",
    textAlign: "center",
  },
})