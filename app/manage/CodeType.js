import React, { Component, PropTypes } from 'react';
import { ActivityIndicator, StyleSheet, Navigator } from 'react-native';
import { Container, Content, List, ListItem, Text ,Header ,Body, Title} from 'native-base';
import {AnbUtil} from './../components';

const propTypes = {

};

const defaultProps = {

};

class CodeType extends Component {

    constructor(props) {
        super(props);
        this.state = {
          codeTypeList : []
        }
    }

    static navigationOptions = {
      title : '코드 타입 관리'
    };


    componentWillMount(){
    //  console.log("컴포넌트 마운트 전");

      AnbUtil.REST({type : "R", url : "/codeType" }, (res)=>{
        console.log("[codeType] ", res);

        this.setState({
          codeTypeList : res,
          animating: false
        })


      });

    }

    render() {

      let codeType = this.state.codeTypeList.map(
        (code)=> {
        return(<List key={code.codeType}>
          <ListItem>
            <Body>
              <Text>{code.codeTypeName}</Text>
              <Text note>{code.reason}</Text>
            </Body>
          </ListItem>
        </List>)
        }
      );

        return(
              <Container>
              {codeType}
              </Container>
        );
    }
}

CodeType.propTypes = propTypes;
CodeType.defaultProps = defaultProps;

export default CodeType;
