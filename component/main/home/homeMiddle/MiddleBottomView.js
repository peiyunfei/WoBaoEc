import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
} from 'react-native';
import HomeMiddleCommonView from './HomeMiddleCommonView'
import homeTopMiddle from '../../../../json/HomeTopMiddle.json'
import homeD6 from '../../../../json/Home_D6.json'

let Dimension = require('Dimensions');
let width = Dimension.get('window').width;
/**
 * 中下布局
 */
export default class MiddleBottomView extends Component {

    render() {
        return (
            <View style={styles.container}>
                {this.renderAd()}
                <View style={styles.other}>
                    {this.renderOther()}
                </View>
            </View>
        );
    }

    renderAd() {
        let data = homeTopMiddle.data[0];
        return (
            <TouchableOpacity style={styles.ad}>
                <View>
                    <Text style={{fontSize: 22, color: 'red', marginBottom: 5}}>{data.title}</Text>
                    <Text>{data.subTitle}</Text>
                </View>
                <Image
                    style={styles.adImg}
                    source={{uri: data.image}}
                />
            </TouchableOpacity>
        );
    }

    renderOther() {
        let item = [];
        let dataArr = homeD6.data[0].resource.cateArea;
        for (let i = 0; i < dataArr.length; i++) {
            let style;
            if (i % 2 === 0) {
                style = {marginRight: 0.5};
            }
            let view = <HomeMiddleCommonView
                style={style}
                key={i}
                data={dataArr[i]}/>;
            item.push(view);
        }
        return item;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    ad: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        marginBottom: 10,
    },
    adImg: {
        width: 50,
        height: 50,
    },
    other: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});