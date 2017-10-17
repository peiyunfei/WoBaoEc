import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    WebView,
    TouchableOpacity,
} from 'react-native';

/**
 * 购物中心详情页
 */
export default class ShoppingCenterDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            canGoBack: false,
            url: this.props.url + '?uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D77' +
            '7DFC717E10FC0B4271&utm_term=6.6&utm_source=AppStore&utm_content=5C7B6342814C7' +
            'B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&version_name=6.6&userid=1604' +
            '95643&utm_medium=iphone&lat=23.134709&utm_campaign=AgroupBgroupD100' +
            'Ghomepage_shoppingmall_detailH0&token=b81UqRVf6pTL4UPLLBU7onkvyQoAAAAAAQIAAC' +
            'QVmmlv_Qf_xR-hBJVMtIlq7nYgStcvRiK_CHFmZ5Gf70DR47KP2VSP1Fu5Fc1ndA' +
            '&lng=113.373890&f=iphone&ci=20&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderNavigationBar()}
                <WebView
                    startInLoadingState={true}
                    ref={webView => this.webView = webView}
                    source={{uri: this.state.url}}
                    onNavigationStateChange={(e) =>
                        this.onNavigationStateChange(e)}
                />
            </View>
        );
    }

    onNavigationStateChange(e) {
        this.setState({
            canGoBack: e.canGoBack,
        })
    }

    goBack() {
        if (this.state.canGoBack) {
            this.webView.goBack();
        } else {
            this.props.navigator.pop();
        }
    }

    renderNavigationBar() {
        return (
            <View style={styles.navigationBar}>
                <TouchableOpacity
                    onPress={() => this.goBack()}>
                    <Image
                        style={styles.navLeftImg}
                        source={{uri: 'icon_camera_back_highlighted'}}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={styles.navRightImg}
                        source={{uri: 'icon_mine_setting'}}
                    />
                </TouchableOpacity>
                <Text style={styles.detail}>{this.props.name}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navigationBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF6000',
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 8,
    },
    navLeftImg: {
        width: 25,
        height: 25,
        marginLeft: 8,
        position: 'absolute',
        left: 0,
    },
    navRightImg: {
        width: 25,
        height: 25,
        marginRight: 8,
        position: 'absolute',
        right: 0,
    },
    detail: {
        fontSize: 16,
        color: 'white',
    },
});