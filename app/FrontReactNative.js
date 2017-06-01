import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet , View} from 'react-native';
import { Container, Content, List, ListItem, Text ,
    Toast, Form, Input ,Header, Left, Label, Item, Right,Body, Title, Button, Icon} from 'native-base';
import {AnbUtil} from './components';
import RankView from './RankView';




class FrontReactNative extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
      title : '에이앤비 그룹웨어'
    };

    _handleLogin(){
      //console.log("start is");
      let data = {
       "grant_type" : "password",
       "username" : "jhseo@anbtech.com",
       "password" : "1"
       };

      fetch("https://restnfeel.cloud.tyk.io/token/", {
        method : 'post',
        headers : {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization' : 'Basic YW5iZGV2Y2VudGVyLWNsaWVudC13aXRoLXNlY3JldDpkZXZjZW50ZXI='
        },
        body : JSON.stringify(data)
      })
      .then((response)=>response.json())
      .then((responseData)=>{
        //callfn();
        console.log('token ', responseData);
        let msg = responseData.error;
        if(msg){
          Toast.show({
            //supportedOrientations="potrait",
              text: msg,
              position: 'center',
              buttonText: 'Okay'
          });
        }


      })
      .catch((error)=>{
        console.log("[error] ", error);
        Toast.show({
          //supportedOrientations="potrait",
            text: error,
            position: 'center',
            buttonText: 'Okay'
        });
      });

    }

    render() {

      const {navigate} = this.props.navigation;

        return(
          <Container>
            <View style={styles.container}>
            <Form>
                           <Item fixedLabel>
                               <Label>Email</Label>
                               <Input value='jhseo@anbtech.com'/>
                           </Item>
                           <Item fixedLabel last>
                               <Label>Password</Label>
                               <Input value="1"/>
                           </Item>
                           <Button full rounded>
                             <Text onPress={this._handleLogin}>Login</Text>
                             </Button>
                       </Form>

</View>
          </Container>
        );
    }
}

const styles = StyleSheet.create({
  container : {
    flex : 2,
    justifyContent : 'center',
  //  alignItems : 'center'
  }
});


export default FrontReactNative;
