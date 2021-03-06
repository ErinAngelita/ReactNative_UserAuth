import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './Comp/Login.js';
import MyPage from './Comp/MyPage.js';

const RootStack =
  StackNavigator({
    Login: {
      name: "Login",
      screen: Login,
    },
    MyPage: {
      name: "MyPage",
      screen: MyPage,
    }
  },
  {initialRouteName: 'Login'}
)

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName:"",
      password:"",
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <RootStack />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
