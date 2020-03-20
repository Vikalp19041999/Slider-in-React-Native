import React, { Component } from 'react';
import Slider from '@react-native-community/slider'
import { View, Text, StyleSheet } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: 15
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.appHeader}>
          <Text style={styles.headerText}>Range Slider in React Native</Text>
        </View>
        <View style={styles.mainScreenContainer}>
          <Text style={{ color: 'black' }}>Value of slider is : {this.state.sliderValue}</Text>
          <Slider
            maximumValue={100}
            minimumValue={0}
            minimumTrackTintColor="black"
            maximumTrackTintColor="#000000"
            step={1}
            value={this.state.sliderValue}
            onValueChange={(sliderValue) => this.setState({ sliderValue })}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  appHeader: {
    backgroundColor: 'black',
    height: 60,
    alignItems: 'center'
  },
  headerText: {
    fontSize: 21,
    marginTop: '4%',
    fontWeight: 'bold',
    color: 'snow'
  },
  mainScreenContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  }
});