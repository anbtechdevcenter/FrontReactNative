import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Text ,Header ,Body, Title, Button} from 'native-base';
import {AnbUtil} from './components';
import RankView from './RankView';




class FrontReactNative extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
      title : '에이앤비 그룹웨어'
    };

    render() {

      const {navigate} = this.props.navigation;

        return(
          <Container>
            <Text>MAIN</Text>

            <Button
              onPress={()=>navigate('Rank')}>
              <Text>직급보기</Text>
            </Button>

          </Container>
        );
    }
}


export default FrontReactNative;
