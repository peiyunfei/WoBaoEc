import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native';

/**
 * 主页
 */
export default class Home extends Component {

    render() {
        return (
            <View style={styles.container}>
                {this.renderNavigationBar()}
            </View>
        );
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