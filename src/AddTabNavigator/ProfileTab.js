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
import EntypoIcon from "react-native-vector-icons/Entypo";

export default class ProfileTab extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      reputation: 0,
      profile: {},
      postCount: 0,
      followingCount: 0,
      followerCount: 0,
      activeIndex: 0,
    };
  }

  segmentClicked = (index) => {
    this.setState({
      activeIndex: index
    });
  }

  fetchAccount(username) {
    const data = {
      id: 3,
      jsonrpc: '2.0',
      method: 'call',
      params: ["database_api", "get_account", [[username]]],
    };
    return fetch("https://api.steemit.com", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => res.result[0]);;
  }

  fetchFollowCount(username) {
    const data = {
      id: 4,
      jsonrpc: '2.0',
      method: 'call',
      params: ["follow_api", "get_follow_count", [username]],
    };
    return fetch("https://api.steemit.com", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => res.result);
  }

  componentWillMount() {
    const username = "anpigon";
    this.fetchAccount(username).then(
      ({ name, post_count, reputation, json_metadata }) => {
        const { profile } = JSON.parse(json_metadata); // JSON 파싱
        const log =
          Math.log(parseInt(reputation.substring(0, 4))) / Math.log(10);
        this.setState({
          name, // 이름
          reputation: Math.max(reputation.length - 1 + log - parseInt(log) - 9, 0) * 9 + 25, // 명성도 계산
          postCount: post_count, // 포스팅 수
          profile, // 프로필 정보
        });
      }
    );

    this.fetchFollowCount(username).then(
      ({ following_count, follower_count }) => {
        this.setState({
          followingCount: following_count, // 팔로잉 수
          followerCount: follower_count, // 팔로워 수
        });
      }
    );
  }

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="person" style={{ color: tintColor }} />
    )
  };

  render() {
    const {
      name,
      reputation,
      profile,
      postCount,
      followingCount,
      followerCount
    } = this.state;

    return (
      <Container style={{ flex: 1, backgroundColor: "white" }}>
        <Header>
          <Left>
            <Icon name="md-person-add" style={{ paddingLeft: 10 }} />
          </Left>
          <Body>
            <Text>{name}</Text>
          </Body>
          <Right>
            <EntypoIcon
              name="black-in-time"
              style={{ paddingRight: 10, fontSize: 32 }}
            />
          </Right>
        </Header>
        <Content>
          <View style={{ flexDirection: "row", padding: 10 }}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Image
                source={{ url: "https://steemitimages.com/u/anpigon/avatar" }}
                style={{ width: 75, height: 75, borderRadius: 37.5 }}
              />
            </View>
            <View style={{ flex: 3 }}>
              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                <View style={{ alignItems: "center" }}>
                  <Text>{postCount}</Text>
                  <Text style={{ fontSize: 10, color: "gray" }}>posts</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                  <Text>{followerCount}</Text>
                  <Text style={{ fontSize: 10, color: "gray" }}>follower</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                  <Text>{followingCount}</Text>
                  <Text style={{ fontSize: 10, color: "gray" }}>following</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Button
                  bordered
                  dark
                  style={{
                    flex: 4,
                    marginLeft: 10,
                    justifyContent: "center",
                    height: 30,
                    marginTop: 10
                  }}
                >
                  <Text>Edit Profile</Text>
                </Button>
                <Button
                  bordered
                  dark
                  small
                  icon
                  style={{
                    flex: 1,
                    marginRight: 10,
                    marginLeft: 5,
                    justifyContent: "center",
                    height: 30,
                    marginTop: 10
                  }}
                >
                  <Icon name="settings" />
                </Button>
              </View>
            </View>
          </View>
          <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
            <Text style={{ fontWeight: "bold" }}>{profile.name} ({reputation.toFixed(2)})</Text>
            <Text>{profile.about}</Text>
            <Text>{profile.website}</Text>
          </View>
          <View style={{ flexDirection:'row', justifyContent:'space-around', borderTopWidth:1, borderTopColor: '#eae5e5'}}>
            <Button transparent
            onPress={() => this.segmentClicked(0)}
            active={this.state.activeIndex === 0}>
              <Icon name='ios-apps' style={[this.state.activeIndex === 0 ? {} : {color: 'grey'}]}/>
            </Button>
            <Button transparent
            onPress={() => this.segmentClicked(1)}
            active={this.state.activeIndex === 1}>
              <Icon name='ios-list' style={[this.state.activeIndex === 1 ? {} : {color: 'grey'}]}/>
            </Button>
            <Button transparent
            onPress={() => this.segmentClicked(2)}
            active={this.state.activeIndex === 2}>
              <Icon name='ios-people' style={[this.state.activeIndex === 2 ? {} : {color: 'grey'}]}/>
            </Button>
            <Button transparent
            onPress={() => this.segmentClicked(3)}
            active={this.state.activeIndex === 3}>
              <Icon name='ios-bookmark' style={[this.state.activeIndex === 3 ? {} : {color: 'grey'}]}/>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}