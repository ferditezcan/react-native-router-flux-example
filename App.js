import React from 'react';
import Routes from './src/Routes';
import * as Font from 'expo-font';

export default class App extends React.Component {

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
  }

  render() {
    return (
      <Routes />
    )
  }
}

