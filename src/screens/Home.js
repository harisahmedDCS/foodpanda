import React from 'react'
import { View, Text,ScrollView,FlatList,StyleSheet,Dimensions,StatusBar,Image } from 'react-native'
import Header from '../components/layout/Header';
import { Container } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Search from '../components/Search';
import Box from '../components/Box';
import categories from '../data/categories';
import colors from '../assets/colors/Color'
const {width,height} =Dimensions.get('window'); 

const renderCategoriesItem=({item})=>{
  return(
      <View style={[styles.categoriesWrapper,{
        marginRight:item.id=='3'?0:20,
      }]}>
          <Image style={styles.image} source={item.image}/>
          <Text style={styles.Text}>Discount</Text>
          <Text style={styles.Textpercent}>{item.text}</Text>
      </View>
  )
}

const Home = ({navigation}) => {
  const state={
    city:"Karachi",
    loc:"current location",
    leftIcon:"menu-outline",
    color:'#c60d5c',
    color2:'#c60d5c',
    rightIcon:'cart-outline',
    size:40,
    size2:40,
    placeholder:'Search for shops & restaurants',
    
  }
  const style={
    margin:20,
    width:width/1,
    placeholder:'Search for shops & restaurants',
}
    return (
        <ScrollView 
   
        showsVerticalScrollIndicator={false} 
        style={[styles.container,{
          marginBottom:-430
        }]}>
                  <StatusBar
          backgroundColor="#f7f7f7"
          barStyle="dark-content"
        />
        <Header state={state}/>
           <View style={{ height:height/5}}>
                <Grid>
                 <Col style={{ height:200,width:250}}>
                     <Text style={styles.txt}>Good afternoon,</Text>
                     <Text style={styles.txt2}>Thinking of lunch? There are 148 restaurants in your area </Text>
                 </Col>
                 <Col style={{height:200 }}>
                   <Image
                     style={{ flex: 1,
                       width:width/4,
                       bottom:30,
                       left:20,
                       resizeMode: 'contain'}}
                     source={require('../assets/images/donut.png')}
                   />
                 </Col>
                 </Grid>
             </View>
             <View style={{marginTop:-30}}>
                <Search state={style}/>
             </View>
             <View style={{marginTop:-20}}>
                <Box onPress={()=>navigation.navigate('About')}/>
             </View>
             <View style={{padding:20,marginTop:-30}}>
                <Text style={{fontSize:22,fontWeight:'bold'}}>Your daily deals</Text>
             </View>
             <View style={styles.categories}>
              <FlatList
            data={categories}
            renderItem={renderCategoriesItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          </View>
       </ScrollView>
    )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',

  },
    txt:{
      color:'black',
      top:30,
      left:20,
      fontSize:20,
      fontWeight:'bold'
    },
    txt2:{
      color:'black',
      top:30,
      left:20,
      fontSize:16
    },
    categories:{
       marginTop:-20,
       padding:20,
       height:height/1,
      },
    image:{
        resizeMode:'contain',
        width:width/2,
        marginBottom:70,
        
      },
    categoriesWrapper:{  
       backgroundColor:colors.pink,
       alignItems:'center',
       justifyContent:'center',
       borderRadius:20,
       height:height/4,
       width:width/1.6
      },
      Text:{
        position:'absolute',
        top:100,
        left:50,
        fontSize:25,
        fontWeight:'bold',
        alignItems:'center',
         justifyContent:'center',
         color:colors.yellow,
      },
      Textpercent:{
         position:'absolute',
         top:105,
         right:30,
         fontSize:20,
         fontWeight:'bold',
         alignItems:'center',
         justifyContent:'center',
         color:colors.grey
       },
  })
export default Home
