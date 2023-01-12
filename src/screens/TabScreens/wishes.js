import React, { useContext, useEffect,useState } from 'react'
import {Dimensions,Share,View,Text, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import s from '../../styles/main.style'
import { textData } from '../../Constants';
import LanguageContext from '../../context/languageContext';


const {width,height} = Dimensions.get('window');

const Wishes = (props)=>{
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
        <ScrollView>
            <View style={{width,height:80,backgroundColor:'#FFF',justifyContent:'center',alignItems:'flex-end',paddingRight:20}}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Languages',{inner:true})} style={{
                    width:150,
                    height:40,
                    backgroundColor:'#a3a3a356',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:24
                }}>
                    <Text style={s.b}>Change Language</Text>
                    
                </TouchableOpacity>
            </View>
          {
            main.map((data,i)=>{
            return(
                <View key={i} style={{width,height,justifyContent:'center',alignItems:'center',backgroundColor:'pink'}}>
                    <Text style={[s.f28,s.b,s.textCenter]}>
                        {data.text}
                    </Text>
                    <View style={[s.row,s.jCenter,s.mdtp20]}>
                        <TouchableOpacity onPress={()=>onShare(data.text)} style={{width:60,height:60,backgroundColor:'#a3a3a3'}}></TouchableOpacity>
                    </View>
                </View>
            )
          })}  
        </ScrollView>
    )
}

export default Wishes;