
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from '../styles'

export default class MainPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
      </View>
    );
  }
}

