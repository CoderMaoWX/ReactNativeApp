/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
} from 'react-native';

let Dimensions = require('Dimensions');
let {width} = Dimensions.get('window');

export default class ScrollViewDemo extends Component {

  constructor(props) {
    super(props);

    //设置可变的初始值
    this.state = {
      //当前页面
      currentPage: 0,
      tipText: "魅蓝E2首创将闪光灯的功能丰富化",
    };

    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  //图片轮播
  componentDidMount() {
    // alert("开始图片轮播展示？");

    let float = 0;
    // 开启一个图片轮播定时器
    setInterval(() => {
      float++;
      if (float>4){
        float = 0;
      }
      //滚动图片
      this.refs.scrollViewKey.scrollTo({x: float*375, y: 0, animated: true});
    }, 1500);
  }


  render() {
    return (
        <View style={styles.container}>

          <ScrollView ref="scrollViewKey" style={styles.scrollViewStyle}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      alwaysBounceHorizontal={false}
                      alwaysBounceVertical={false}
                      pagingEnabled={true}
                      scrollEnabled={true}
                      //监听每次滚动来设置指示器小圆点颜色
                      onMomentumScrollEnd={(e)=>this.setupIndicatorRound(e)}
          >
            {this.renderPictureView()}
          </ScrollView>

          {/*指示器view*/}
          <View style={styles.pageViewStyle}>
            {this.renderIndicatorRound()}
            <Text style={styles.tipTextStyle}>{this.state.tipText}</Text>
          </View>

        </View>
    );
  }

  //每一帧滚动结束时调用
  setupIndicatorRound = (e) => {
    //求出水平方向的偏移量
    let offsetX= e.nativeEvent.contentOffset.x;

    //求出当前的页数
    let currentPage = Math.floor(offsetX / width);
    // console.log("每一帧滚动结束时调用"+currentPage);

    let imageTexts = ['魅蓝E2首创将闪光灯的功能丰富化',
      '参加红包雨活动入手价格还可以更低',
      'P20处理器的跑分甚至比高通625还要高。',
      '由传统的双色闪光灯拓展到4个LED',
      '魅蓝E2正面急速指纹解锁方案支持指纹支付'];

    //更新状态机，重新绘制UI
    this.setState({
      currentPage: currentPage,
      tipText: imageTexts[currentPage]
    });
  }

  //布局子视图
  renderPictureView() {
    let allChild = [];
    let colors = ['red', 'green', 'blue', 'yellow', 'purple'];
    let urls = ['https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=27338403,1928106091&fm=173&s=4C61BB46CA61ACDC187984930100C083&w=640&h=481&img.JPEG',
    'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=444303972,2602678844&fm=173&s=54E798524C9A71DE4EAADABA03005009&w=640&h=427&img.JPEG',
    'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3700359483,954542045&fm=173&s=528398AE46239B4D088C238B0300B08F&w=640&h=480&img.JPEG',
    'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=295555703,1960926021&fm=173&s=6961B9448FE4B15D40757D1A0300C082&w=640&h=411&img.JPEG',
    'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4068503165,3684434935&fm=173&s=4900CF1758726E9E74B8D0C90300E020&w=640&h=475&img.JPEG'];

    //遍历
    for (let i=0; i<5; i++){
      allChild.push(
          <View key={i} style={[styles.imageViewStyle,
            {backgroundColor:colors[i], width:375, height: 120}]}>

            <Image style={styles.imageStyle} source={{uri:urls[i]}} />
          </View>
      );
    }
    return allChild;
  }


  //布局指示器小圆点视图
  renderIndicatorRound() {
    let indicatorArr = [];
    let style;

    //遍历
    for (let i=0; i<5; i++){
      style = (i==this.state.currentPage) ? {color: 'orange'} : {color: 'white'};
      indicatorArr.push(
          <Text key={i} style={[{fontSize:25, color:'white'}, style]}>&bull;</Text>
      );
    }
    return indicatorArr;
  }

}

let styles = StyleSheet.create({
  scrollViewStyle:{

  },

  imageViewStyle:{

  },

  tipTextStyle:{
    fontSize: 12,
    color: 'orange',
    alignSelf: 'center',
    position: 'absolute',
    right: 5,
  },

  pageViewStyle:{
    width: width,
    height: 25,
    backgroundColor: 'rgba(0.0, 0.0, 0.0, 0.4)',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
  },

  container: {
    marginTop:0
  },

  imageStyle:{
    width: 375,
    height: 120,
  },
});

// 输出
module.exports = ScrollViewDemo;
