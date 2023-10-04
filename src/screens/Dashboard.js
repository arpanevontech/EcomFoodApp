import { StyleSheet, View,FlatList } from 'react-native'
import { COLORS } from '../utils/theme';
import { CATEGORIES} from '../../data/dummy-data'
import CategoryGridTile from '../component/CategoryGridTile';


export default function Dashboard({navigation}) {
  
  function renderCategotyItem(itemData) {
    function pressHandler() {
      navigation.navigate("CategoryGrid", {
        categoryId: itemData.item.id,
        categoryName: itemData.item.title,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  

    
  return (
    <FlatList
    data={CATEGORIES}
    keyExtractor={(item) => item.id}
    renderItem={renderCategotyItem}
    numColumns={2}
  />
  )
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#c3d5db'
  },

})