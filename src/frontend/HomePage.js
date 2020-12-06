import React from 'react';
import { Component } from 'react';
import {
	View,
	Text,
	TouchableHighlight,
	TextInput,
	ScrollView,
	Modal,
  ImageBackground,
  Image,

} from 'react-native';
import Style from './Style';
import 'react-native-gesture-handler';
import Calendario from './Calendar';
import { YellowBox } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);
YellowBox.ignoreWarnings(["VirtualizedList: missing keys for items, make sure to specify a key or id property on each item or provide a custom keyExtractor."])

const renderItem = ({ item }) => {
	return (
		<View style={{ flexDirection: "row", padding: 10 }}>

			<View style={{ width: "80%" }}>

				<View style={{ alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "white" }}>
					<Text style={{ fontSize: 20, color: "cyan" }}>
						{item.name}
					</Text>
				</View>

				<View style={{ alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "white" }}>
					<Text style={{ fontSize: 20, color: "cyan" }}>
						{item.phone}
					</Text>
				</View>

			</View>

			<View style={{ alignItems: "center", justifyContent: "center", width: "20%", borderWidth: 1, borderColor: "white" }}>
				<Text style={{ fontSize: 20, color: "cyan" }}>
					{item.role}
				</Text>
			</View>
		</View>
	);
}


export default class HomePage extends Component {

	constructor(props) {
		super(props)

		this.state = {
			hollidayName: '',
			addingName: null,
			addingMobilePhone: null,
			addingRoleSelection: 'Choose role',
			addingDisplayed: false,
			addingRoleDisplayed: "none",
			listOfPersons: [],
		}
	}

	handleHollidayName = (text) => {
		this.setState({ hollidayName: text })
	};

	handleAddingName = (text) => {
		this.setState({ addingName: text })
	}

	handleAddingMobilePhone = (text) => {
		this.setState({ addingMobilePhone: text })
	}

	toggleAddingWithCancel() {
		this.setState(
			{
				addingDisplayed: !this.state.addingDisplayed
			}
		);
	};

	toggleAddingWithAccept() {
		this.setState(
			{
				addingDisplayed: !this.state.addingDisplayed
			}
		);
		if (this.state.addingName != null && this.state.addingMobilePhone != null && this.state.addingRoleSelection != null) {
			this.arr();
			this.state.listOfPersons.push({ name: this.state.addingName, phone: this.state.addingMobilePhone, role: this.state.addingRoleSelection });
			this.setState({ addingName: null, addingMobilePhone: null, addingRoleSelection: 'Choose role' });
		}
		else {
			console.log('пошёл нахер')
		}
	};

	arr() {
		const inputResult = [
			{
				name: this.state.addingName,
				phone: this.state.addingMobilePhone,
				role: this.state.addingRoleSelection
			}
		]
		console.log(inputResult)
	};


	toggleAddingRoleToVisible() {
		this.setState(
			{
				addingRoleDisplayed: "flex"
			}
		);
	};

	toggleAddingRoleToHide() {
		this.setState(
			{
				addingRoleDisplayed: "none"
			}
		);
	};

	setAddingRoleValue(newAdingRole) {
		this.setState(
			{
				addingRoleSelection: newAdingRole
			}
		);
		this.toggleAddingRoleToHide();
	};

	onProfilePage = () => {
		const { navigation } = this.props;
		navigation.navigate('Profile')
	};

	onChatPage = () => {
		const { navigation } = this.props;
		navigation.navigate('Chat')
	};

	onNotesPage = () => {
		const { navigation } = this.props;
		navigation.navigate('Notes')
	}


	render() {
		const pickerValues = [
			{
				title: 'A',
				value: 'a'
			},
			{
				title: 'B',
				value: 'b'
			},
			{
				title: 'C',
				value: 'c'
			},
			{
				title: 'D',
				value: 'd'
			},
			{
				title: 'E',
				value: 'e'
			},
		]

		return (
			<ScrollView style={Style.container}>

				<View style={Style.childrenContainer}>
					<View style={{ flex: 1, alignItems: "center" }}>
						<TouchableHighlight style={Style.addingMenuButton} underlayColor="null" onPress={this.onProfilePage}>
              				<Image
              				  style={{ width: 40, height: 40, borderRadius: 40 }}
              				  source={require('./2.png')}
              				/>
						</TouchableHighlight>
					</View>

					<View style={{ flex: 1, alignItems: "center" }}>
						<TouchableHighlight style={Style.addingMenuButton} underlayColor="null" onPress={() => console.log('Нет ты')} >
              				<Image
              				  style={{ width: 40, height: 40, borderRadius: 40 }}
              				  source={require('./5.png')}
              				/>
						</TouchableHighlight>
					</View>


				</View>

				<View>
					<Calendario />
				</View>

				<View style={Style.nameContainer}>

					<View style={{ flex: 0.6, alignItems: "center" }}>
						<TextInput
							placeholder={'Название'}
							placeholderTextColor="#ADA89F"
							style={Style.inputName}
							autoCapitalize="none"
							value={this.state.hollidayName}
							onChangeText={this.handleHollidayName}
						/>
					</View>

					<View style={{ flex: 0.2, alignItems: "center", justifyContent: "center" }}>
						<TouchableHighlight style={Style.addingMenuButton} underlayColor="null" onPress={this.onNotesPage} >
              				<Image
              				  style={{ width: 40, height: 40, borderRadius: 40 }}
              				  source={require('./4.png')}
              				/>
						</TouchableHighlight>
					</View>

					<View style={{ flex: 0.2, alignItems: "center", justifyContent: "center" }}>
						<TouchableHighlight style={Style.addingMenuButton} underlayColor="null" onPress={this.onChatPage}>
              				<Image
              				  style={{ width: 40, height: 40, borderRadius: 40 }}
              				  source={require('./3.png')}
              				/>
						</TouchableHighlight>
					</View>

				</View>

				<View style={Style.addContainer}>
					<View style={{ alignItems: "center" }}>
						<TouchableHighlight style={Style.addingMenuButton} underlayColor="null" onPress={() => this.toggleAddingWithCancel()}>
              				{/* <View style={Style.addingMenuButton}> */}
              				<Image
              				  style={{ width: 40, height: 40, borderRadius: 40 }}
              				  source={require('./1.png')}
              				/>
              				{/* </View> */}
            			</TouchableHighlight>
					</View>

					<Modal
						visible={this.state.addingDisplayed}
						animationType={"slide"}
						transparent={true}
					>
						<View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
							<View style={Style.addingMenu}>
								<Text>Complete input</Text>
								<View style={{ justifyContent: "space-around", width: "100%", flex: 0.3, alignItems: "center" }}>
									<TextInput
										placeholder={'Name'}
										placeholderTextColor="#ADA89F"
										style={Style.inputMenuText}
										autoCapitalize="none"
										value={this.state.addingName}
										onChangeText={this.handleAddingName}
									/>
									<TextInput
										keyboardType="number-pad"
										placeholder={'Mobile Phone'}
										placeholderTextColor="#ADA89F"
										style={Style.inputMenuText}
										autoCapitalize="none"
										value={this.state.addingMobilePhone}
										onChangeText={this.handleAddingMobilePhone}
									/>
									<TouchableHighlight style={Style.roleCoosingButton} underlayColor='null' onPress={() => this.toggleAddingRoleToVisible()} >
										<Text style={Style.textB}>{this.state.addingRoleSelection}</Text>
									</TouchableHighlight>
								</View>

								<View style={{ width: "100%", flex: 0.6, alignItems: "center" }}>

									<View style={[Style.addingRoleMenu, { display: this.state.addingRoleDisplayed },]}>
										{pickerValues.map((value, index) => {
											return <TouchableHighlight
												key={index}
												underlayColor='null'
												onPress={() => this.setAddingRoleValue(value.value)}
												style={Style.role}
											>
												<Text style={Style.text}>{value.title}</Text>
											</TouchableHighlight>
										}
										)
										}
										<TouchableHighlight
											underlayColor='null'
											onPress={() => this.toggleAddingRoleToHide()}
											style={{ paddingTop: 1, paddingBottom: 1, height: "10%" }}
										>
											<Text style={{ color: '#999' }}>Cancel</Text>
										</TouchableHighlight>

									</View>

								</View>

								<View style={{ width: "100%", flex: 0.1, alignItems: "center" }}>
									<TouchableHighlight underlayColor='null' onPress={() => this.toggleAddingWithCancel()} >
										<Text style={{ color: '#999' }}>Cancel</Text>
									</TouchableHighlight>

									<TouchableHighlight underlayColor='null' onPress={() => this.toggleAddingWithAccept()}>
										<Text style={{ color: '#999' }}>Accept</Text>
									</TouchableHighlight>
								</View>
							</View>
						</View>
					</Modal>
				</View>

				<View>
					<FlatList
						data={this.state.listOfPersons}
						renderItem={renderItem}
					/>
				</View>


			</ScrollView>
		);
	}
}