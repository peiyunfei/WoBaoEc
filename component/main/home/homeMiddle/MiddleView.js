import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
} from 'react-native';
import HomeMiddleCommonView from './HomeMiddleCommonView'
import MiddleBottomView from './MiddleBottomView'
import homeTopMiddleLeft from '../../../../json/HomeTopMiddleLeft.json'

/**
 * 中间布局
 */
export default class MiddleView extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.middleView}>
                    {this.renderMiddleLeft()}
                    <View style={styles.middleRight}>
                        {this.renderMiddleRight()}
                    </View>
                </View>
                <MiddleBottomView/>
            </View>
        );
    }

    renderMiddleLeft() {
        let left = homeTopMiddleLeft.dataLeft[0];
        return (
            <TouchableOpacity style={styles.middleLeft}>
                <Image
                    style={styles.img}
                    source={{uri: left.img1}}
                />
                <Image
                    style={styles.img}
                    source={{uri: left.img2}}
                />
                <Text>{left.title}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text>{left.price}</Text>
                    <Text style={{
                        backgroundColor: 'red',
                        color: 'orange',
                        marginLeft: 5
                    }}>{left.sale}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    renderMiddleRight() {
        let right = [];
        let dataRight = homeTopMiddleLeft.dataRight;
        for (let i = 0; i < dataRight.length; i++) {
            let style;
            if (i % 2 !== 0) {
                style = {marginRight: 0.5};
            }
            let view = <HomeMiddleCommonView
                style={style}
                key={i}
                data={dataRight[i]}/>;
            right.push(view);
        }
        return right;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        flexDirection: 'column',
    },
    middleView: {
        flexDirection: 'row',
    },
    middleLeft: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 8,
        paddingBottom: 10,
        marginRight: 0.5,
    },
    middleRight: {
        flex: 1,
        flexDirection: 'column',
    },
    img: {
        width: 100,
        height: 30,
        marginBottom: 8,
    },
});