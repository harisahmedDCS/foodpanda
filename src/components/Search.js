import React, { Component } from 'react';
import { View,StyleSheet,Dimensions } from 'react-native';
import Icon from './layout/Icon';
import { Container, Header, Item, Input, Button, Text } from 'native-base';
const {width,height} =Dimensions.get('window'); 
export default class SearchBarExample extends Component {
  render() {
    const {state}=this.props
    return (   
         <View style={[styles.search,{marginRight:state.margin,    width:state.width2}]} searchBar rounded>
          <Item style={{left:20,width:state.width}}>
            <Icon name="search-outline" color={'#c60d5c'} size={30}/>
            <Input style={styles.input} placeholder={state.placeholder} />
          </Item>
          
         </View>      
    );
  }
}

const styles=StyleSheet.create({
    search:{
         marginLeft:20,
         marginTop:20,
         borderWidth:1,
         borderRadius:10,
         borderColor:'#cacfd2'
        
    },
    input:{
        height:60,
   
    }
})