import { StyleSheet, Text, View } from 'react-native'
import {MEALS, CATEGORIES} from '../../data/dummy-data'
import { useLayoutEffect } from "react";
import MealsList from '../component/MealsList';


export default function MealOverviewScreen({route, navigation}) {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals}/>
 
}

const styles = StyleSheet.create({
 
});
