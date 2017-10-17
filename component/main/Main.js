import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
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
            theme: this.props.theme,
        }
    }

    render() {
        return (
            <TabNavigator>
                {/*首页*/}
                {this.renderTabBarItem('首页', 'icon_tabbar_homepage',
                    'icon_tabbar_homepage_selected', 'home', HomeView)}

                {/*商家*/}
                {this.renderTabBarItem('商家', 'icon_tabbar_merchant_normal',
                    'icon_tabbar_merchant_selected', 'shop', ShopView)}

                {/*我的*/}
                {this.renderTabBarItem('我的', 'icon_tabbar_mine',
                    'icon_tabbar_mine_selected', 'mine', MineView)}

                {/*更多*/}
                {this.renderTabBarItem('更多', 'icon_tabbar_misc',
                    'icon_tabbar_misc_selected', 'more', MoreView)}
            </TabNavigator>
        );
    }

    renderTabBarItem(title, iconName, selectedIconName, selectedTab, Component) {
        return (
            <TabNavigator.Item
                title={title}
                selectedTitleStyle={styles.selectedTitle}
                renderIcon={() =>
                    <Image
                        style={styles.iconStyle}
                        source={{uri: iconName}}/>}
                renderSelectedIcon={() =>
                    <Image
                        style={styles.iconStyle}
                        source={{uri: selectedIconName}}/>}
                selected={this.state.selectedTab === selectedTab}
                onPress={() => this.setState({selectedTab: selectedTab})}>
                <Component {...this.props} theme={this.state.theme}/>
            </TabNavigator.Item>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    iconStyle: {
        width: 30,
        height: 30,
    },
    selectedTitle: {
        color: 'orange',
    }
});