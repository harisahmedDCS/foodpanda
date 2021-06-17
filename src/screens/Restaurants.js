import React  from 'react'
import { StyleSheet,Dimensions, Image,Text,View,ScrollView,TouchableOpacity} from 'react-native'
const {width,height} =Dimensions.get('window');
import Ionicons from 'react-native-vector-icons/Ionicons';
import color from '../assets/colors/Color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/Color';
import popular from '../data/popular';
 import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const Restaurants = ( {navigation,route}) => {
  const { headerimg,headerTitle,headerTime,headerbunny}=route.params
    return (            
      <ScrollView style={{flex:1}}>
         <View style={styles.parent}>
      <View style={styles.child}>
      <Image source={ headerimg} style={{flex:1,width:width,height:height/3,justifyContent:'center',alignItems:'center',backgroundColor:colors.darkgrey}} />
         <View style={styles.header}>
            <View  style={{flexDirection:'row'}}>
               
               <TouchableOpacity activeOpacity={0.8} style={styles.round}
               onPress={()=>navigation.navigate('About')}>
                <Ionicons 
                style={{textAlign:'center',justifyContent:'center',position:'absolute',bottom:-13}}
                name="arrow-back" size={25} color={color.pink2}/>
                </TouchableOpacity>
                <View style={styles.round2}>
                <Ionicons 
                style={{textAlign:'center',justifyContent:'center',position:'absolute',bottom:-14}}
                name="share-social-outline" size={25} color={color.pink2}/>
                </View>
                <View style={styles.round3}>
                <SimpleLineIcons
                style={{textAlign:'center',justifyContent:'center',position:'absolute',bottom:-12}}
                name="exclamation" size={22} color={color.pink2}/>
                </View>
            </View>
         </View>
         <View style={{position:'absolute',top:height*0.18}}>
           <Text style={styles.title}>{headerTitle}</Text>
         </View>
         <View style={styles.delivery}>
            <Text style={styles.deliveryText}>
               Delivery:{headerTime}
            </Text>
         </View>
         <View style={styles.rating}>
             <Text style={styles.ratingText}>
                 <Ionicons name="star" size={12} color={'white'}/> 4.1(391)
             </Text>
         </View>
      </View>
      
       </View>
         <View style={styles.deals}>
              <View style={styles.dealsWrap}>
                <Text style={styles.dealsTitle}>Bumper deals</Text>
                <Text style={styles.dealsText}>Free "Guava limca" with
                purchase of Bumper deals</Text>
              </View>
         </View>
         {/* popular */}
         <View style={{padding:10,flex:1 }}>
           <View style={{flexDirection:'row',alignItems:'center'}}>
           <MaterialCommunityIcons name="fire" 
             size={35} color={colors.pink}/>
             <Text style={{fontSize:22,fontWeight:'bold'}}>Popular</Text>
           </View>
           <View>
             <Text>Most order right now</Text>
           </View>
             {headerbunny.map((item)=>(
                   <View key={item.id} style={{flex:1 }}>
                   <View style={{marginTop:20,flexDirection:'row', justifyContent:'flex-end'}}>
                    <View style={{ flex:1}}>
                     <Text style={{fontWeight:'bold'}}>{item.title}</Text>
                     <Text style={{color:colors.darkgrey}}>{item.subTitle}</Text>
                     <Text style={{marginTop:55}}>{item.price}</Text>
                    </View>
                    <View>
                       <Image source={item.image}
                       style={{width:width/4,height:height/6,justifyContent:'center',alignItems:'center',borderRadius:10,backgroundColor:'darkgrey'}}/>
                    </View>
                   </View>
                   <View
                     style={{
                       borderBottomColor: colors.grey,
                       borderBottomWidth: 1,
                       marginTop:15,
             
                     }}
                   />
              </View> 
    ))}         
         </View>
      </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
      parent : {
        height:height/2.5,
        transform : [ { scaleX : 2 } ],
        borderBottomStartRadius : 200,
        borderBottomEndRadius : 200,
        overflow : 'hidden',
    },
    child : {
        flex : 1,
        transform : [ { scaleX : 0.5 } ],
        alignItems : 'center',
        justifyContent : 'center'
    },
    header:{
      backgroundColor:'rgba(0,0,0,0.6)',
      position:'absolute',
      height:height,
      width:width,
      flex:1,
      justifyContent:'center',
      alignItems:'center',
 
    },
    title:{
      color:'white',
      justifyContent:'center',
      alignItems:'center',
      fontSize:22,
      fontWeight:'bold',
      bottom:20
    },
    delivery:{
      position:'absolute',
      borderRadius:20,
      borderWidth:1,
      borderColor:'white',
      height:'16%',
      width:width/2.5,  
      padding:10,
      top:height*0.2,
     
    },
    deliveryText:{
     color:'white',
     justifyContent:'center',
     alignItems:'center',
     width:width/3.8,
     marginLeft:15,
 
     
    },
    rating:{
      position:'absolute',
      top:height*0.3
    },
   ratingText:{
     color:'white'
},
round:{
  width:40,
  height:40,
  borderRadius:40/2,
  borderColor:'white',
  borderWidth:40/2,
  bottom:80,
  right:width*0.3,
  textAlign:'center',
  alignItems:'center',
  
},
round2:{
  width:40,
  height:40,
  borderRadius:40/2,
  borderColor:'white',
  borderWidth:40/2,
  bottom:80,
  left:width*0.28,
  textAlign:'center',
  alignItems:'center'
  
},
round3:{
  width:40,
  height:40,
  borderRadius:40/2,
  borderColor:'white',
  borderWidth:40/2,
  bottom:80,
  left:width*0.3,
  textAlign:'center',
  alignItems:'center'
  
},
deals:{
  width:'100%',
  height:'10%',
  padding:20,
  flex:1
},
dealsTitle:{
 color:'white',
 fontWeight:'bold',
 fontSize:16
},
dealsText:{
 color:'white'
},
dealsWrap:{
  backgroundColor:color.pink,
  height:height/7.5,
  borderRadius:20,
  padding:15
}
})

export default Restaurants