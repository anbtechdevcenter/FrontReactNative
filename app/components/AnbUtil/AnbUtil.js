import React,{ Component } from 'react';


const API_URL = "https://restnfeel.cloud.tyk.io";

export default class AnbUtil  extends Component{



  static REST(obj , callfn){
    let cType = obj.type;
    let url = obj.url;
    let param = obj.param;
    let access_token = '';

    if('access_token' in obj){
      access_token= obj.access_token;
    }

console.log("AUBUTIL access_token ", access_token);

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
  }

render(){
  return(
    <div>



    </div>
  );
}


};
