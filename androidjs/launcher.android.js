/**
 * Created by RuoxueYe on 2016/4/25.
 */

var React = require('react-native')
var {
    Navigator,
    Image,
    BackAndroid,
    Alert,
    Text

} = React;

var navigator;

/**
 * exit
 *
 */
BackAndroid.addEventListener('hardwareBackPress', function () {
    if (navigator == null) {
        return false;
    }
    if (navigator.getCurrentRoutes().length === 1) {
        return false;
    }
    navigator.pop();
    return true;
});


var Launcher = React.createClass(
    {
        getInitialState: function () {
            navigator = this.props.navigator;

            setTimeout(()=>{navigator.replace({id:'guide'}
            )},1000);
            return {};
        },
        render: function () {
            return (
                <Text>
                <Image source={require('./../androidimg/ie-big.jpg')}
                       style={{width:320,height:480,flex:1}}
                >
                </Image>
            </Text>
            );
        }
    }
);
/**
 * launcher  界面
 */
module.exports = Launcher













