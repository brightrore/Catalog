import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';
import { ScrollView } from 'react-native-gesture-handler';


const Celana= ({navigation}) => {
      return (
      <View>
              <ImageBackground source={require('../assets/bg.png')} style={{width: '100%', height: '100%'}}>
           <ScrollView>
          <View style = {styles.container}>
                  <View style={styles.tengah}>
                  <Text style={styles.text}>River Mid Blue 5 Pocket Denim Jeans, Acne Studios</Text>
                  <ImageDetail
                      imageSource={require('../assets/celana1.jpg')}
                  />
                  <Text></Text>
                  <Text> </Text>
                  <Text style={styles.textli}>About the designer: Founded in 1996, this Stockholm-based creative collective offers areas of expertise in graphic design, film production and fashion</Text>
                  <Text> </Text>
                  <Text style={styles.textli}>Rp.650.000</Text>
                </View>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <View style={styles.tengah}>
                <Text style={styles.text}>jeans man SLIM CARROT SALSA JEANS 104712 8504</Text>
                  <ImageDetail
                      imageSource={require('../assets/celana2.jpg')}
                  />
                  <Text></Text>
                  <Text> </Text>
                  <Text style={styles.textli}>Here you can buy Ropa de marca hombre from the luxury fashion firm Salsa Jeans.</Text>
                  <Text> </Text>
                  <Text style={styles.textli}>Rp.750.000</Text>
                </View>


             
          </View>
          </ScrollView>
          </ImageBackground>
      </View>
      )
  };

  const styles = StyleSheet.create({
      container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
      },
  tengah:{
      width: "55%",
      marginVertical:20
  }, 
  text:{
      color:'#001b74',
      textAlign: 'center',
      fontSize : 25,
  },
  textli:{
    color:'#6c709b',
    textAlign: 'center',
    // fontSize : 25,
    }
  })

export default Celana;