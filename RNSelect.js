import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import {
  string,
  array,
  element,
  object,
  number,
  func,
  oneOfType,
} from 'prop-types';

export class RNSelect extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPicker: false,
      select: {},
      searchText: '',
      datas: props.datas,
    }
  }

  static defaultProps = {
    value: '',
    placeholder: 'Select value',
    width: '100%',
    height: 50,
    styleInput: {},
    styleItem: {},
    stylePicker: {},
    notFind: 'Not find',
    selectValue: () => { },
    rightIcon: null,
    label: 'label'
  };

  _modalPicker = () => {
    const { isPicker } = this.state;
    if (!isPicker) {
      this._textInput.focus();
    }
    this.setState({
      isPicker: !this.state.isPicker
    });
  }

  _selectValue = select => {
    this.setState({
      select,
      searchText: select[this.props.label]
    });
    this._textInput.blur();
    this.props.selectValue(select);
  }

  _changeText = searchText => {
    const { datas, label } = this.props;
    let dataSearch = [];
    datas.forEach(x => {
      if (x[label].trim().toUpperCase()
        .includes(searchText.trim().toUpperCase())) {
        dataSearch.push(x);
      }
    });
    if (searchText.length <= 0) {
      this.setState({ searchText, datas });
    } else {
      this.setState({ searchText, datas: dataSearch });
    }
  }

  _listSelect = () => {
    const { notFind, styleItem, label } = this.props;
    const { searchText, datas } = this.state;
    if (searchText.length > 0 && datas.length <= 0) {
      return <Text>{notFind}</Text>
    }
    return (
      datas.map((d, i) =>
        <Text key={i}
          style={[styles.item, styleItem]}
          onPress={() => this._selectValue(d)}
        >
          {d[label]}
        </Text>
      ))
  }

  _touchOutView = () => {
    this._textInput.blur();
    this.setState({ isPicker: !this.state.isPicker });
  }

  render() {
    const {
      placeholder,
      styleInput,
      stylePicker,
      rightIcon,
      label,
    } = this.props;
    const {
      isPicker,
      select,
      searchText
    } = this.state;
    return (
      <View style={styles.select}>
        <View style={styles.row}>
          <TextInput
            ref={(input) => { this._textInput = input; }}
            value={isPicker ? searchText : select[label]}
            placeholder={placeholder}
            onChangeText={text => this._changeText(text)}
            underlineColorAndroid="transparent"
            onFocus={this._modalPicker}
            onBlur={this._touchOutView}
            style={[
              styles.input,
              { width: rightIcon ? '95%' : '100%' },
              { ...styleInput }
            ]}
          />
          {
            rightIcon ?
              <View style={styles.rightIcon}>
                {rightIcon}
              </View>
              : null
          }
        </View>
        {isPicker &&
          <View style={[styles.picker, stylePicker]}>
            {this._listSelect()}
          </View>
        }
      </View>
    )
  }
}

RNSelect.propTypes = {
  value: string,
  placeholder: string,
  label: string,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
  styleInput: object,
  styleItem: object,
  stylePicker: object,
  datas: array.isRequired,
  notFind: string,
  selectValue: func,
  rightIcon: element
}

const styles = StyleSheet.create({
  select: {
    zIndex: 99,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  picker: {
    borderColor: '#cacaca',
    borderWidth: 1,
    marginVertical: 5,
    padding: 10
  },
  item: {
    color: '#000',
    marginBottom: 12,
    fontSize: 16
  },
  input: {
    height: 50,
    color: '#000',
    fontSize: 16,
    borderBottomColor: '#cacaca',
    borderBottomWidth: 1,
    paddingVertical: 5
  },
  rightIcon: {
    width: '5%',
    marginTop: 10
  }
});

export default RNSelect;