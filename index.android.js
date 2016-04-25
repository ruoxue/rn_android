/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Navigator,
    TextInput
} from 'react-native';


var Launcher = require('./androidjs/launcher.android')
var Guider = require('./androidjs/guider.android')
var Home = require('./androidjs/home.android');


class Comment extends Component {

    configureScene(route) {
        return Navigator.SceneConfigs.FadeAndroid;
    }

    renderScene(router, navigator) {
        var View = null;
        switch (router.id) {
            case "launcher":
                View = Launcher;
                break;
            case  'guide':

                View = Guider;
                break;
            case  'home':
                View = Home
                break;

            default:
                View = Launcher;
                break
        }

        return <View navigator={navigator}/>
    }


    render() {
        return (
            <Navigator
                initialRoute={{id: 'launcher',name:'launcher'}}
                configureScene={this.configureScene}
                renderScene={this.renderScene}
            />
        );
    }
}


AppRegistry.registerComponent('comment', () => Comment);
