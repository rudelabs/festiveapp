import * as React from 'react';
import { Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StickerScreen from './TabScreens/stickers';
import Wishes from './TabScreens/wishes';
import InspiringImages from './TabScreens/Images';

import storeData from '../methods/store';
import getData from '../methods/read';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  React.useEffect(()=>{
    storeData('@initialRender',{type:true});
    getData('@language').then(data=>console.log(data))
    .catch(e=>console.log(e));
  },[])
  return (
      <Tab.Navigator initialRouteName='Wish'>
        <Tab.Screen name="InspiringImages"  options={{headerShown:false}}>
          {(props)=><InspiringImages {...props} />}
          </Tab.Screen>
        <Tab.Screen name="Wish" options={{headerShown:false}} >
          {(props)=><Wishes {...props} lang={'Hindi'} />}
          </Tab.Screen>
        <Tab.Screen name="Stickers" component={StickerScreen} />
      </Tab.Navigator>
  );
}