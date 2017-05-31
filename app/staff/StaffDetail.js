import React, { Component, PropTypes } from 'react';
import { ActivityIndicator, StyleSheet, Navigator } from 'react-native';
import { Container, Content, List, ListItem, Text ,Header ,Body, Title} from 'native-base';
import {AnbUtil} from './../components';

const propTypes = {

};

const defaultProps = {

};

class StaffDetail extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
      title : '직원세부정보'
    };

    render() {
        return(
            <Text>StaffDetail</Text>
        );
    }
}

StaffDetail.propTypes = propTypes;
StaffDetail.defaultProps = defaultProps;

export default StaffDetail;
