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
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

import RnButton from './componentjs/RnButton';

export default class HelloWorld extends Component {
  constructor(props) {
    super(props);
    //初始化属性
    this.state = {isShow: '\n今天是双11哦,你剁手了吗?'};
  };

  buttonAction = () => {
    //自定义的方法,使用属性来定义
    alert('你点击了按钮的状态:' + this.state.isShow);
  };

  render() {
    return (
      <View style={styles.container}>

        {/*<Text style={styles.welcome}>*/}
          {/*Hello React Native!*/}
        {/*</Text>*/}

        {/*<Image*/}
            {/*style={styles.image}*/}
            {/*source={{uri: 'http://reactnative.cn/scripts/d2285528f3ecd2059cb2fb635802a4f4.png'}}*/}
        {/*/>*/}


        {/*<TouchableOpacity*/}
            {/*style={styles.buttonStyle}*/}
            {/*// onPress={() => {alert('测试一下弹框')}}*/}
            {/*onPress={this.buttonAction}*/}
        {/*>*/}
          {/*<Text style={styles.buttonTextStyle}>确定</Text>*/}
        {/*</TouchableOpacity>*/}

        {/*props属性 text="确定"*/}

        <RnButton title="确定" backgroundColor='red' boject={{a:'哈哈'}} touchAction={()=>{alert("你点击了确定按钮事件")}}/>
        <RnButton title="取消" backgroundColor='gray' boject={{a:'哈哈'}} touchAction={()=>{alert("你点击了取消按钮事件")}}/>

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

  rnButtonStyle:{
    height: 40,
    width: 120,
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

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  image: {
    width: 120,
    height: 120,
    marginRight: 10
  },
});
