import React from 'react';
import { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import 'react-native-gesture-handler';
import DateTime from 'react-native-customize-selected-date'
import _ from 'lodash'

export default class Calaendario extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: ''
    }
  }

  onChangeDate(date) {
    alert(date)
  }

  renderChildDay(day) {
    if (_.includes(['2018-11-15', '2018-12-10', '2018-12-20'], day)) {
      return <Image source={require('./ic_lock_green.png')} style={styles.icLockRed} />
    }
    if (_.includes(['2018-11-16', '2018-12-12', '2018-12-21', '2018-12-18'], day)) {
      return <Image source={require('./ic_lock_red.png')} style={styles.icLockRed} />
    }
  }

  render() {
    return (
      <View>
        <DateTime
          date={this.state.time}
          // changeDate={(date) => this.onChangeDate(date)}
          format='YYYY-MM-DD'
          renderChildDay={(day) => this.renderChildDay(day)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icLockRed: {
    width: 13 / 2,
    height: 9,
    position: 'absolute',
    top: 2,
    left: 1
  }
});
