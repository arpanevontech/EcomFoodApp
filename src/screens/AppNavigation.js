import {StyleSheet, Image, View, StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from './Dashboard';
import Splash from './Splash';
import {COLORS} from '../utils/theme';
import Login from './Login';
import SignUp from './SignUp';

import {Provider} from 'react-redux';
import {store} from '../Store/redux/store';
import Favorite from './Favorite';
import Cart from './Cart';
import MealOverviewScreen from './MealOverviewScreen';
import MealDetailsScreen from './MealDetailsScreen';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();


function TabNavigator() {
  return (
    <Tab.Navigator
     
      screenOptions={{
        headerStyle: {backgroundColor: COLORS.primary},
        headerTintColor: 'white',
        tabBarActiveTintColor: COLORS.primary500,
      }}>
      <Tab.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          headerTitle: 'MEAL CATEGORY',
          tabBarIcon:null
        }}
      />
      <Tab.Screen
        name="favorite"
        component={Favorite}
        options={{
          headerTitle: 'FAVORITE MEALS',
        }}
      />
      <Tab.Screen
        name="cart"
        component={Cart}
        options={{
          headerTitle: 'YOUR ORDERS',
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="splash"
          screenOptions={{
            headerTintColor: '#FFFFFF',
            headerStyle: {backgroundColor: COLORS.primary},
          }}>
          <Stack.Screen
            name="splash"
            component={Splash}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="dashboard"
            component={TabNavigator}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="signUp"
            component={SignUp}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="CategoryGrid"
            component={MealOverviewScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="MealDetail"
            component={MealDetailsScreen}
            options={{
              headerShown: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
