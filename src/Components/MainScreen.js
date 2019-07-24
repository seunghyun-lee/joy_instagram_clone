import React, { Component } from "react";
import { StyleSheet, View, Text, Platform } from "react-native";
import { Icon } from "native-base";
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";

import AddMediaTab from "../AddTabNavigator/AddMediaTab";
import HomeTab from "../AddTabNavigator/HomeTab";
import LikesTab from "../AddTabNavigator/LikesTab";
import ProfileTab from "../AddTabNavigator/ProfileTab";
import SearchTab from "../AddTabNavigator/SearchTab";

const AppTabNavigator = createMaterialTopTabNavigator(
  {
    HomeTab: {
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
      activeTintColor: '#FFF',
      inactiveTintColor: '#d1cece',
      upperCaseLabel: false,
      showLabel: false,
      showIcon: true
    }
  }
);

const AppTabContainer = createAppContainer(AppTabNavigator);

class MainScreen extends Component {
  static navigationOptions = {
    headerLeft: <Icon name="ios-camera" style={{ paddingLeft: 10 }} />,
    title: 'AwesomApp',
    headerRight: <Icon name="ios-send" style={{ paddingRight: 10 }} />
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
