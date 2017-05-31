import React, { Component, PropTypes } from 'react';
import { ActivityIndicator, StyleSheet, Navigator } from 'react-native';
import { Container, Content, List, ListItem, Text ,Header ,Body, Title} from 'native-base';
import Forecast from './Forecast';
import {AnbUtil} from './components';


export default class RankView extends Component {

    constructor(props) {
        super(props);
        this.state = {
          zip : '',
          ranklist : [],
          animating: true
        };
    }

    static navigationOptions = {
      title : '직급현황'
    };

    _handleTextChange(event){
      console.log(event.nativeEvent.text);
      this.setState({
        zip : event.nativeEvent.text
      });



    }

    componentWillMount(){
      console.log("컴포넌트 마운트 전");

      AnbUtil.REST({type : "R", url : "/rank" }, (res)=>{
      //  console.log("[mealGet] ", res);
        this.setState({
          ranklist : res,
          animating: false
        })


      });

    }


    render() {


      let rankSortList = this.state.ranklist.sort(function(a, b) {
          var aRcd = a.rankCode.substr(4,2);
          var bRcd = b.rankCode.substr(4,2);
        //	console.log(aRcd+ "" + bRcd , aRcd > bRcd);
          return aRcd < bRcd ? -1 : aRcd > bRcd ? 1 : 0;
        }, true);

        return(
          <Container>
              <Content>

                {
                  rankSortList.map(
                    (rank)=> {
                    return(<List key={rank.rankCode}>
                      <ListItem>
                        <Text>{rank.rankName}</Text>
                      </ListItem>
                    </List>)
                    }
                  )
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
    },
      centering: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 8,
    },
    gray: {
      backgroundColor: '#cccccc',
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 8,
    }
});
