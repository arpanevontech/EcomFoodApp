import MealItem from './MealItem';
import {StyleSheet, FlatList, View} from 'react-native';
import {MARGIN} from '../utils/theme';

export default function MealsList({items}) {
  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }
  return (
    <View style={styles.container}>
      <View style={{flex: 1, flexDirection: 'column', paddingHorizontal: 10}}>
        <FlatList
          data={items}
          keyExtractor={item => item.id}
          renderItem={renderMealItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 6,
    marginTop: MARGIN.top,
  },
});
