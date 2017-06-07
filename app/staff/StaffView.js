import React, { Component, PropTypes } from 'react';
import { ActivityIndicator, StyleSheet, Navigator} from 'react-native';
import { Container, Content, List, ListItem, Text ,Header ,Body, Title,
          Card, CardItem} from 'native-base';
import {AnbUtil} from './../components';

const propTypes = {

};

const defaultProps = {

};

class StaffView extends Component {

    constructor(props) {
        super(props);
        this.state = {
          staffList : []
        };
    }

    static navigationOptions = {
      title : '직원현황'
    };

    componentWillMount(){
      AnbUtil.REST({type : "R", url : "/employee" }, (res)=>{
        let sortRes = res.sort(function(a,b){
          if(a.rank!==undefined && b.rank!==undefined){
            let aCd = a.rank.rankCode.substr(4,2);
            let bCd = b.rank.rankCode.substr(4,2);
              return aCd < bCd ? -1 : aCd > bCd ? 1 : 0;
          }

        });

        this.setState({
          staffList : sortRes
        });


      });

    }

    render() {

const {navigate} = this.props.navigation;

      let staffs = this.state.staffList.map(
        (staff) => {
          return (
              <Card key={staff.empId}>
                <CardItem header>
                    <Text>{staff.empNm} {staff.rank.rankName}</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text note>{staff.email}</Text>
                    <Text note>{staff.project.prjNm} [{staff.project.startDate}]</Text>
                    <Text note>{staff.team}</Text>
                  </Body>
                </CardItem>
              </Card>
          )
        }
      );

        return(
            <Container>
              <Content>
                {staffs}
              </Content>
            </Container>
        );
    }
}

StaffView.propTypes = propTypes;
StaffView.defaultProps = defaultProps;

export default StaffView;
