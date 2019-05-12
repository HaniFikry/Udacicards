import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Decks from './Decks'
import DeckDetails from './DeckDetails'
import AddCard from './AddCard';
import  Quiz from './Quiz';

const MainNavigator = createStackNavigator({
  Decks: {
    screen: Decks
  },
  DeckDetails: {
    screen: DeckDetails
  },
  AddCard: {
    screen: AddCard
  },
  Quiz: {
    screen: Quiz
  }
});

export default MainNavigator;