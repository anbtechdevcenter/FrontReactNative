import React, { Component, PropTypes } from 'react';
import { ActivityIndicator, StyleSheet, Navigator } from 'react-native';
import { Container, Content, List, ListItem, Text ,Header ,Body, Title} from 'native-base';
import {AnbUtil} from './../components';

const propTypes = {

};

const defaultProps = {

};

class Holiday extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
      title : '근태관리'
    };


    componentWillMount(){
      AnbUtil.REST({type : "R", url : "/holiday/loginUser" }, (res)=>{
        console.log("[holiday is] ", res);
        return false;
        let error = res.error;
        if(error){

        }else{
          this.setState({
            ranklist : res,
            animating: false
          });
        }


      });

    }

    render() {
        return(
            <Container>
              <Content>
                <Text>근태</Text>
              </Content>
            </Container>
        );
    }
}

Holiday.propTypes = propTypes;
Holiday.defaultProps = defaultProps;

export default Holiday;
