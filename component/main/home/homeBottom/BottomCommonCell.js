import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

/**
 * 首页底部公共部分
 */
export default class BottomCommonCell extends Component {

    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <View style={styles.item}>
                    <Image
                        style={styles.img}
                        source={{uri: this.props.leftImage}}
                    />
                    <Text>{this.props.leftText}</Text>
                </View>
                <View style={styles.item}>
                    <Text>{this.props.rightText}</Text>
                    <Image
                        style={styles.arrow}
                        source={{uri: 'icon_cell_rightArrow'}}
                    />
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: 'white',
        marginBottom: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    arrow: {
        width: 8,
        height: 13,
        marginLeft: 5,
    },
    img: {
        width: 20,
        height: 20,
        marginRight: 5
    },
});