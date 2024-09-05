import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from './components/WelcomeScreen';
import NewsLetter from './components/SubscribePage';
import { createStackNavigator, Header } from '@react-navigation/stack';
import Explore from './components/Explore';
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const Tab=createBottomTabNavigator();
const Stack=createStackNavigator();
function Tabs(){
  return (
   
      <Tab.Navigator>
        <Tab.Screen name="Welcome" component={Welcome} options={{tabBarIcon:((focused,color,size)=>{
          return <FontAwesome name="home" size={35} color="black" />
        }),
        tabBarActiveTintColor:"#2E073F",
        tabBarActiveBackgroundColor:'#EBD3F8',
        tabBarLabel:()=>null,
        headerShown:false,
        }} 
        />
        <Tab.Screen name="Explore" component={Explore} options={{tabBarIcon:((focused,color,size)=>{
          return <MaterialIcons name="explore" size={35} color="black" />
        }),
        tabBarActiveTintColor:"#2E073F",
        tabBarActiveBackgroundColor:'#EBD3F8',
        tabBarLabel:()=>null,
        }} />
      </Tab.Navigator>
    
  )
}


function App() {
    const [fontLoaded]=useFonts({
      contentText:require('./assets/fonts/content.ttf'),
  });
  if (!fontLoaded){
      return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTintColor:'white'}}>
        <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false }}/>
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false,
         
         }} />
        <Stack.Screen name="Newsletter"  component={NewsLetter} options={{ detachPreviousScreen:true,
         headerStyle:({backgroundColor:'#ff6347'
         }),
         headerTitleStyle:({color:'white'}) }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;

