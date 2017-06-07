import React,{ Component } from 'react';
import {AsyncStorage, ActivityIndicator} from 'react-native';

const API_URL = "https://restnfeel.cloud.tyk.io";

export default class AnbUtil  extends Component{

  constructor(props){
    super(props);
    this.state = {
      animating : true
    }
  }

  static REST(obj , callfn){
    let cType = obj.type;
    let url = obj.url;
    let param = obj.param;
    let access_token = '';

  async function _getTokenKey(){
      let rv = await AsyncStorage.getItem('access_token');
    //  console.log("# ",rv);
      access_token = rv;

    //  console.log("AUBUTIL access_token ", access_token);

          switch (cType) {
            case "R":

              fetch(API_URL+url+"/", {
                method: 'GET',
                headers : {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization' : 'Bearer '+access_token
                }
              })
              .then((response)=>response.json())
              .then((responseData)=>{
              //  console.log("[rData] : ", responseData);
                callfn(responseData);
              })
              .catch(function(ex){
                console.error(url+" 조회가 실패하였습니다. ", ex);
              });

              break;

            case "C" :

              fetch(API_URL+url+"/",{
                method : 'post',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization' : 'Bearer '+access_token
                },
                body : param
                })
                .then((response) => {
                  //this.getApiData();
              //    console.log('saved successfully', response);
                  if(response.ok){
                    callfn();
                  }
                })
                .catch(function(ex){
                  console.error(url+" 저장이 실패하였습니다. ", ex);
                });

              break;

            case "D" :
              fetch(API_URL+url+"/", {
                method : 'delete',
                headers : {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization' : 'Bearer '+access_token
                }
              })
              .then((response)=>{
                callfn();
                //console.log('deleted successfully');
              });
              break;

            default:

          }
          return this;

  } // end async fn
  _getTokenKey();




  }

render(){
  return(
    <ActivityIndicator
        animating={this.state.animating}
        style={[styles.centering, {height: 80}]}
        size="large"
      />
  );
}


};
