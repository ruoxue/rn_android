/**
 * Created by RuoxueYe on 2016/4/25.
 */
var React = require('react-native')

var {
    ViewPagerAndroid,
    Text,
    View,
    StyleSheet

}=React

var Homef = require('./homef.android');

var Home = React.createClass({

    render: function () {
        var pagers = [];
        pagers.push(<View  key={1}><Homef></Homef></View>)
        pagers.push(<View  key={2}><Homef></Homef></View>)
        pagers.push(<View  key={3}><Homef></Homef></View>)

        return (
            <View style={styles.cflex}>
                <ViewPagerAndroid style={styles.cflex}
                >
                    {pagers}
                </ViewPagerAndroid>

            </View>

        );
    }


});

const styles = StyleSheet.create({
        cflex: {
            flex: 1,

        },
    }
);

module.exports = Home;