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
 * 更多
 */
export default class More extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>更多</Text>
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