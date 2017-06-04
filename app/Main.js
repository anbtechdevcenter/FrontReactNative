import React, { Component, PropTypes } from 'react';
import { ActivityIndicator, StyleSheet, Navigator ,
  AsyncStorage} from 'react-native';
import { Container, Text , Button} from 'native-base';
import {AnbUtil} from './components';

const propTypes = {

};

const defaultProps = {

};

class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {

const {navigate} = this.props.navigation;

        return(
            <Container>
              <Text>Main</Text>
              <Button full light onPress={ ()=>{
                  AsyncStorage.removeItem("access_token");
                  navigate('Login');
                } }>
                <Text>Login</Text>
              </Button>
              <Button full primary onPress={ ()=>{
                  navigate('CodeType');
                } }>
                <Text>CodeType</Text>
              </Button>
              <Button full warning onPress={ ()=>{
                  navigate('Rank');
                } }>
                <Text>Rank</Text>
              </Button>
              <Button full success onPress={ ()=>{
                  navigate('Staff');
                } }>
                <Text>Staff</Text>
              </Button>
            </Container>
        );
    }
}

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main;
