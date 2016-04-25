/**
 * Created by RuoxueYe on 2016/4/25.
 */
var React = require('react-native')
var {
    Navigator,
    BackAndroid,
    ViewPagerAndroid,
    View,
    StyleSheet,
    Image,
    Text,
    Alert,
    NavigatorSceneConfigs
}=React;

var  Config=require('./Config')

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
var navigator;

var Guider = React.createClass({

    getInitialState: function () {
        navigator = this.props.navigator;
        return {};
    },
    /**
     * rendering
     */
    render: function () {

        var pages = [];
        pages.push(<View key={1}><Image source={require('./../androidimg/chrome-big.jpg')}></Image></View>)
        pages.push(<View key={2}><Image source={require('./../androidimg/firefox-big.jpg')}></Image></View>)
        pages.push(<View key={3}><Image source={require('./../androidimg/chrome-logo.jpg')}></Image></View>)
        pages.push(<View key={4} ><Text onPress={()=>{
        navigator.replace({id:'home'})}}><Image source={require('./../androidimg/opera-big.jpg')}></Image></Text></View>)


        return (
            <View style={{flex:1}}>
                <ViewPagerAndroid style={styles.viewpager}>
                    {pages}
                </ViewPagerAndroid>
            </View>

        );


    },


});

const styles = StyleSheet.create({
        viewpager: {
            flex: 1,
            backgroundColor: '#f00',
        },
    }
);


module.exports = Guider