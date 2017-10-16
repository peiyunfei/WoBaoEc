import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Switch,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

/**
 * 更多
 */
export default class More extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderNavigationBar()}
                <ScrollView>
                    <View style={{marginTop: 20}}>
                        {this.renderItem('扫一扫', '', false)}
                    </View>
                    <View style={{marginTop: 20}}>
                        {this.renderItem('省流量模式', '', true)}
                        {this.renderItem('消息提醒', '', false)}
                        {this.renderItem('邀请好友使用我宝电商', '', false)}
                        {this.renderItem('清空缓存', '1.94M', false)}
                    </View>
                    <View style={{marginTop: 20}}>
                        {this.renderItem('问券调查', '', false)}
                        {this.renderItem('支付帮助', '', false)}
                        {this.renderItem('网络诊断', '', false)}
                        {this.renderItem('关于我宝', '', false)}
                        {this.renderItem('我要反馈', '', false)}
                    </View>
                    <View style={{marginTop: 20}}>
                        {this.renderItem('精品应用', '', false)}
                    </View>
                </ScrollView>
            </View>
        );
    }

    renderItem(leftText, rightText, isSwitch) {
        let right = isSwitch ?
            <Switch
                value={this.state.isOpen}
                // 开启状态时的背景颜色
                onTintColor={'#FF6000'}
                // 开关上圆形按钮的背景颜色
                thumbTintColor={'#00FF00'}
                // 关闭状态时的背景颜色
                tintColor={'#B2B2B2'}
                onValueChange={() => {
                    this.setState({
                        isOpen: !this.state.isOpen
                    })
                }}
            /> :
            <Image
                style={styles.arrow}
                source={{uri: 'home_arrow'}}
            />;
        return (
            <TouchableOpacity>
            <View style={styles.item}>
                <Text style={{fontSize: 16, color: 'black'}}>{leftText}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text>{rightText}</Text>
                    {right}
                </View>
            </View>
            </TouchableOpacity>
        );
    }

    renderNavigationBar() {
        return (
            <View style={styles.navigationBar}>
                <Text style={styles.more}>更多</Text>
                <Image
                    style={styles.navRightImg}
                    source={{uri: 'icon_mine_setting'}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#e5e5e5'
    },
    navigationBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF6000',
        paddingBottom: 8,
        paddingTop: 8,
        paddingLeft: 8,
    },
    more: {
        fontSize: 16,
        color: 'white',
    },
    navRightImg: {
        width: 25,
        height: 25,
        marginRight: 8,
        tintColor: 'white',
        position: 'absolute',
        right: 0,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 8,
        marginBottom:5
    },
    arrow: {
        width: 22,
        height: 22,
    },
});