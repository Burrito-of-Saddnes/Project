import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')
const screenWidth = width < height ? width : height

export default StyleSheet.create({
  day: {
    margin: 10,
    color: '#fff'
  },
  txtHeaderDate: {
    color: '#fff',
    fontSize: 18,

  },
  weekdays: {
    margin: 10,
    color: 'white',
    width: screenWidth / 7 - 8,
    textAlign: 'center'
  },
  warpDay: {
    width: screenWidth / 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1F25',
    borderColor: '#1E1F25',
    borderWidth: 1,
    borderRadius: 40,
  },
  icLockRed: {
    width: 13 / 2,
    height: 9,
    position: 'absolute',
    top: 2,
    left: 1
  }
})
