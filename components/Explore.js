import * as React from 'react';
import { Text, View,Image } from 'react-native';


import Styles from './Styles';




function Explore(){
    return   <View style={Styles.containerVideo}>
    <Image style={{width:100,height:100,
      margin:20,
    }} source={require('../assets/load.gif')} />
    <Text>This Page is Under Development</Text>
    <Text>It will have Short Video Playback..</Text>
  </View>

}


export default Explore;