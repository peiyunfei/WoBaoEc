import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableNativeFeedback
} from 'react-native';

/**
 * 主页
 */
export default class Home extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>主页</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});