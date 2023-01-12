import React from 'react'
import {View,StyleSheet,StatusBar,Dimensions,Text,FlatList,Image, ScrollView, TouchableOpacity} from 'react-native'
import ShareImage from 'react-native-share';
const {width,height} = Dimensions.get('window');
import image_base from '../../images.json';
import {day_title} from '../../Constants';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
const InspiringImages = () => {

    const onShare=(imagebase64)=>{
      console.log(imagebase64);
      const shareOptions = {
        title: 'Share via',
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
        
            <View style={styles.container}>
                {/* {
                    image_base.wishes.map((data,i)=>{
                        console.log(i);
                        return(
                            <Image key={i} source={{uri:data.data_url}} style={{width:"100%",height:"100%",resizeMode:'contain'}} />
                        )
                    })
                } */}
                <FlatList
                    data={image_base.wishes}
                    renderItem={(itemData) => (
                        <View>
                          <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => onShare(itemData.item.data_url)}
                            >
                            <Image
                              source={{uri: itemData.item.data_url}}
                              onLoad={() => console.log('Image loaded')}
                              resizeMode="contain"
                              style={{
                                marginVertical: 20,
                                width: Dimensions.get('window').width - 20,
                                minHeight: 500,
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            />
                          </TouchableOpacity>
                        </View>
                      )}
                    keyExtractor={item => item.id}
                />
            </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingLeft:10,
      backgroundColor:'#000'

    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

export default InspiringImages;