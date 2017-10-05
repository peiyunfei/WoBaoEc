import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import HomeView from './home/Home'
import MineView from './mine/Mine'
import MoreView from './more/More'
import ShopView from './shop/Shop'

/**
 * 主界面
 */
export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
        }
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="首页"
                    renderIcon={() =>
                        <Image
                            style={styles.iconStyle}
                            source={{uri: 'icon_tabbar_homepage'}}/>}
                    renderSelectedIcon={() =>
                        <Image
                            style={styles.iconStyle}
                            source={{uri: 'icon_tabbar_homepage_selected'}}/>}
                    onPress={() => this.setState({selectedTab: 'home'})}>
                    <HomeView/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'shop'}
                    title="商家"
                    renderIcon={() =>
                        <Image
                            style={styles.iconStyle}
                            source={{uri: 'icon_tabbar_merchant_normal'}}/>}
                    renderSelectedIcon={() =>
                        <Image
                            style={styles.iconStyle}
                            source={{uri: 'icon_tabbar_merchant_selected'}}/>}
                    onPress={() => this.setState({selectedTab: 'shop'})}>
                    <ShopView/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'mine'}
                    title="我的"
                    renderIcon={() =>
                        <Image
                            style={styles.iconStyle}
                            source={{uri: 'icon_tabbar_mine'}}/>}
                    renderSelectedIcon={() =>
                        <Image
                            style={styles.iconStyle}
                            source={{uri: 'icon_tabbar_mine_selected'}}/>}
                    onPress={() => this.setState({selectedTab: 'mine'})}>
                    <MineView/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'more'}
                    title="更多"
                    renderIcon={() =>
                        <Image
                            style={styles.iconStyle}
                            source={{uri: 'icon_tabbar_misc'}}/>}
                    renderSelectedIcon={() =>
                        <Image
                            style={styles.iconStyle}
                            source={{uri: 'icon_tabbar_misc_selected'}}/>}
                    onPress={() => this.setState({selectedTab: 'more'})}>
                    <MoreView/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconStyle: {
        width: 30,
        height: 30,
    },
});