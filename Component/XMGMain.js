
import React, { Component } from 'react';

import {
  TabBarIOS,
  NavigatorIOS
} from 'react-native';


let Home = require('../Component/XMGHome');
let Find = require('../Component/XMGFind');
let Message = require('../Component/XMGMessage');
let Mine = require('../Component/XMGMine');


export default class XMGMain extends Component{

  constructor(props){
    super(props);
    this.state = {
      selectedTab: 'home',
    }
  }

  render() {
  return (
      <TabBarIOS
          tintColor="orange"
          barTintColor="white" >

        {/*/!*首页*!/*/}
        {/*<TabBarIOS.Item*/}
            {/*icon= {{uri:'tabbar_home.png', scale: 2}}*/}
            {/*title="首页"*/}
            {/*selected={this.state.selectedTab == 'home'}*/}
            {/*onPress={()=>{this.setState({selectedTab: 'home'})}}*/}
        {/*>*/}
          {/*<NavigatorIOS*/}
              {/*tintColor = "orange"*/}
              {/*style={{flex:1}}*/}
              {/*initialRoute = {*/}
                {/*{*/}
                  {/*component: Home, // 具体的版块*/}
                  {/*title:'网易',*/}
                  {/*leftButtonIcon:{uri:'navigationbar_friendattention.png'},*/}
                  {/*rightButtonIcon:{uri:'navigationbar_pop.png'}*/}
                {/*}*/}
              {/*}*/}
          {/*/>*/}
        {/*</TabBarIOS.Item>*/}


        <TabBarIOS.Item
            title="消息"
            icon={{uri:'tabbar_message_center.png', scale: 2}}
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}>

          <NavigatorIOS
              style={{flex:1}}
              initialRoute = {
                {
                  component: Message, // 具体的版块
                  title:'消息'
                }
              }
          />

        </TabBarIOS.Item>


        {/*发现*/}
        <TabBarIOS.Item
            icon={{uri:'tabbar_discover.png', scale: 2}}
            title="发现"
            badge='3'
            selected={this.state.selectedTab === 'discover'}
            onPress={() => {
              this.setState({
                selectedTab: 'discover',
              });
            }}>

          <NavigatorIOS
              style={{flex:1}}
              initialRoute = {
                {
                  component: Find, // 具体的版块
                  title:'发现'
                }
              }
          />

        </TabBarIOS.Item>


        {/*我的*/}
        <TabBarIOS.Item
            icon={{uri:'tabbar_profile.png', scale: 2}}
            title="我的"
            selected={this.state.selectedTab === 'mine'}
            onPress={() => {
              this.setState({
                selectedTab: 'mine',
              });
            }}>

          <NavigatorIOS
              style={{flex:1}}
              initialRoute = {
                {
                  component: Mine, // 具体的版块
                  title:'我的'
                }
              }
          />

        </TabBarIOS.Item>

      </TabBarIOS>
  );
}
};

// 输出类
module.exports = XMGMain;