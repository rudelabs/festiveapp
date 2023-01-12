import React from 'react'
import {Dimensions,View, Text, TouchableOpacity} from 'react-native';
import s from '../styles/main.style'

const {width,height}=Dimensions.get('window');

const Welcome = ({navigation}) => {

    const linkTo=()=> navigation.navigate('Languages',{inner:false});
    
    return(
        <View style={s.fl1}>
            <View style={s.fl2}>
                <View style={[{backgroundColor:'#a3a3a3',height:height/1.6}]}></View>
            </View>
            <View style={[s.fl1,s.pdlt20,s.pdrt20]}>
                <Text style={[s.f28,s.b]}>Welcome</Text>
                <Text numberOfLines={3} style={[s.f24,s.pdtp20,{fontWeight:'400'}]}>Get the best wishes for festival, right in one place.</Text>
                <TouchableOpacity onPress={linkTo} style={[s.buttonSecondary,s.mdtp30]}>
                    <Text style={[s.cllight,s.f22,s.b]}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Welcome;