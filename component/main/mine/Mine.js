import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
} from 'react-native';

/**
 * 我的
 */
export default class Mine extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {this.renderNavigationBar()}
                    <View style={{marginBottom: 0.5}}>
                        {this.renderItem('collect', '我的订单', '查看全部订单', '')}
                    </View>
                    {this.renderSquare()}
                    <View style={{marginBottom: 0.5}}>
                        {this.renderItem('draft', '我的钱包', '财产余额 ¥100', '')}
                    </View>
                    <View style={{marginBottom: 10}}>
                        {this.renderItem('like', '抵用券', '0', '')}
                    </View>
                    <View style={{marginBottom: 10}}>
                        {this.renderItem('card', '积分商城', '', '')}
                    </View>
                    <View style={{marginBottom: 10}}>
                        {this.renderItem('new_friend', '今日推荐', '', 'me_new')}
                    </View>
                    <View style={{marginBottom: 10}}>
                        {this.renderItem('pay', '我的合作', '轻松开店，招财进宝', '')}
                    </View>
                </ScrollView>
            </View>
        );
    }

    renderSquare() {
        return (
            <View style={styles.square}>
                <View style={styles.navBottomPart}>
                    <Image
                        style={{width: 20, height: 20, marginBottom: 5}}
                        source={{uri: 'order1'}}
                    />
                    <Text style={{color: '#C5C5C5'}}>待付款</Text>
                </View>
                <View style={styles.navBottomPart}>
                    <Image
                        style={{width: 20, height: 20, marginBottom: 5}}
                        source={{uri: 'order2'}}
                    />
                    <Text style={{color: '#C5C5C5'}}>待收货</Text>
                </View>
                <View style={styles.navBottomPart}>
                    <Image
                        style={{width: 20, height: 20, marginBottom: 5}}
                        source={{uri: 'order3'}}
                    />
                    <Text style={{color: '#C5C5C5'}}>待评价</Text>
                </View>
                <View style={styles.navBottomPart}>
                    <Image
                        style={{width: 20, height: 20, marginBottom: 5}}
                        source={{uri: 'order4'}}
                    />
                    <Text style={{color: '#C5C5C5'}}>退款/售后</Text>
                </View>
            </View>
        );
    }

    renderNavigationBar() {
        return (
            <View style={styles.navigationBar}>
                {this.renderNavTop()}
                {this.renderNavBottom()}

            </View>
        );
    }

    renderNavBottom() {
        return (
            <View style={styles.navBottom}>
                <View style={styles.navBottomPart}>
                    <Text style={styles.navBottomText}>100</Text>
                    <Text style={styles.navBottomText}>购物券</Text>
                </View>

                <View style={styles.navBottomLine}/>

                <View style={styles.navBottomPart}>
                    <Text style={styles.navBottomText}>12</Text>
                    <Text style={styles.navBottomText}>评价</Text>
                </View>

                <View style={styles.navBottomLine}/>

                <View style={styles.navBottomPart}>
                    <Text style={styles.navBottomText}>50</Text>
                    <Text style={styles.navBottomText}>收藏</Text>
                </View>
            </View>
        );
    }

    renderNavTop() {
        return <View style={styles.navTop}>
            <View style={styles.navTopLeft}>
                <Image
                    style={styles.avatar}
                    source={{uri: 'ic_launcher'}}/>
                <Text
                    style={{fontSize: 16, color: 'white', marginLeft: 5}}>
                    我宝电商</Text>
                <Image style={{width: 15, height: 15}}
                       source={{uri: 'avatar_vip'}}/>
            </View>
            <Image
                style={styles.arrow}
                source={{uri: 'icon_cell_rightArrow'}}
            />
        </View>;
    }

    renderItem(leftImage, leftText, rightText, rightImage) {
        let right = rightImage ?
            <View style={styles.itemPart}>
                <Image
                    style={{width: 40, height: 20}}
                    source={{uri: rightImage}}
                />
                <Image
                    style={styles.arrow}
                    source={{uri: 'icon_cell_rightArrow'}}
                />
            </View> :
            <View style={styles.itemPart}>
                <Text style={{marginRight: 5}}>{rightText}</Text>
                <Image
                    style={styles.arrow}
                    source={{uri: 'icon_cell_rightArrow'}}
                />
            </View>;
        return (
            <View style={styles.item}>
                <View style={styles.itemPart}>
                    <Image
                        style={styles.itemPartImg}
                        source={{uri: leftImage}}
                    />
                    <Text style={{fontSize: 16, color: '#3D3D3D'}}>{leftText}</Text>
                </View>
                {right}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8'
    },
    navigationBar: {
        backgroundColor: '#FF6000',
        paddingTop: 30,
    },
    navTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
        paddingLeft: 8,
    },
    navTopLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    arrow: {
        width: 8,
        height: 13,
        marginRight: 5,
        backgroundColor: 'transparent'
    },
    navBottom: {
        flexDirection: 'row',
        backgroundColor: '#F18057'
    },
    navBottomPart: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5,
        marginBottom: 5,
    },
    navBottomText: {
        color: 'white',
        marginBottom: 5,
        fontSize: 14,
    },
    navBottomLine: {
        width: 0.5,
        backgroundColor: 'white',
        marginBottom: 5,
        marginTop: 5
    },
    square: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 10,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'white',
    },
    itemPart: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemPartImg: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 5
    },
});