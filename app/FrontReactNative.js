import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Text ,Header, Left, Right,Body, Title, Button, Icon} from 'native-base';
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

            <Text>메인화면이며 현재는 각 화면 확인용 진입점</Text>

            <Button full
              onPress={()=>navigate('Rank')}>
              <Text>직급보기</Text>
            </Button>
            <Button full success
              onPress={()=>navigate('CodeType')}>
              <Text>코드타입관리</Text>
            </Button>
            <Button full info
              onPress={()=>navigate('Staff')}>
              <Text>직원보기</Text>
            </Button>

          </Container>
        );
    }
}


export default FrontReactNative;
