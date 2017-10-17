import React, {Component} from 'react';
import {Navigator} from 'react-native-deprecated-custom-components'
import Main from './component/main/Main'

export default class Setup extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{component: Main}}
                configureScene={() => {// 过渡动画
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component navigator={navigator} {...route.params}/>;
                }}
            />
        );
    }
}