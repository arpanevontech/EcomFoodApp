import CartItem from "./CartItem";
import { StyleSheet, FlatList, View } from 'react-native'
import { MARGIN } from "../utils/theme";
import PrimaryButton from "./PrimaryButton";

export default function CartItemList({items}) {
  
    function renderMealItem(itemData) {
        const item = itemData.item;
        const mealItemProps = {
          id: item.id,
          title: item.title,
          imageUrl: item.imageUrl
        };
        return <CartItem {...mealItemProps} />;
      }

    


      return (
        <View style={styles.container}>
          <View style={{ flex: 1, flexDirection: "column", paddingHorizontal: 10 }}>
            <FlatList
              data={items}
              keyExtractor={(item) => item.id}
              renderItem={renderMealItem}
            />
          </View>

          
        </View>
      );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding:6,
      },

})