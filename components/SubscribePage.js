import * as React from 'react';
import {Text, View,TextInput,Pressable,FlatList,Image,Alert } from 'react-native';
import Styles from './Styles';
import * as EmailValidator from 'email-validator';

const items = [
    { id: 1, imgurl: 'https://via.placeholder.com/150/FFFF00/FF00FF' },
    { id: 2, imgurl: 'https://via.placeholder.com/150/FF0000/FFFFFF' },
    { id: 3, imgurl: 'https://via.placeholder.com/150/FFFF00/000000' },
    { id: 4, imgurl: 'https://via.placeholder.com/150/00FF00/0000FF' },
    { id: 5, imgurl: 'https://via.placeholder.com/150/FF00FF/00FFFF' },
    { id: 6, imgurl: 'https://via.placeholder.com/150/00FFFF/FF00FF' },
    { id: 7, imgurl: 'https://via.placeholder.com/150/000000/FFFFFF' },
    { id: 8, imgurl: 'https://via.placeholder.com/150/FFFFFF/000000' },
    { id: 9, imgurl: 'https://via.placeholder.com/150/808080/0000FF' },
    { id: 10, imgurl: 'https://via.placeholder.com/150/FF0000/00FF00' },
    { id: 11, imgurl: 'https://via.placeholder.com/150/00FF00/FF0000' },
    { id: 12, imgurl: 'https://via.placeholder.com/150/0000FF/FFFF00' },
    { id: 13, imgurl: 'https://via.placeholder.com/150/FFFF00/FF00FF' },
    { id: 14, imgurl: 'https://via.placeholder.com/150/FF00FF/FFFF00' },
    { id: 15, imgurl: 'https://via.placeholder.com/150/00FFFF/000000' },
    { id: 16, imgurl: 'https://via.placeholder.com/150/000000/00FFFF' },
    { id: 17, imgurl: 'https://via.placeholder.com/150/808080/FF0000' },
    { id: 18, imgurl: 'https://via.placeholder.com/150/FF0000/808080' },
    { id: 19, imgurl: 'https://via.placeholder.com/150/00FF00/808080' },
    { id: 20, imgurl: 'https://via.placeholder.com/150/0000FF/FF0000' },
  ];
function render(data){

    return (
    <Image style={Styles.image2} source={{uri:data.item.imgurl}} resizeMode='stretch' />
    )
}



function NewsLetter(){
const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState(false);

  const showAlert = () => {
    Alert.alert(
      "Oh Yeah!",
      "Successfully Subscribed for Lemon Newsletter",
      [
        { text: "OK", onPress: () => {setEmail('');setMessage(false)} }
      ],
      { cancelable: false }
    );
  };
  const validateEmail = (data) => {
    setEmail(data);
    EmailValidator.validate(email)?setMessage(true):setMessage(false);
  };
    return (<View style={Styles.container}>
        <View style={Styles.bos} >
            <TextInput style={Styles.input} placeholder='Enter Email'
            keyboardType='email-address'
            onChangeText={validateEmail}
            value={email}
            ></TextInput>

            {email.length>0 && !message?(<Text style={{color:!message?'white':null,
                textAlign:'center',
                alignSelf:'center'
            }}>*Invalid Email</Text>):null}
            
            
            <Pressable style={[Styles.button,{backgroundColor:!message?'grey':'#ff6347'}]} disabled={!message?true:false} onPress={showAlert}>
                <Text style={Styles.buttonText}>Subscribe</Text>
            </Pressable>

        </View>
        <FlatList style={{marginTop:20}} data={items} renderItem={render} keyExtractor={(item) => item.id.toString()}/>
        
    </View>);
}




export default NewsLetter;