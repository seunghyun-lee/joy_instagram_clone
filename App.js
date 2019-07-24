/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createStackNavigator, createAppContainer } from "react-navigation";
import MainScreen from "./src/Components/MainScreen";

const AppStackNavigator = createStackNavigator({
  Main: {
    screen: MainScreen
  }
});

export default createAppContainer(AppStackNavigator);
