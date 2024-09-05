import * as React from 'react';
import { StyleSheet} from 'react-native';
const Styles=StyleSheet.create({
   container:{
    flex: 1,
    padding: 16,
    backgroundColor: '#2E073F',
   },
   heading:{
    fontSize:40,
    textAlign:'center',
    fontWeight:'bold',
    color:'#EBD3F8',
    marginTop:25,
    color: '#fff', // Text color
    textShadowColor: '#ff0000', // Shadow color
    textShadowOffset: { width: 0, height: 0 }, // No offset
    textShadowRadius: 20,
   },
   contenttext:{
    fontSize:18,
    textAlign:'center',
    color:'#EBD3F8',
    fontFamily:'contentText',
    marginTop:40
   },
   newsletterButton: {
    backgroundColor: '#7A1CAC', // Button background color
    paddingVertical: 12, // Vertical padding for height
    paddingHorizontal: 24, // Horizontal padding for width
    borderRadius: 8, // Rounded corners
    alignItems: 'center', // Center text horizontally
    justifyContent: 'center', // Center text vertically
    elevation: 5, // Shadow for Android
    shadowColor: '#EBD3F8', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.2, // Shadow opacity for iOS
    shadowRadius: 5, // Shadow blur radius for iOS
    marginTop:50,
  },
  newsletterButtonText: {
    color: 'white', // Text color
    fontSize:20, // Font size
    fontWeight: 'bold', // Bold text
  },
  image:{
    marginTop:20,
    height:250,
    width:'1rem',
    borderRadius:10,
  },
  containerVideo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundVideo: {
    width: '100%',
    height: '100%',
  },
  bos:{
    width:'1rem',
    height:200,
    backgroundColor:'#AD49E1',
    borderRadius:10,
    elevation:0,
    shadowColor:'#fff',
    shadowOffset:{height:5,width:0},
    shadowOpacity:0.2,
  },
  input:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '1rem',
    backgroundColor: 'white',
    margin:20,
    marginTop:30,
    fontSize:20,

  },
  button: {
    backgroundColor: '#ff6347', // Tomato color
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width:'70%',
    height:50,
    margin:20,
    alignSelf:'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image2:{
    width:'1rem',
    height:300,
    marginTop:15,
    borderRadius:10,
  },
  
});





export default Styles;