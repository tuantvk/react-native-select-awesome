import React, { PureComponent, Fragment } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
// import SplashScreen from 'react-native-splash-screen';

const DATAS = [
  { id: 1, label: 'JavaScript', value: 'js' },
  { id: 2, label: 'Java', value: 'java' },
  { id: 3, label: 'Swift', value: 'sw' },
  { id: 4, label: 'Python', value: 'py' },
]

export class RNSelect extends PureComponent {
  state = {
    isPicker: false,
    select: {},
    searchText: '',
  }

  componentDidMount = () => {
    // SplashScreen.hide()
  };


  static defaultProps = {
    value: '',
    placeholder: 'Select value',
    opacity: 1,
    width: '100%',
    height: 50,
    styleItem: {},
    stylePicker: {},
  };

  _modalPicker = () => this.setState({
    isPicker: !this.state.isPicker
  });

  _selectValue = select => {
    this.setState({ select, searchText: select.label });
    this._modalPicker();
  }

  _changeText = searchText => {
    this.setState({ searchText });
    // let searchs = DATAS.map(d => d.toUpperCase().indexOf())
  }

  render() {
    let props = this.props;
    const { isPicker, select, searchText } = this.state;
    // console.warn('textInput ', this.textInput)
    return (
      <View style={{ margin: 25 }}>
        {/* <Fragment> */}
        <TouchableOpacity activeOpacity={props.opacity} onPress={this._modalPicker}>
          <TextInput
            ref={ref => this.textInput = ref}
            value={isPicker ? searchText : select.label}
            placeholder={props.placeholder}
            editable={isPicker}
            onChangeText={text => this._changeText(text)}
            // autoFocus={isPicker}
            style={{ color: '#000', fontSize: 16, borderBottomColor: '#cacaca', borderBottomWidth: 1, padding: 5 }}
          />
        </TouchableOpacity>
        <Text>{isPicker ? "up" : "down"}</Text>
        {/* </Fragment> */}
        {isPicker &&
          <View style={[styles.picker, props.stylePicker]}>
            {
              DATAS.map((d, i) =>
                <Text key={i}
                  style={[styles.item, props.styleItem]}
                  onPress={() => this._selectValue(d)}
                >
                  {d.label}
                </Text>
              )
            }
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  picker: {
    borderColor: '#cacaca',
    borderWidth: 1,
    margin: 5,
    padding: 10
  },
  item: {
    color: '#000',
    marginBottom: 12,
    fontSize: 16
  }
});

export default RNSelect;