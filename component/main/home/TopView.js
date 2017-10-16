import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';
import TopListView from './TopListView'

let Dimension = require('Dimensions');
let width = Dimension.get('window').width;
let TopMenu = require('../../../json/TopMenu.json');
/**
 * 头部的轮播图
 */
export default class TopView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: 0,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={(e) => this.onScrollAnimationEnd(e)}
                >
                    {this.renderScrollViewItem()}
                </ScrollView>
                <View style={styles.indicator}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    }

    /**
     * 当一帧滚动结束的时候调用
     * @param e
     */
    onScrollAnimationEnd(e) {
        // 求出当前的页码
        let currentPage = Math.floor(e.nativeEvent.contentOffset.x / width);
        // 更新状态机
        this.setState({
            activePage: currentPage
        });
    }

    renderScrollViewItem() {
        let itemArr = [];
        let dataArr = TopMenu.data;
        for (let i = 0; i < dataArr.length; i++) {
            let view = <TopListView
                key = {i}
                dataArr={dataArr[i]}/>
            itemArr.push(view);
        }
        return itemArr;
    }

    renderIndicator() {
        let indicator = [];
        let style;
        for (let i = 0; i < 2; i++) {
            style = (i === this.state.activePage) ? {color: 'orange'} : {color: 'gray'};
            let text = <Text
                key={i}
                style={[{fontSize: 25}, style]}
            >&bull;</Text>;
            indicator.push(text);
        }
        return indicator;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    indicator: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
});