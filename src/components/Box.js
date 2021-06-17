import React from 'react'
import { View, Text,StyleSheet,Image,Dimensions, TouchableOpacity } from 'react-native'
import Icon from '../components/layout/Icon'
const {width,height} =Dimensions.get('window'); 
const Box = ({onPress}) => {
    return (
        <View style={ styles.container }>
            <View style={styles.box1}>
               <Image
               style={{
                width:'100%',
                bottom:30,
                height:140,
                marginTop:30,
                resizeMode: 'contain',
                justifyContent:'flex-end',
                left:10
           
               }}
               source={require('../assets/images/ff.png')}
                />
               <Text style={styles.txt}>Food delivery</Text>  
               <Text style={styles.txt2}>Order food you love</Text> 
               <TouchableOpacity  activeOpacity={0.8} style={styles.box3} onPress={onPress}>
                   <Text style={{textAlign:'center',fontSize:14,margin:5,fontWeight:'bold'}}>Order now </Text>
                   <Icon  name="arrow-forward-outline" color={'#c60d5c'} size={30}/>
                  
               </TouchableOpacity> 
            </View>
            <View style={styles.box2}>
               <Image
               style={{
                width:'100%', 
                height:140,
                marginBottom:60,
                overflow:'hidden',
      
 
               }}
               source={require('../assets/images/burger.png')}
                />
               <Text style={styles.boxtxt}>Pick-Up</Text>  
               <Text style={styles.boxtxt2}>your food</Text> 
               <TouchableOpacity activeOpacity={0.8} style={styles.box4}>
                   <Text style={{textAlign:'center',fontSize:14,margin:5,fontWeight:'bold'}}>Order now </Text>
                   <Icon  name="arrow-forward-outline" color={'#c60d5c'} size={30}/>
                  
               </TouchableOpacity> 
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
         flex:1,
         flexDirection:'row',
     
         marginTop:20,
         padding:20,
         
    },
    box1:{
        width:width/2.2, 
        height:height/2.2,
        backgroundColor:'#F7C6CC', 
        borderRadius:10,
        marginRight:10
        
    },
    box2:{
        width:width/2.4,
        height:height/2.2,
        backgroundColor:'#EF9FC1', 
        borderRadius:10,
        flex:1,
        
     
        
    },
    box3:{
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        width:width/3,
        height:height/14,
        backgroundColor:'white',
        marginLeft:20,
        borderWidth:1,
        borderColor:'white',
        borderRadius:20,
        marginTop:27
    },
    box4:{
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        width:width/3,
        height:height/14,
        backgroundColor:'white',
        marginLeft:20,
        borderWidth:1,
        borderColor:'white',
        borderRadius:20,
        marginTop:30
    },
    txt:{
        marginLeft:20,
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        marginTop:-20,
        width:'85%',
       

    },
    boxtxt:{
        marginLeft:20,
        color:'black',
        fontSize:20,
        fontWeight:'bold',
        marginTop:-55,
        width:'85%',
    },
    txt2:{
        marginLeft:20,
        marginTop:5,
        color:'white', 
        width:'85%',
        fontSize:16,  
       
    },
    boxtxt2:{
        marginLeft:20,
        marginTop:5,
        color:'black', 
        fontSize:16  ,
        width:'85%',
    }
})

export default Box
