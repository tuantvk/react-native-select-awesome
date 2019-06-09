# React Native Select Awesome - Library for React Native on platform Android and iOS

![Demo](https://github.com/tuantvk/react-native-select-awesome/assets/example_1.jpg)
![Demo](https://github.com/tuantvk/react-native-select-awesome/assets/example_1.jpg)

# Table of Content

1. [What is React Native Select Awesome?](#1-what-is-react-native-select-awesome)
2. [Getting Started](#2-getting-started)
3. [Props](#3-props)
4. [Example](#4-example)
5. [License](#5-license)

## 1. What is React Native Select Awesome?

React Native Select Awesome ingenious and dynamic front-end framework created by TuanTVK to build cross platform Android & iOS mobile apps using ready to use generic components of React Native.

## 2. Getting Started

### Install

```shell
npm install react-native-select-awesome --save

# or use yarn

yarn add react-native-select-awesome
```

Import
```ES6
import RNSelect from 'react-native-select-awesome';
```
or 
```ES5
var RNSelect = require('react-native-select-awesome');
```

## 3. Props

| Props  | Description | Default | PropTypes |
| ------------- | ------------- | ------------- | ------------- |
| datas | specify the options the user can select from | `[]` | `array` **isRequired** |
| value  | control the current value  | `""`  | `string` |
| placeholder | change the text displayed when no option is selected | `Select value` | `string` |
| width | width of input | `100%` | `string` |
| height | height of input | `50` | `number` |
| styleInput | style customize for input | `{}` | `object` |
| styleItem | style customize for item select | `{}` | `object` |
| stylePicker | style customize container picker | `{}` | `object` |
| notFind | change the text displayed when no find value  | `Not Find` | `string` |
| selectValue | return value when select | `() => { }` | `func` |
| rightIcon | customize icon or text right | `null` | `element` |

## 4. Example

```js
// At the top of your file
import React, { Component } from 'react';
import { View } from 'react-native';
import RNSelect from 'react-native-select-awesome';

const LANGS = [
  {id: 1, label: 'Java', value: 'java'},
  {id: 2, label: 'JavaScript', value: 'js'},
  {id: 3, label: 'Python', value: 'py'},
  {id: 4, label: 'C', value: 'c'},
  {id: 5, label: 'PHP', value: 'php'},
];

const itemCustom = {color: 'f00' };

// Later on in your component
export default class RNSelectExample extends Component {
  render() {
    return(
      <View>
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
```

## 5. License

MIT Licensed. Copyright (c) TuanTVK 2019.