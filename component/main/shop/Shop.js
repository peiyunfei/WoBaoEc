import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    WebView,
} from 'react-native';

/**
 * 商家
 */
export default class Shop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            canGoBack: false,
            url: 'https://g.meituan.com/av/rainbow/1273404/index.html?utm_source=dt'
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
                <Text style={styles.detail}>商家</Text>
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