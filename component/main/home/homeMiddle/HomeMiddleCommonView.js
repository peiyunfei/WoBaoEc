import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
} from 'react-native';

let Dimension = require('Dimensions');
let width = Dimension.get('window').width;
/**
 * 中间布局
 */
export default class HomeMiddleCommonView extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View>
                {this.renderItem()}
            </View>
        );
    }

    renderItem() {
        let data = this.props.data;
        return (
            <TouchableOpacity style={[styles.item, this.props.style]}>
                <View>
                    <Text style={{
                        color: data.titleColor,
                        fontSize: 18,
                        marginBottom: 5,
                    }}>{data.title}</Text>
                    <Text>{data.subTitle}</Text>
                </View>
                <Image
                    style={styles.img}
                    source={{uri: data.rightImage}}
                />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        width: width / 2 - 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 0.5,
        padding: 10,
        backgroundColor: 'white',
    },
    img: {
        width: 65,
        height: 50,
    },
});