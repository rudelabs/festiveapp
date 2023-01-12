import React,{useEffect} from 'react';
import {Dimensions,View,Text, ScrollView, TouchableOpacity, Image, Alert} from 'react-native';
import s from '../../styles/main.style'
import RNWhatsAppStickers from 'react-native-whatsapp-stickers'
import sticker_base from '../../stickers.json';


const {width,height}=Dimensions.get('window');
const StickerScreen = () => {
    const arrList = sticker_base.wishes;
    const openShare = async () => {
        Alert.alert('Unavailable');
        //return;
        try {
            var x=await RNWhatsAppStickers.isWhatsAppAvailable()    
            if(x){
                console.log("Available");
            }
            

        } catch (error) {
            console.log(error)
        }
        
        
        
      };

    useEffect(()=>{
        
    },[])
    return(
        <ScrollView>
            <View style={{width:width-20,height:height/4,backgroundColor:'#d3d3d3',margin:10,justifyContent:'center',borderRadius:25}}>
                <Text>Advertisement Here</Text>
            </View>
            <View style={[s.mdtp20,s.pdlt10]}>
                <Text style={[s.f22,s.b]}>Durga Puja Stickers</Text>
                <TouchableOpacity onPress={openShare} style={{width:250,height:30,justifyContent:'flex-end',alignItems:'flex-start',alignSelf:'flex-start'}}>
                        <Text style={[s.f18,s.b,s.clBl]}>Add to Whatsapp</Text>
                    </TouchableOpacity>
                <View style={[s.row,s.jStart,s.pdtp20,{flexWrap:'wrap'}]}>
                    {arrList.map((data,i)=>{
                        console.log(data.id);
                        return(
                            <View key={i} style={{width:100,height:100,marginRight:20,marginTop:20}}>
                                <Image source={{uri:data.data_url}} style={{width:'100%',height:'100%'}} />
                            </View>
                        )
                    })
                        
                        }
                    {/* <View style={{width:100,height:100,marginRight:20,marginTop:20,backgroundColor:'#a3a3a3'}}></View>
                    <View style={{width:100,height:100,marginRight:20,marginTop:20,backgroundColor:'#a3a3a3'}}></View>
                    <View style={{width:100,height:100,marginRight:20,marginTop:20,backgroundColor:'#a3a3a3'}}></View>
                    <View style={{width:100,height:100,marginRight:20,marginTop:20,backgroundColor:'#a3a3a3'}}></View>
                    <View style={{width:100,height:100,marginRight:20,marginTop:20,backgroundColor:'#a3a3a3'}}></View> */}
                </View>
                <View style={[s.mdtp30,{marginRight:30}]}>
                    
                </View>
            </View>
        </ScrollView>
    )
}

export default StickerScreen;