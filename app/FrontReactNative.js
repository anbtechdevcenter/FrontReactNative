import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Text ,Form, Input ,Header, Left, Label, Item, Right,Body, Title, Button, Icon} from 'native-base';
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

            <Form>
                           <Item fixedLabel>
                               <Label>Username</Label>
                               <Input value='jhseo@anbtech.com'/>
                           </Item>
                           <Item fixedLabel last>
                               <Label>Password</Label>
                               <Input value="1"/>
                           </Item>
                           <Button>
                             <Text onPress={()=>{
                                 let data = {
                                   'grant_type' : 'password',
                       						'username' : 'jhseo@anbtech.com',
                       						'password' : '1'
                                };
                               fetch("https://restnfeel.cloud.tyk.io/oauth/token/", {
                                 method : 'post',
                                 headers : {
                                   'Accept': 'application/json',
                                   'Content-Type': 'application/x-www-form-urlencoded',
                                   'Authorization' : 'Basic YW5iZGV2Y2VudGVyLWNsaWVudC13aXRoLXNlY3JldDpkZXZjZW50ZXI= '
                                 },
                                 body : JSON.stringify(data)
                               })
                               .then((response)=>{
                                 //callfn();
                                 console.log('token ', response);
                               });

                               }}>Login</Text>
                             </Button>
                       </Form>

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
