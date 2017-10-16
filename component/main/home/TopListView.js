import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
    Platform,
} from 'react-native';

let Dimension = require('Dimensions');
let width = Dimension.get('window').width;
let cellW = Platform.OS === 'ios' ? 70 : 60;
let cellH = 70;
let col = 5;
let hMargin = (width - cellW * col) / (col + 1);
/**
 * 头部的轮播图
 */
export default class TopListView extends Component {

    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => {
                r1 !== r2;
            }
        });
        this.state = {
            dataSource: ds.cloneWithRows(this.props.dataArr)
        }
    }

    render() {
        return (
            <ListView
                contentContainerStyle={styles.contentContainer}
                scrollEnabled={false}
                dataSource={this.state.dataSource}
                renderRow={(rowData) => this.renderRow(rowData)}
            />
        );
    }

    renderRow(rowData) {
        return (
            <TouchableOpacity>
                <View style={styles.cellStyle}>
                    <Image
                        style={styles.cellImg}
                        source={{uri: rowData.image}}
                    />
                    <Text style={styles.title}>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width
    },
    cellStyle: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: cellW,
        height: cellH,
        marginLeft: hMargin,
    },
    cellImg: {
        width: 50,
        height: 50
    },
    title: {
        fontSize: Platform.OS === 'ios' ? 14 : 12,
        color: 'gray'
    }
});