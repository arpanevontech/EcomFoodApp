import { StyleSheet, Text, View } from 'react-native'
import CartItemList from '../component/CartItemList'
import { useSelector } from "react-redux";
import { MEALS } from '../../data/dummy-data';
import { COLORS } from '../utils/theme';
import PrimaryButton from '../component/PrimaryButton';


export default function Cart() {



  const OrderMealIds = useSelector(state => state.orderCarts.idsOrderCart);

  const orderCarts = MEALS.filter((meal) =>
  OrderMealIds.includes(meal.id)
);


if (orderCarts.length === 0) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.textStyle}>You have not Order Meals Yet.</Text>
    </View>
  );
}



function OrderItemHandler(){

      console.log('order please :'+ MEALS.filter((meal) => OrderMealIds.includes(meal.idsOrderCart)))

};


  return (
    <View style={{flex:1}}>
    <CartItemList items={orderCarts} />
    
    <View style={{padding:10}}>
          <PrimaryButton onPress={OrderItemHandler}> Order Now </PrimaryButton>
    
          </View>
   
    </View>

     

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