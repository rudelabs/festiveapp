import React, { useContext, useEffect,useState } from 'react'
import {Dimensions,Share,ScrollView,View,Text, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import s from '../../styles/main.style'
import { textData } from '../../Constants';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import LanguageContext from '../../context/languageContext';


const {width,height} = Dimensions.get('window');
const CARD_WIDTH=parseInt(width-20);
const XDATA=[
  {
      title:"Item 1",
      text: "Text 1",
  },
  {
      title:"Item 2",
      text: "Text 2",
  },
  {
      title:"Item 3",
      text: "Text 3",
  },
  {
      title:"Item 4",
      text: "Text 4",
  },
  {
      title:"Item 5",
      text: "Text 5",
  },
]


const Wishes = (props)=>{
    const [activeIndex,setactiveIndex]=useState(0);

    const {lang,setlang}=useContext(LanguageContext);
    //console.log("RUN",lang);
    const DATA=lang ==="English"? textData.English.wishes : lang==="Hindi" ? textData.Hindi : textData.Bengali;
    const [main,setmain]=useState(DATA);
    const onShare = async (text) => {
        try {
          const result = await Share.share({
            message:text,
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };

      const _renderItem=({item,index})=>{
        return (
          <View style={{
              backgroundColor:'#FFF',
              borderRadius: 5,
              height: height,
              padding: 50,
              }}>
            <Text style={{fontSize: 30}}>{item.title}</Text>
            <Text>{item.text}</Text>
          </View>

        )
    }

    useEffect(()=>{
        var content;
        if(lang==='English'){
            content=textData.English.wishes;
        }else if(lang==='Hindi'){
            content=textData.Hindi
        }else{
            content=textData.Bengali
        }
        setmain(content);
    },[lang])
    return(
      <View style={{flex:1,backgroundColor:'#FFF'}}>
        <View style={{width,height:80,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',paddingLeft:10}}>
          <View style={{flex:2}}>
              <Text style={[s.f22,s.b]}>Messages</Text>
              <Text style={[s.f14]}>Good wishes for your loved ones.</Text>
          </View>
          <View style={{flex:1,alignItems:'flex-end',paddingRight:10}}>
              <TouchableOpacity onPress={()=>props.navigation.navigate('Settings',{inner:true})} style={{
                  width:80,
                  height:40,
                  backgroundColor:'#a3a3a356',
                  justifyContent:'center',
                  alignItems:'center',
                  borderRadius:24
              }}>
                  <Text style={s.b}>{lang}</Text>
              </TouchableOpacity>
          </View>
        </View>
          
            <ScrollView>
              <View style={{flex:1,flexDirection:'column',justifyContent:'space-between',paddingTop:40}}>
              {
                main.map((data,i)=>{
                return(
                    <View key={i} style={{width,justifyContent:'center',alignItems:'center',paddingHorizontal:10,marginBottom:40}}>
                      <View style={{minWidth:CARD_WIDTH,padding:10,borderRadius:24,paddingTop:30,borderWidth:2,borderColor:'#d3d3d3'}}>
                        <Text style={[s.f24,s.textCenter]}>
                            {data.text}
                        </Text>
                        <View style={[s.row,s.jCenter,s.mdtp20]}>
                            <TouchableOpacity onPress={()=>onShare(data.text)} style={{width:60,height:60,justifyContent:'center',alignItems:'center'}}>
                            <Icon name="share-outline" color={'#808080'} size={42} />
                            </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                )
              })}
              </View>
            </ScrollView>
        
      </View>
    )
}

export default Wishes;