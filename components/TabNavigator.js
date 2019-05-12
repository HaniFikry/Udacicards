import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import MainNavigator from './MainNavigator'
import AddDeck from './AddDeck';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const TabNavigator = createBottomTabNavigator({
  Decks: {
    screen: MainNavigator
  },
  NewDeck: {
    screen: AddDeck
  },
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = MaterialCommunityIcons;
      let iconName;
      if (routeName === 'Decks') {
        iconName = `cards${focused ? '' : '-outline'}`;
      } else if (routeName === 'NewDeck') {
        iconName = `plus`;
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={30} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#7c53c3',
    inactiveTintColor: 'gray',
  },
});

export default createAppContainer(TabNavigator);