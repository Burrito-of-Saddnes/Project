import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create(
	{
		mainColor: {
			marginTop: "30%",
			flex: 1,
			backgroundColor: '#1E1F25',
			alignItems: 'center',
			justifyContent: 'center',
		},


		button: {
			height: "15%",
			width: "60%",
			backgroundColor: '#24509A',
			borderColor: '#48BBEC',
			borderWidth: 1,
			borderRadius: 15,
			justifyContent: 'center'
		},

		// verificationButton: {
		// 	width: "60%",
		// 	height: "15%",
		// 	backgroundColor: '#24509A',
		// 	margin: 10,
		// 	borderColor: '#48BBEC',
		// 	borderWidth: 1,
		// 	borderRadius: 30,
		// 	justifyContent: 'center'
		// },

		addingMenuButton: {
			marginLeft: 10,
			width: 40,
			height: 40,
			// backgroundColor: 'blue',
			// borderColor: '#48BBEC',
			// borderWidth: 1,
			borderRadius: 40,
			justifyContent: 'center',
			alignContent:'center',
			alignItems: 'center',
			alignSelf:'center',
		},

		role: {
			height: "14%",
			width: "30%",
			backgroundColor: '#000',
			borderColor: '#48BBEC',
			borderWidth: 1,
			justifyContent: 'center',
			borderRadius: 30,
			shadowColor: "#000",
			shadowOffset: {
				width: 0,
				height: 3,
			},
			shadowOpacity: 0.27,
			shadowRadius: 4.65,

			elevation: 6,
		},

		roleMenu: {
			height: "30%",
			// minHeight: "30%",
			width: "70%",
			borderRadius: 30,
			borderColor: '#48BBEC',
			borderWidth: 1,
			paddingTop: 10,
			paddingBottom: 10,
			paddingLeft: 20,
			paddingRight: 20,
			backgroundColor: '#fff',
			justifyContent: "space-around",
			alignItems: 'center',
			position: 'absolute'
		},

		validationMenu: {
			height: windowHeight * 0.3,
			// minHeight: "30%",
			width: "70%",
			borderRadius: 30,
			borderColor: '#48BBEC',
			borderWidth: 1,
			paddingTop: 10,
			paddingBottom: 10,
			paddingLeft: 20,
			paddingRight: 20,
			backgroundColor: '#fff',
			justifyContent: "space-around",
			alignItems: 'center',
			position: 'absolute'
		},

		addingMenu: {
			alignItems: "center",
			backgroundColor: "#efefef",
			height: windowHeight * 0.7,
			width: "90%",
			borderRadius: 30,
			borderColor: '#48BBEC',
			borderWidth: 1,
			padding: 15,
			position: 'absolute',
		},

		addingRoleMenu: {
			height: "100%",
			width: "100%",
			alignItems: 'center',
			justifyContent: "space-around",
			
		},

		text: {
			fontSize: 15,
			color: 'white',
			alignSelf: 'center'
		},
		textB:
		{
			fontSize:15,
			color: 'black',
			alignSelf:'center',
			borderRadius:50,
		},

		forgottenText: {
			fontSize: 13,
			color: '#8B807A',
		},

		inputText: {

			height: "15%",
			width: "100%",
			backgroundColor: '#ecf0f1',
			textAlign: 'center',
			borderRadius: 15,

		},

		// testImput: {
		// 	height: "100%",
		// 	width: "100%",
		// 	backgroundColor: '#ecf0f1',
		// 	textAlign: 'center',
		// 	borderRadius: 15,
		// },
		// testButton: {
		// 	// marginLeft: 10,
		// 	width: "50%",
		// 	height: "50%",
		// 	// backgroundColor: 'blue',
		// 	// borderColor: '#48BBEC',
		// 	// borderWidth: 1,
		// 	borderRadius: 40,
		// 	justifyContent: 'center',
		// 	alignContent:'center',
		// 	alignItems: 'center',
		// 	alignSelf:'center',
		// },

		input: {
			width: 50,
			height: 50,
			padding: 10,
			marginBottom: 10,
			backgroundColor: '#ecf0f1'
		},

		container: {
			backgroundColor: '#1E1F25',
			flex: 1,
			// height: windowHeight,
			flexDirection: 'column',
		},

		childrenContainer: {
			width: "40%",
			flexDirection: 'row',
			alignSelf: 'flex-end',
		},

		nameContainer: {
			flex: 1,
			flexDirection: 'row',
			// alignItems: 'center',
			// justifyContent: 'center',

		},

		addContainer: {
			flex: 1,
			alignItems: "flex-start",
			justifyContent: 'center',
			marginTop: 10,
			
		},

		littleButton: {
			padding: 5,
			width: "50%",
			backgroundColor: '#ecf0f1',
			borderColor: '#48BBEC',
			borderWidth: 1,
			borderRadius: 40,
		},

		inputName: {
			fontSize: 15,
			width: "90%",
	
			backgroundColor: '#ecf0f1',
			textAlign: 'center',
			borderRadius: 30,
		},

		profileButton: {
			padding: 5,
			width: "50%",
			backgroundColor: '#ecf0f1',
			borderColor: '#48BBEC',
			borderWidth: 1,
			borderRadius: 40,
		},

		settingsButton: {
			padding: 5,
			width: "50%",
			backgroundColor: '#ecf0f1',
			borderColor: '#48BBEC',
			borderWidth: 1,
			borderRadius: 40,
		},

		inputMenuText: {
			height: "30%",
			width: "100%",
			borderColor: '#48BBEC',
			borderWidth: 1,
			backgroundColor: '#ecf0f1',
			textAlign: 'center',
			borderRadius: 30,
			
			
		},

		roleCoosingButton: {
			height: "30%",
			width: "70%",
			borderColor: '#48BBEC',
			borderWidth: 1,
			backgroundColor: '#ecf0f1',
			borderRadius: 30,
			justifyContent: 'center'
		},

		scrollView: {
			flex: 1,
			backgroundColor: '#1E1F25',
		},



	}
);  