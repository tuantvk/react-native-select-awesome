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
	{ id: 5, label: 'Python TuanTV', value: 'pytv' },
]

export class RNSelect extends PureComponent {
	state = {
		isPicker: false,
		select: {},
		searchText: '',
		datas: DATAS,
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
		datas: DATAS,
		notFind: 'Not find'
	};

	_modalPicker = () => {
		console.log('this.refs.textInput', this.refs.textInput)
		// this.refs.textInput.focus();
		this.setState({
			isPicker: !this.state.isPicker
		});
	}

	_selectValue = select => {
		this.setState({ select, searchText: select.label });
		this._modalPicker();
	}

	_changeText = searchText => {
		let datas = [];
		DATAS.forEach(x => {
			if (x.label.trim().toUpperCase()
				.includes(searchText.trim().toUpperCase())) {
				datas.push(x);
			}
		});
		if (searchText.length <= 0) {
			this.setState({ searchText, datas: DATAS });
		} else {
			this.setState({ searchText, datas });
		}
	}

	_listSelect = () => {
		const { searchText, datas } = this.state;
		if (searchText.length > 0 && datas.length <= 0) {
			return <Text>{this.props.notFind}</Text>
		}
		return (
			datas.map((d, i) =>
				<Text key={i}
					style={[styles.item, this.props.styleItem]}
					onPress={() => this._selectValue(d)}
				>
					{d.label}
				</Text>
			))
	}

	render() {
		let props = this.props;
		const { isPicker, select, searchText } = this.state;
		return (
			<View style={{ margin: 25 }}>
				{/* <Fragment> */}
				<TouchableOpacity activeOpacity={props.opacity} onPress={this._modalPicker}>
					<TextInput
						ref="textInput"
						value={isPicker ? searchText : select.label}
						placeholder={props.placeholder}
						editable={isPicker}
						onChangeText={text => this._changeText(text)}
						autoFocus={isPicker}
						style={{ color: '#000', fontSize: 16, borderBottomColor: '#cacaca', borderBottomWidth: 1, padding: 5 }}
					/>
				</TouchableOpacity>
				<Text>{isPicker ? "up" : "down"}</Text>
				{/* </Fragment> */}
				{isPicker &&
					<View style={[styles.picker, props.stylePicker]}>
						{this._listSelect()}
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