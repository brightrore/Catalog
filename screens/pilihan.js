import React from 'react';
import { Text, View, Button, ImageBackground, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {

     return (
 
        <View style={styles.container}>
             <ImageBackground source={require('../assets/bg.png')} style={{width: '100%', height: '100%'}}>

         <View style={styles.container} >
              <View style={styles.tengah}>
                  <Button style={styles.Button}
                     text color = '#808080'
                     title="Baju"
                     onPress={()=> navigation.navigate('Baju')}
                    />
              </View>
            </View>
            <View style={styles.container} >
             <View style={styles.tengah}>
                  <Button style={styles.Button}
                     text color = '#808080'  title="Celana"
                     onPress={()=> navigation.navigate('Celana')}
                    />
              </View>
            </View>
            <View style={styles.container} >
             <View style={styles.tengah}>
                  <Button style={styles.Button}
                     text color = '#808080'  title="Sepatu"
                     onPress={()=> navigation.navigate('Sepatu')}
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
     tengah:{
         width: "50%",
         marginVertical:5
     }, 
     })
 

export default HomeScreen;
