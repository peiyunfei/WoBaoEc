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
 * 商家
 */
export default class Shop extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>商家</Text>
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