import React from 'react';
import { Text, View, Button, ImageBackground, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {

     return (
 
        <View style={styles.container}>
             <ImageBackground source={require('../assets/bg.png')} style={{width: '100%', height: '100%'}}>

         <View style={styles.container} >
            <Text style={styles.text}>Welcome to Our Catalog</Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <View style={styles.mid}>
                  <Button style={styles.Button}
                     text color = '#808080'
                     title="Fashion Catalog"
                     onPress={()=> navigation.navigate('Pilihan')}
                    />
              </View>
            </View>
         </ImageBackground>  
     </View>
   
     )};
 
     const styles = StyleSheet.create({
         container: {
             flex: 1,
             justifyContent: 'center',
             alignItems: 'center'
         },
     mid:{
         width: "70%",
         marginVertical:5
     },
     text:{
         color:'#af9800',
         textAlign: 'center',
         fontSize : 25,
         
         
   
     } 
     })
 

export default HomeScreen;
