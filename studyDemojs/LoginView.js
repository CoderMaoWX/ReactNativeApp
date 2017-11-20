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
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  NavigatorIOS,
} from 'react-native';

import XMGMain from '../Component/XMGMain';

/**
 * 登录操作页面
 */
export default class Login extends Component {

  render() {
    return (
        <NavigatorIOS
            ref="navigator"
            style={{flex: 1}}
            initialRoute={{
              component: LoginView,
              title: '登 录',
            }}
        />
    );
  }
}

class LoginView extends Component {

  username = '';
  password = '';

  onUsernameChanged = (newUsername) => {
    this.username = newUsername;
  };

  onPasswordChanged = (newPassword) => {
    this.password = newPassword;
  };

  //构造函数
  constructor(props) {
    super(props);
    //初始化属性
    this.state = {isShow: '\n今天是双11哦,你剁手了吗?'};
  };

  // 点击登录按钮事件
  loginBtnAction = () => {
    this.dismissKeyboard();

    if (this.username.length>0 && this.password.length>0) {
      this.props.navigator.push({
        component: XMGMain, // 要跳转的版块
        params: {
          logNmae: this.state.username,
          logPwd: this.state.userpwd,
          parentComponent: this,
          ...this.props
        },
      });

    } else {
        alert('用户名或密码不正确,登录失败');
    }
  };

  // 消失键盘事件
  dismissKeyboard (){
    const dismissKeyboard = require('dismissKeyboard');
    dismissKeyboard();
  }

  //登录页面入口 render() {
  render() {
    return (

        // 添加一个点击背景消失键盘
        <TouchableWithoutFeedback onPress={this.dismissKeyboard} >
          <View style={styles.contentViewStyle} >

            {/*头像*/}
            <Image style={styles.imageStyles} source={require('../images/icon.png')} />

            {/*两个输入框*/}
            <TextInput style={styles.textInputStyle}
                       placeholder={'请输入用户名'}
                       clearButtonMode={'always'}
                       onChangeText={this.onUsernameChanged} >
            </TextInput>
            {/*<Image style={{width:40, height:40, marginTop:-50}} source={require('../images/icon7.png')} />*/}

            <TextInput placeholder={'请输入密码'}
                       style={styles.textInputStyle}
                       secureTextEntry={true}
                       onChangeText={this.onPasswordChanged}
                       clearButtonMode={'always'} >
            </TextInput>

            {/*登录按钮*/}
            <TouchableOpacity style={styles.buttonStyle} onPress={()=>this.loginBtnAction()} >
              <Text style={styles.buttonTextStyle}>登录</Text>
            </TouchableOpacity>


            {/*无法登录,忘记密码文案*/}
            <View style={styles.settingViewStyle}>
              <Text style={styles.settingTextStyle}>无法登录?</Text>
              <Text style={styles.settingTextStyle}>忘记密码</Text>
            </View>


            {/*其他操作文案*/}
            <View style={styles.otherViewStyle}>
              <Text style={styles.otherTextStyles}>其他登录方式:</Text>
              <Image style={styles.otherBtnStyles} source={require('../images/icon3.png')} />
              <Image style={styles.otherBtnStyles} source={require('../images/icon7.png')} />
              <Image style={styles.otherBtnStyles} source={require('../images/icon8.png')} />
            </View>


          </View>
        </TouchableWithoutFeedback>
    );
  }
}


const styles = StyleSheet.create({

  contentViewStyle: {
    backgroundColor: '#e2e2e2',
    marginTop:64,

    //flexDirection的默认值是column(竖直轴方向), 而不是row(竖直轴方向)
    flexDirection: 'column',

    //可以使其在可利用的空间中动态地扩张或收缩,flex也只能指定一个数字值
    flex: 1,

    // 决定其子元素沿着主轴的排列方式, flex-start、center、flex-end、space-around以及space-between
    // justifyContent: 'flex-start',

    // 决定其子元素沿着次轴的排列方式,（与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式
    // alignItems enum('flex-start', 'flex-end', 'center', 'stretch')
    // alignItems: 'center',

    //决定了元素在父元素的次轴方向的排列方式（此样式设置在子元素上），其值会覆盖父元素的alignItems的值
    //alignSelf enum('auto', 'flex-start', 'flex-end', 'center', 'stretch')
  },

  imageStyles: {
    alignSelf: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 50,
    marginBottom:30,
  },

  textInputStyle: {
    backgroundColor:'white',
    height: 40,
    marginTop:1,
    paddingLeft:20,
    paddingRight:20,

  },

  buttonStyle: {
    height: 40,
    width: 340,
    borderRadius: 8,
    backgroundColor: 'rgb(62, 149, 255)',
    marginTop:30,
    alignSelf: 'center',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonTextStyle: {
    color:'white',
    fontSize: 15,
  },

  settingViewStyle:{
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    justifyContent: 'space-between',
  },

  settingTextStyle: {
    color: 'rgb(62, 149, 255)',
    fontSize: 12,
  },

  otherViewStyle:{
    marginLeft: 20,
    flexDirection: 'row',
    position:'absolute',
    bottom: 10
  },

  otherTextStyles: {
    color: 'rgb(62, 149, 255)',
    alignSelf: 'center',
    marginBottom:30,
  },

  otherBtnStyles: {
    alignSelf: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom:30,
  },

});
