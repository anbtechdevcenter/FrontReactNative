import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Container, Content, List, ListItem, Text } from 'native-base';
import Forecast from './Forecast';
import {AnbUtil} from './components';


class FrontReactNative extends Component {

    constructor(props) {
        super(props);
        this.state = {
          zip : '',
          ranklist : []
        };
    }

    _handleTextChange(event){
      console.log(event.nativeEvent.text);
      this.setState({
        zip : event.nativeEvent.text
      });



    }

    componentWillMount(){
    //  console.log("컴포넌트 마운트 전");

      AnbUtil.REST({type : "R", url : "/rank" }, (res)=>{
      //  console.log("[mealGet] ", res);
        this.setState({
          ranklist : res
        })
      });

    }


    render() {
        return(
          <Container>
              <Content>

                {this.state.ranklist.map((rank)=> {
                  return(<List key={rank.rankCode}>
                    <ListItem>
                      <Text>{rank.rankName}</Text>
                    </ListItem>
                  </List>)
                  })
                }

              </Content>
          </Container>
        );
    }
}

const styles = StyleSheet.create({
    container : {
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center',
      backgroundColor : '#F5FCFF'
    },
    welcome : {
      fontSize : 20,
      textAlign : 'center',
      margin : 10
    },
    input : {
      fontSize : 20,
      borderWidth : 2,
      height : 40
    }
});


export default FrontReactNative;
