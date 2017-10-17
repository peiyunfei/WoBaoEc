import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import BottomCommonCell from '../BottomCommonCell'
import homeD5 from '../../../../../json/Home_D5.json'

/**
 * 购物中心
 */
export default class ShoppingCenter extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderTitle()}
                <View style={styles.shops}>
                    {this.renderShop()}
                </View>
            </View>
        );
    }

    /**
     * 加载标题
     * @returns {XML}
     */
    renderTitle() {
        let allShop = '全部' + homeD5.count + '家';
        return (
            <BottomCommonCell
                leftImage={'gwzx'}
                leftText={'购物中心'}
                rightText={allShop}
            />
        );
    }

    renderShop() {
        let item = [];
        let shops = homeD5.data;
        for (let i = 0; i < shops.length; i++) {
            let shop = shops[i];
            let view = <TouchableOpacity
                onPress={()=>{
                    this.props.onShoppingCenterSelect(shop.detailurl,shop.name)
                }}
                style={styles.shop}
                key={i}>
                <Image
                    style={styles.shopImage}
                    source={{uri: shop.img}}
                />
                <Text style={{fontSize: 12}}>{shop.name}</Text>
            </TouchableOpacity>;
            item.push(view);
        }
        return item;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    shops: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
    },
    shop: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    shopImage: {
        width: 60,
        height: 60,
        marginBottom: 8,
        borderRadius: 5,
    },
});