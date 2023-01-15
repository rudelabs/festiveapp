import React,{useEffect} from 'react';
import {Dimensions,View,Text, ScrollView, TouchableOpacity, Image, Alert} from 'react-native';
import s from '../../styles/main.style'
import RNWhatsAppStickers from 'react-native-whatsapp-stickers'
import sticker_base from '../../stickers.json';


const {width,height}=Dimensions.get('window');
const StickerScreen = () => {
    const arrList = sticker_base.wishes;
    const openShare = () => {
            RNWhatsAppStickers.isWhatsAppAvailable().then(isAvailable=>{
                if(isAvailable){
                    return RNWhatsAppStickers.send('festivalidentifier', 'Durga Puja Wishes');
                }
                return undefined;    
            }).catch(e=>{console.log(e)})    
    }
    return(
        <ScrollView>
            <View style={{flex:1,height:80,justifyContent:'center',paddingLeft:10}}>
                <Text style={[s.f22,s.b]}>Stickers</Text>
                <Text style={[s.f14]}>Express yourself with stickers.</Text>
            </View>
            <View style={{width:width-20,height:80,backgroundColor:'#d3d3d3',margin:10,justifyContent:'center',borderRadius:15}}>
                
            </View>
            <View style={[s.mdtp20,s.pdlt10]}>
                <View style={s.row}>
                    <View style={[s.fl1,s.jCenter,s.mdtp10]}>
                        <Text style={[{fontSize:20},s.b]}>Durga Puja</Text>
                        <Text style={[{fontSize:12}]}>Add sticker pack</Text>
                        
                    </View>
                    <View style={s.fl1}>
                    <TouchableOpacity onPress={openShare} style={{width:140,height:45,backgroundColor:'lightgreen',justifyContent:'center',alignItems:'center',alignSelf:'flex-end',marginRight:20,marginTop:10,borderRadius:5}}>
                            <Text style={[s.f14,s.b]}>Send to Whatsapp</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={[s.row,s.jStart,s.pdtp20,{flexWrap:'wrap'}]}>
                    {arrList.map((data,i)=>{
                        console.log(data.id);
                        return(
                            <View key={i} style={{width:width/3.5,height:110,marginRight:10,marginTop:20,borderColor:"#d3d3d3",borderWidth:2,borderRadius:14,justifyContent:'center',alignItems:'center'}}>
                                <Image source={{uri:data.data_url}} style={{width:'100%',height:'100%'}} />
                            </View>
                        )
                    })
                        
                    }
                </View>
                <View style={[s.mdtp30,{marginRight:30}]}>
                
                </View>
            </View>
        </ScrollView>
    )
}

export default StickerScreen;