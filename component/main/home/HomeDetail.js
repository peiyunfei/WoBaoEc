import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class HomeDetail extends Component {

    render() {
        return (
            <TouchableOpacity onPress={() => {
                this.pushToHome()
            }}>
                <View style={styles.container}>
                    <Text>详情页</Text>
                </View>
            </TouchableOpacity>
        );
    }

    pushToHome() {
        this.props.navigator.pop();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});