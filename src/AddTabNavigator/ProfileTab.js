import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  Icon,
  Container,
  Content,
  Header,
  Left,
  Right,
  Button,
  Body
} from "native-base";
import EntypoIcon from 'react-native-vector-icons/Entypo';

export default class ProfileTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-person" style={{ color: tintColor }} />
    ),
  };

  render() {
    return (
      <Container style={{ flex: 1, backgroundColor: 'white' }}>
        <Header>
          <Left>
            <Icon name="md-person-add" style={{ paddingLeft: 10 }} />
          </Left>
          <Body>
            <Text>anpigon</Text>
          </Body>
          <Right>
            <EntypoIcon
              name="black-in-time"
              style={{ paddingRight: 10, fontSize: 32 }}
            />
          </Right>
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

