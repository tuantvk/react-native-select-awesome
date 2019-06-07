import React, { PureComponent, Fragment } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const DATAS = [
  { id: 1, label: 'JavaScript', value: 'js' },
  { id: 2, label: 'Java', value: 'java' },
  { id: 3, label: 'Swift', value: 'sw' },
  { id: 4, label: 'Python', value: 'py' },
]

export class RNSelect extends PureComponent {
  state = {
    isPicker: false,
  }

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

  _selectValue = () => {
    this._modalPicker();
  }

  render() {
    let props = this.props;
    const { isPicker } = this.state;
    return (
      <Fragment>
        <TouchableOpacity activeOpacity={props.opacity} onPress={this._modalPicker}>
          <TextInput
            value={props.value}
            placeholder={props.placeholder}
            editable={false}
          />
        </TouchableOpacity>
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
      </Fragment>
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
    marginBottom: 12,
    fontSize: 15
  }
});

export default RNSelect;