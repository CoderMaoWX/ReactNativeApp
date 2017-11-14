
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  ListView,
  TouchableOpacity,
  AlertIOS
} from 'react-native';

let Wine = require('../images/Wine.json');
let Dimensions = require('Dimensions');
let {width} = Dimensions.get('window');

export default class WineListDemo extends Component {

  constructor(props){
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => (row1 !== row2),
      }),
    };
    this.state.dataSource = this.state.dataSource.cloneWithRows(Wine);
  }

  render(){
    return (
        <ListView dataSource={this.state.dataSource}
                  renderRow={this.renderRow}
        />
    )
  }

  renderRow(rowData, sectionID, rowID, highlightRow){
    console.log("图片是什么"+rowData.image);

    return(
        <TouchableOpacity activeOpacity={0.5} onPress={()=>AlertIOS.alert('点击了第'+rowID+'行')}>
          <View style={styles.contentViewStyle} >

            {/*左边图片*/}
            <Image source={require("../images/10.jpg")} style={styles.imageStyle} />

            {/*右边文字视图*/}
            <View style={styles.rightViewStyle} >
              <Text style={styles.rightTopTextStyle} > {rowData.name} </Text>
              <Text style={styles.rightBottomTextStyle} > ¥{rowData.money} </Text>
            </View>

          </View>
        </TouchableOpacity>
    )
  }
}

let styles = StyleSheet.create({
  contentViewStyle:{
    padding: 10,
    flexDirection:'row',
    backgroundColor:'white',
    borderBottomWidth:0.5,
    borderBottomColor:'#e8e8e8',
  },

  imageStyle:{
    width:60,
    height:60,
    marginRight:15,
  },

  rightViewStyle:{
    // flexDirection:'column',
    justifyContent:'center'
  },

  rightTopTextStyle:{
    marginRight: 15,
    marginBottom: 10,
    fontSize: 14,
    width:width*0.75,
  },

  rightBottomTextStyle:{
    color:'red',
    fontSize: 12,
  },

});