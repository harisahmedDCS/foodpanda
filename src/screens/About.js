import React from 'react'
import { View, Text, ScrollView,Dimensions,TouchableOpacity,Image,FlatList,StyleSheet } from 'react-native';
import Header from '../components/layout/Header';
import { Container, Item, Input, Button } from 'native-base';
import Search from '../components/Search' 
import Icon from '../components/layout/Icon';
import categories from '../data/categories'
import deal from '../data/deal';
import colors from '../assets/colors/Color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import restaurant from '../data/restaurants';
const {width,height} =Dimensions.get('window'); 


const renderCategoriesItem=({item})=>{
  return(
      <View style={[styles.categoriesWrapper,{
        marginRight:item.id=='3'?0:20
      }]}>
          <Image style={styles.image} source={item.image}/>
          <Text style={styles.Text}>Discount</Text>
          <Text style={styles.Textpercent}>{item.text}</Text>
      </View>
  )
}
const renderDealItem=({item})=>{
  return(
      <View style={[styles.dealWrapper,{
        marginRight:item.id=='3'?0:20  
      }]}>             
          
              
           
           <View style={{marginBottom:-20,flex:1 }}>
           <Image  style={[styles.dealImage,{
          }]} source={item.image}/>     

           </View>
        <TouchableOpacity activeOpacity={0.4}>
        <View  >
                  <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    
                     <Text style={[styles.KitchenText,{
                       fontWeight:'bold'  ,
                       
                     }]}>kulsoom's Kitchen {'     '}</Text>                                                 
                     <Ionicons  name="star" size={15} color="blue"/>
                      <Text> 3.111  (397)</Text>
                       
                  </View>
                  <View style={{marginTop:5}}>
                      <Text style={{fontSize:15,color:colors.darkgrey}}>$$ . Pakistani BBQ,Evergreen discou....</Text>
                  </View>
                  <View style={{marginTop:5}}>
                     <Text style={{fontWeight:'bold'}}>Rs.40 Delivery fee</Text>
                  </View>
                 
            </View>
                
        </TouchableOpacity>
           
                   
          <View style={styles.strip}>
              <Text style={styles.stripText}>{item.voucher}</Text>
          </View>
          {item.selected?<View style={styles.strip2}>
              <Text style={styles.stripText2}>{item.voucher2}</Text>
          </View>:null}
          <View style={styles.strip3}>
              <Text style={styles.stripText3}>{item.time} min</Text>
          </View>
            {/* dealitem */}
             {/* <View style={styles.kitchenWrapper}>
                  <View style={styles.kitchenTitle}>
                    <Text style={styles.KitchenText}>kulsoom's Kitchen</Text>
                    <Text style={styles.KitchenText}>kulsoom's Kitchen</Text>
                    <Text style={styles.KitchenText}>kulsoom's Kitchen</Text>
                  </View>
                  <View style={styles.KitchenValue}>
                    <Text>3.7</Text>
                  </View>
              </View>
               */}
      </View>
      
  )
}


const About = ({navigation}) => {
    const state={
        city:"Restaurant Delivery",
        loc:"Karachi",
        leftIcon:"arrow-back-outline",
        color:'#c60d5c',
        rightIcon:'cart-outline',
        fontWeight:'bold',
        color2:'black',
        size:40,
        size2:30,
      }
      const style={
          margin:120,
          width:width/2,
          placeholder:'Search for shops..',
          width2:width/1.5
      }
      const onPress=()=>{navigation.navigate('Home')}
    return (
       <ScrollView 
       style={styles.container}>
           <Header state={state} onPress={onPress}/>
          <View style={{width:width/1}}>
            <Search state={style}/>
          </View>
           <View style={[styles.search2,{marginLeft:'75%'}]} searchBar rounded>
          <Item style={{left:20,width:'40%'}}>
            <Icon name="apps-outline" color={'#c60d5c'} size={30}/>
            <Input style={styles.input}   />
          </Item>
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
          {/* ramazan special */}
         
                <View style={{marginLeft:20}}>
                    <Text style={{fontWeight:'bold',
                  fontSize:20}}>Ramazan Specials - up to 50% off</Text>
                </View>
                <View style={ styles.deal  }>
                      <FlatList
                    data={deal}
                    renderItem={renderDealItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    />
               </View>
               {/* restaurants */}
                 <View style={styles.restaurant}>
                    <Text style={styles.restaurantText}>All Restaurants</Text>
                   {
                     restaurant.map((item)=>(
                       <TouchableOpacity key={item.id} activeOpacity={20} onPress={()=>{
                        navigation.navigate('Restaurant',{
                          headerimg:item.image,
                          headerTitle:item.title,
                          headerTime:item.min,
                          headerbunny:item.bunny
                        })
                       }}>
                      <View   style={{marginTop:10}}>
                      <View   >
                      <Image style={{width:'95%',height:200,flex:1,borderRadius:20,backgroundColor:colors.darkgrey }} source={item.image}/>
                      </View>
                         <View style={{flexDirection:'row',marginTop:10 }}>
                            <View  >
                            <Text style={{fontSize:20,fontWeight:'bold' }}>{item.title}</Text>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'flex-end',flex:1,alignItems:'center'}}>
                            <Ionicons  name="star" size={15} color="blue"/>
                            <Text style={{marginRight:15}}>{item.rating} {item.order}</Text>
                            </View>
                         </View>
                         <Text style={{fontSize:16,color:colors.darkgrey}}>{item.flavour}</Text>
                         <Text style={{fontSize:16,fontWeight:'bold'}}>{item.delivery}</Text>
                       <View style={styles.restaurantTag}>
                       <Text style={styles.restaurantTagText}>{item.tag}</Text>
                       </View>
                      {item.rating>4?<View style={styles.restaurantTag2}>
                       <Text style={styles.restaurantTagText2}>{item.bestSeller}</Text>
                       </View>:null}
                       {item.rating>3.5&&item.rating<4?<View style={styles.restaurantTag2}>
                       <Text style={styles.restaurantTagText2}>{item.promoted}</Text>
                       </View>:null}
                       <View style={styles.restaurantTag3}>
                       <Text style={styles.restaurantTagText3}>{item.min}</Text>
                         </View>
                    </View>
                   </TouchableOpacity>
    ))
                   }
                    
                    
                </View>       
       </ScrollView> 
    )
}
const styles=StyleSheet.create({
    container:{
     flex:1,
      backgroundColor:'white',
     
    },
    search:{
        marginLeft:20,
       
        marginTop:20,
        borderWidth:1,
        borderRadius:10,
        borderColor:'#cacfd2'
       
   },
   search2:{
     
    width:width/5,
    marginTop:-62,
    borderWidth:1,
    borderRadius:10,
    borderColor:'#cacfd2',
  
   
},
   input:{
       height:60, 
   },
   categories:{
    padding:20,
   },
   deal:{
    padding:20,
    flex:1
   },
   image:{
    resizeMode:'contain',
     width:200,
     height:200,
     marginBottom:70,
   },
   dealImage:{
    width:width/1.3,
    height:height/3,
    backgroundColor:'darkgrey',
    
    borderRadius:20,
   
  
       


 
  },
   categoriesWrapper:{  
    backgroundColor:colors.pink,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    height:height/4,
    width:width/1.5,
    
   },
   dealWrapper:{  
    //  backgroundColor:colors.grey,
    alignItems:'center',
    justifyContent:'center',
    flex:1,
     overflow:'hidden',
    width:width/1.3,
    height:height/2.2,
    
    
    
     
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
      left:160,
      fontSize:20,
      fontWeight:'bold',
      alignItems:'center',
      justifyContent:'center',
      color:colors.grey,
   
    },
    strip:{
     position:'absolute',
     alignSelf: 'flex-start',
     height:'12%',
     padding:7,
     top:20,
     borderTopRightRadius:20,
      borderBottomRightRadius:20,
     backgroundColor:colors.pink2,
    },
    stripText:{
      fontSize:16,
      color:'white',
      fontWeight:'bold',
      width:'100%',
      alignItems:'center',
      justifyContent:'center',
      marginRight:5
    },
    strip2:{
      position:'absolute',
      alignSelf: 'flex-start',
      height:'11%',
      padding:7,
      top:80,
      borderTopRightRadius:20,
       borderBottomRightRadius:20,
      backgroundColor:colors.pink2
     },
     stripText2:{
       fontSize:16,
       color:'white',
       fontWeight:'bold',
       width:'100%',
       alignItems:'center',
       justifyContent:'center',
       marginRight:5
     },
     strip3:{
      position:'absolute',
      alignSelf: 'flex-start',
      height:'10%',
      padding:4,
      top:160,
      left:10,
      borderRadius:20,
       borderBottomRightRadius:20,
      backgroundColor:'#FFFFFF'
     },
     stripText3:{
       fontSize:16,
       color:'black',
       fontWeight:'bold',
       width:'100%',
       alignItems:'center',
       justifyContent:'center',
       marginLeft:10,
       marginRight:10,
     },
     kitchenWrapper:{
     marginLeft:20,  
     }, 
kitchenTitle:{
  color:'black',
  fontSize:20,
},
KitchenText:{
  color:'black',
  fontSize:18,
  marginTop:10

},
KitchenValue:{
  color:'black',
  fontSize:20,
  
  
  // marginLeft:50
},
 restaurant:{
padding:20,
flex:1
},
 restaurantText:{
 fontSize:22,
 fontWeight:'bold'
},
restaurantTag:{
  position:'absolute',
  alignSelf: 'flex-start',
  height:'12%',
  padding:7,
  top:20,
  borderTopRightRadius:20,
   borderBottomRightRadius:20,
  backgroundColor:colors.pink2,
},
restaurantTagText:{
  fontSize:16,
  color:'white',
  fontWeight:'bold',
  width:'100%',
  alignItems:'center',
  justifyContent:'center',
  marginRight:5
},
restaurantTag2:{
  position:'absolute',
  alignSelf: 'flex-start',
  height:'12%',
  padding:7,
  top:70,
  borderTopRightRadius:20,
   borderBottomRightRadius:20,
  backgroundColor:colors.pink2,
},
restaurantTagText2:{
  fontSize:16,
  color:'white',
  fontWeight:'bold',
  width:'100%',
  alignItems:'center',
  justifyContent:'center',
  marginRight:5
},
restaurantTag3:{
  position:'absolute',
      alignSelf: 'flex-start',
      height:'10%',
      padding:4,
      top:150,
      left:10,
      width:'20%',
      borderRadius:20,
       borderBottomRightRadius:20,
      backgroundColor:'#FFFFFF'
},
restaurantTagText3:{
  fontSize:16,
  color:'black',
  fontWeight:'bold',
  width:'100%',
  alignItems:'center',
  justifyContent:'center',
  marginRight:5,
  marginLeft:5
}
})
export default About
