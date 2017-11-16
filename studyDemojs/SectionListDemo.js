import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  SectionList,
  TouchableOpacity
} from 'react-native';

let CarData = require('../images/Car.json');

export default class FlexDemo extends Component {

  constructor(props) {
    super(props);
  }

  cellPress = (info) => {
    alert('点击了cell: '+info.item.title);
  }

  _renderItem = (info) => {
    return (
        <TouchableOpacity onPress={() => this.cellPress(info)}>
          <View  style={{flexDirection:'row', justifyContent:'flex-start',  alignItems:'center', height: 60}}>

            <Image style={{marginLeft:15, width:50, height:50 }} source={require('../images/icon8.png')} />

            <Text style={{marginLeft:15}}>
              {info.item.title}
            </Text>

          </View>
        </TouchableOpacity>
    )
  };

  _renderSectionHeader = (info) => {
    return <Text style={{paddingLeft:15, lineHeight:40, textAlign:'justify',  textAlignVertical: 'bottom', backgroundColor: '#e8e8e8', color: 'green', fontSize: 25 }}>
      {info.section.key}
      </Text>
  };

  render() {
    //默认情况下每行都需要提供一个不重复的key属性,不然会有警告
    let sections = [
      { key: "A", data: [{ title: "阿童木" , key: "阿童木"}, { title: "阿玛尼", key: "阿玛尼" }, { title: "爱多多", key: "爱多多" }] },
      { key: "B", data: [{ title: "表哥", key: "表哥" }, { title: "贝贝", key: "贝贝d" }, { title: "表弟", key: "贝弟" }, { title: "表姐", key: "表姐" }, { title: "表叔", key: "表叔" }] },
      { key: "C", data: [{ title: "成吉思汗", key: "贝贝" }, { title: "超市快递", key: "贝d贝" }] },
      { key: "W", data: [{ title: "王磊", key: "王磊" }, { title: "王者荣耀", key: "王者荣耀" }, { title: "往事不能回味", key: "往事不能回味" },{ title: "王小磊", key: "王小磊" }, { title: "王中磊", key: "王中磊s" }, { title: "王大磊", key: "王中磊" }] },
    ];

    return (
          <View style={{flex:1}}>
          <Text style={{lineHeight:64, fontSize:25, alignSelf:'center',}}>通讯录</Text>

          <SectionList
              renderSectionHeader={this._renderSectionHeader}
              renderItem={this._renderItem}
              sections={sections}
              ItemSeparatorComponent={() => <View style={{backgroundColor: '#e8e8e8', height: 1}} />}
              ListHeaderComponent={() => <View style={{ backgroundColor: '#25B960', justifyContent: 'center', height: 80 }}><Text style={{ fontSize: 18, alignSelf:'center', color: '#ffffff' }}>表格头部</Text></View>}
              ListFooterComponent={() => <View style={{ backgroundColor: '#25B960', justifyContent: 'center', height: 64 }}><Text style={{ fontSize: 18, alignSelf:'center', color: '#ffffff' }}>表格尾部</Text></View>}
          />
        </View>
    );
  }

}

