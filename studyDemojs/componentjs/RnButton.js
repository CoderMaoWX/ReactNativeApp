/**
 * React Native Demo
 * https://github.com/trinea/react-native-demo
 * @Trinea
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

export default class HelloWorld extends Component {
  // constructor(props) {
  //   super(props);
  //   //初始化属性
  //   this.state = {isShow: '\n今天是双11哦,你剁手了吗?'};
  // };

  buttonAction = () => {

    //解构
    const { touchAction } = this.props;
    //自定义的方法,使用属性来定义
    touchAction();
  };

    render() {

    //解构
    const { title, backgroundColor, boject, fontSizes } = this.props;

    return (
        <View style={styles.container}>

          <TouchableOpacity
              style={[styles.buttonStyle, {backgroundColor:this.props.backgroundColor}]}
              onPress={this.buttonAction}
          >
            <Text style={styles.buttonTextStyle}>{this.props.title}</Text>
          </TouchableOpacity>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  buttonStyle: {
    height: 40,
    width: 120,
    borderRadius: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    overflow: 'hidden'
  },

  buttonTextStyle: {
    color: 'white',
    textAlign: 'center',
  },
});
