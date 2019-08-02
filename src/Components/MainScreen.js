import React, { Component } from "react";
import { StyleSheet, View, Text, Platform } from "react-native";
import { Icon } from "native-base";
import {
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

import AddMediaTab from "../AddTabNavigator/AddMediaTab";
import HomeTab from "../AddTabNavigator/HomeTab";
import LikesTab from "../AddTabNavigator/LikesTab";
import ProfileTab from "../AddTabNavigator/ProfileTab";
import SearchTab from "../AddTabNavigator/SearchTab";

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeTab,
    },
    Search: {
      screen: SearchTab,
    },
    AddMedia: {
      screen: AddMediaTab,
    },
    Likes: {
      screen: LikesTab,
    },
    Profile: {
      screen: ProfileTab,
    }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tapBarOptions: {
      style: {
        ...Platform.select({
          ios: {
            backgroundColor: 'white',
          }
        })
      },
      iconStyle: { height: 100 },
      activeTintColor: '#e91e63',
      inactiveTintColor: '#d1cece',
      upperCaseLabel: false,
      showIcon: true,
      showLabel: false
    }
  }
);

const AppTabContainer = createAppContainer(AppTabNavigator);

class MainScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return <AppTabContainer />;
  }
}

export default MainScreen;

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
