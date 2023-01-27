
import React from "react";
import {View,Text,Image,Dimensions,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import ShareImage from 'react-native-share';
import s from '../styles/main.style';
import { day_title } from "../Constants";

const {width} = Dimensions.get('window');

const ImageView = ({route,navigation})=>{
    
    const onShare=(imagebase64)=>{
        console.log(imagebase64);
        const shareOptions = {
          title: 'Share by',
          url: imagebase64,
          filename: day_title, // only for base64 file in Android
        };
        // ShareImage.shareSingle(shareOptions);
        ShareImage.open(shareOptions)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            err && console.log(err);
          });
      }

    return(
        <>
        <View style={{width,height:80,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',paddingLeft:10,backgroundColor:'#000'}}>
          <View style={{flex:2,paddingLeft:10}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Text style={s.cllight}>
                    <Icon name={'close'} size={22}  />
                </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex:1,alignItems:'flex-end',paddingRight:10}}>
              <TouchableOpacity 
                //onPress={()=>props.navigation.navigate('Settings',{inner:true})} 
                onPress={()=>onShare(route.params.img)}
              style={{
                  width:80,
                  height:40,
                  backgroundColor:'#a3a3a356',
                  justifyContent:'center',
                  alignItems:'center',
                  borderRadius:24
              }}>
                  <Text style={[s.b,s.cllight]}>Share</Text>
              </TouchableOpacity>
          </View>
        </View>
          
        <View style={[s.fl1,s.jCenter,{backgroundColor:'#000'}]}>
            <Image source={{uri:route.params.img}} style={{width:width,height:400}} />
        </View>
        </>
    )
}

export default ImageView;