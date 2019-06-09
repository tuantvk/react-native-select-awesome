// At the top of your file
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import RNSelect from 'react-native-select-awesome';

const LANGS = [
  { id: 1, label: 'Java', value: 'java' },
  { id: 2, label: 'JavaScript', value: 'js' },
  { id: 3, label: 'Python', value: 'py' },
  { id: 4, label: 'C', value: 'c' },
  { id: 5, label: 'PHP', value: 'php' },
];

const itemCustom = { color: '#146eff' };

// Later on in your component
export default class RNSelectExample extends Component {
  render() {
    return (
      <View>
        <Text style={{ marginVertical: 20 }}>React Native Select Awesome</Text>
        <RNSelect
          datas={LANGS}
          placeholder="Select lang"
          height={60}
          styleItem={itemCustom}
        />
      </View>
    )
  }
}
