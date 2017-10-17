import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
} from 'react-native';
import BottomCommonCell from '../BottomCommonCell'

/**
 * 猜你喜欢
 */
export default class GuessLike extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: 'http://bj.meituan.com/ptapi/getScenesList/?theme=cheap&tab=all&ci=1&limit=20',
            dataSource: new ListView.DataSource({
                    rowHasChanged: (r1, r2) => r1 !== r2
                }
            )
        }
    }

    componentDidMount() {
        this.fetchNetRepository(this.state.url)
            .then(result => {
                let dataSource = result.data;
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(dataSource)
                })
            })
            .catch(e => {

            })
    }

    renderTitle() {
        return (
            <BottomCommonCell
                leftImage={'cnxh'}
                leftText={'猜你喜欢'}
                rightText={''}
            />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderTitle()}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this.renderRow(rowData)}
                />
            </View>
        );
    }


    renderRow(rowData) {
        return (
            <TouchableOpacity style={styles.guessLike}>
                <Image
                    style={styles.img}
                    source={{uri: rowData.imgUrl}}
                />
                <View style={{flex: 2}}>
                    <Text style={styles.title}>{rowData.title}</Text>
                    <Text>{rowData.subTitle}</Text>
                    <View style={styles.bottomInfo}>
                        <Text style={styles.oldPrice}>{rowData.oldPrice}</Text>
                        <Text>{rowData.bottomInfo}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    fetchNetRepository(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(result => {
                    if (result) {
                        resolve(result);
                    } else {
                        reject(new Error('网络数据为空'))
                    }
                })
                .catch(e => {
                    reject(e);
                })
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    guessLike: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 0.5,
    },
    img: {
        width: 80,
        height: 80,
        marginRight: 10,
    },
    bottomInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
    },
    title: {
        color: '#525052',
        fontSize: 16,
        marginBottom: 5,
    },
    oldPrice: {
        color: '#19B3A2',
        fontSize: 16,
    },
});