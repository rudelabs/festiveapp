/**
 * TO DO
 * 
 * CHANGE BACKGROUND COLOR
 * BOX SHADOW TO EACH CARD
 * 
 */


import React, { useContext, useEffect,useState } from 'react'
import {Dimensions,StyleSheet,Share,ScrollView,View,Text, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import s from '../../styles/main.style'
import { textData } from '../../Constants';
import LanguageContext from '../../context/languageContext';
import RBSheet from "react-native-raw-bottom-sheet";


const {width,height} = Dimensions.get('window');
const s_language=['English','Hindi'];
function wp (percentage) {
  const value = (percentage * width) / 100;
  return Math.round(value);
}
const slideHeight = height * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = width;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const Wishes = (props)=>{
    const [activeIndex,setactiveIndex]=useState(0);

    const {lang,setlang}=useContext(LanguageContext);
    const [iniLang,setiniLang]=useState(lang || "English");
    const [btnActive,setbtnActive]=useState(false);
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
          <TouchableOpacity activeOpacity={0.8} key={index} onPress={()=>onShare(item.text)} style={{
              backgroundColor: index % 2 ? '#3975d6' : "#d65039",
              borderRadius: 5,
              minHeight: 400,
              padding: 30,
              justifyContent:"center",
              }}>
            {/* <Text style={{fontSize: 30}}>{item.title}</Text> */}
            <Text style={{color:"white",fontSize:25}}>{item.text}</Text>
          </TouchableOpacity>

        )
    }

    const setLanguage=(data)=>{
      setiniLang(data);
      setbtnActive(true);
    }

    const confirmLanguage=()=>{
        setlang(iniLang);
        //this.RBSheet.close();
    }

    const closeLanguage=()=>{
      setiniLang(lang);
      setbtnActive(false);
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
              <Text style={[s.f14]}>Tap any card to share.</Text>
          </View>
          <View style={{flex:1,alignItems:'flex-end',paddingRight:10}}>
              <TouchableOpacity 
                //onPress={()=>props.navigation.navigate('Settings',{inner:true})} 
                onPress={() =>{
                  setiniLang(lang)
                   this.RBSheet.open()
                }} 
              style={{
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

       <View style={{justifyContent:"center",flex:1}}>
       <View >
       <Carousel
              data={main}
              renderItem={_renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              contentContainerCustomStyle={{alignItems:"center"}}
                  inactiveSlideScale={0.85}
                  inactiveSlideOpacity={0.7}
            />
       </View>
       </View>


            {/* <ScrollView>
              <View style={{flex:1,flexDirection:'column',justifyContent:'space-between',paddingTop:40}}>
              {
                main.map((data,i)=>{
                return(
                    <TouchableOpacity key={i} onPress={()=>onShare(data.text)} style={[{width,justifyContent:'center',alignItems:'center',paddingHorizontal:10,marginBottom:40},styles.shadow]}>
                      <View style={{minWidth:CARD_WIDTH,padding:10,borderRadius:24,paddingTop:20,paddingBottom:20,borderWidth:2,borderColor:'#d3d3d3'}}>
                        <Text style={[s.f24,s.textCenter]}>
                            {data.text}
                        </Text>
                        </View>
                    </TouchableOpacity>
                )
              })}
              </View>
            </ScrollView> */}
              <RBSheet
            ref={ref => {
              this.RBSheet = ref;
            }}
            height={300}
            openDuration={250}
            onClose={closeLanguage}
            
          >
            <View style={[s.fl1,s.pdlt10,s.pdtp10,{flexDirection:'column'}]}>
              
                <View style={[s.fl2,s.aSCenter]}>
                  {/* <Text style={[s.f22,s.b]}>Language</Text> */}
                  <Text style={[s.f24,s.b,s.textCenter,{lineHeight:35}]}>Select Your Preferred {'\n'}Language</Text>
                </View>

                <View style={[s.fl2,s.pdlt20,s.pdtp30,s.row,s.aSCenter]}>
                      
                {
                  s_language.map((data,i)=>{
                    return(
                        <TouchableOpacity onPress={()=>{
                          setLanguage(data)
                        }} key={i} style={[iniLang===data ? {borderWidth:2, borderColor:'cornflowerblue'} : {borderWidth:2, borderColor:'#d3d3d3'} ,{width:100,height:40,borderRadius:24,justifyContent:'center',alignItems:'center',marginRight:30}]}>
                            <Text>{data}</Text>
                        </TouchableOpacity>
                    )
                  })
                }
                </View>
                <View style={[s.fl2,s.jCenter,s.aSCenter]}>
                  <TouchableOpacity onPress={confirmLanguage}>
                    <Text style={[s.f22,btnActive ? s.clBl : s.clmuted,s.b]}>Confirm</Text>
                  </TouchableOpacity>
                  
                </View>
              
            </View>

          </RBSheet>
      </View>
    )
}

export default Wishes;

const styles = StyleSheet.create({
  shadow: {  
    overflow: 'hidden',
    shadowColor: '#d3d3d3',
    shadowRadius: 10,
    shadowOpacity: 1,
  }
});