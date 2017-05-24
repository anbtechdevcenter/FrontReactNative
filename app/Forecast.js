import React, { Component, PropTypes } from 'react';
import {StyleSheet,Text,View} from 'react-native';

const propTypes = {

};

const defaultProps = {

};

class Forecast extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View>
              <Text>
                Forecast
              </Text>
            </View>
        );
    }
}

Forecast.propTypes = propTypes;
Forecast.defaultProps = defaultProps;

export default Forecast;
