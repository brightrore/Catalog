import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';
import { ScrollView } from 'react-native-gesture-handler';


const sepatu= ({navigation}) => {
      return (
      <View>
              <ImageBackground source={require('../assets/bg.png')} style={{width: '100%', height: '100%'}}>
           <ScrollView>
          <View style = {styles.container}>
                  <View style={styles.tengah}>
                  <Text style={styles.text}>Converse Black Chuck Taylor Hi All Star Renew Recycled Sneakers</Text>
                  <ImageDetail
                      imageSource={require('../assets/sepatu1.png')}
                  />
                  <Text></Text>
                  <Text> </Text>
                  <Text style={styles.textli}>Textile upper. Made of recycled polyester from used plastic bottles. This saves water and energy and reduces greenhouse gas emissions, too. Cool, right?</Text>
                  <Text> </Text>
                  <Text style={styles.textli}>Rp.800.000</Text>
                </View>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                  <View style={styles.tengah}>
                <Text style={styles.text}>Novotel Manado Golf Resort and Convention Center</Text>
                  <ImageDetail
                      imageSource={require('../assets/sepatu.png')}
                  />
                  <Text></Text>
                  <Text> </Text>
                  <Text>Adidas Human Race NMD Pharrell Solar Pack Aqua, Brand new, All products are 100% authentic.</Text>
                  <Text> </Text>
                  <Text>Rp.4.899.999</Text>
                </View>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <View style={styles.tengah}>
                <Text style={styles.text}>Skechers GOrun Ride 8 Hyper Men's Yellow/Black</Text>
                  <ImageDetail
                      imageSource={require('../assets/sepatu2.png')}
                  />
                  <Text></Text>
                  <Text> </Text>
                  <Text>The Skechers Go Run Ride 8 returns to give runners a fast and firm ride with its HYPERBURST™ midsole. An update to the award-winning Skechers Go Run</Text>
                  <Text> </Text>
                  <Text>Rp.2.600.000</Text>
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


export default sepatu;