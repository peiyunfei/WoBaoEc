import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import TopView from './homeTop/TopView'
import MiddleView from './homeMiddle/MiddleView'
import ShoppingCenter from './homeBottom/shopping/ShoppingCenter'
import ShoppingCenterDetail from './homeBottom/shopping/ShoppingCenterDetail'

/**
 * 主页
 */
export default class Home extends Component {

    render() {
        return (
            <View style={styles.container}>
                {this.renderNavigationBar()}
                <ScrollView>
                    {/*头部布局*/}
                    <TopView/>
                    {/*中间布局*/}
                    <MiddleView/>
                    {/*购物中心*/}
                    <ShoppingCenter
                        onShoppingCenterSelect={(detailUrl, name) => {
                            this.onShoppingCenterSelect(detailUrl, name)
                        }}
                    />

                </ScrollView>
            </View>
        );
    }

    onShoppingCenterSelect(detailUrl, name) {
        let index = detailUrl.indexOf('=');
        let url = detailUrl.substr(index + 1, detailUrl.length);
        this.props.navigator.push({
            component: ShoppingCenterDetail,
            params: {
                url: url,
                name, name,
                ...this.props
            }
        })
    }

    renderNavigationBar() {
        return (
            <View style={styles.navigationBar}>
                <Text style={styles.city}>北京</Text>
                <TextInput
                    style={styles.search}
                    underlineColorAndroid="transparent"
                    placeholder={'请输入商家、品类、商圈'}
                    multiline={true}
                />
                <Image
                    style={styles.navRightImg}
                    source={{uri: 'icon_homepage_message'}}
                />
                <Image
                    style={styles.navRightImg}
                    source={{uri: 'icon_homepage_scan'}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8'
    },
    navigationBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FF6000',
        paddingBottom: 8,
        paddingTop: 8,
        paddingLeft: 8,
    },
    city: {
        color: 'white',
        fontSize: 16
    },
    search: {
        flex: 1,
        height: 35,
        backgroundColor: 'white',
        borderRadius: 30,
        marginRight: 8,
        marginLeft: 8,
        padding: 10,
        textAlignVertical: 'top',
    },
    navRightImg: {
        width: 25,
        height: 25,
        marginRight: 8,
    },
});