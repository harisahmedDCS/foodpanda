import React, { Component } from 'react';
import { View,StyleSheet,StatusBar,Image,Dimensions } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Title, Text } from 'native-base';
import HeaderIcon from './Icon';
const {width,height} =Dimensions.get('window'); 
export default class HeaderIconButtonTextButtonExample extends Component {
  render() {
    const {state,onPress}=this.props;
    return (
        <Header  style={{backgroundColor:'white',height: height/10}}>
                    <StatusBar
          backgroundColor="#f7f7f7"
          barStyle = "dark-content"
        />
          <Left>
              <HeaderIcon name={state.leftIcon} onPress={onPress} color={state.color} size={state.size2}/>
          </Left>
          <Body>
            <Title style={[{color:state.color2,width:200,fontWeight:state.fontWeight}]}>{state.city}</Title>
            <Text>{state.loc}</Text>
          </Body>
          <Right>
          <HeaderIcon name={state.rightIcon} color={state.color} size={state.size}/> 
          </Right>
        </Header> 
   
    );
  }
}