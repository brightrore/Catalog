import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';
import { ScrollView } from 'react-native-gesture-handler';


const Baju= ({navigation}) => {
      return (
      <View>
              <ImageBackground source={require('../assets/bg.png')} style={{width: '100%', height: '100%'}}>
           <ScrollView>
          <View style = {styles.container}>
                  <View style={styles.tengah}>
                  <Text style={styles.text}>Long sleve Tshirt</Text>
                  <ImageDetail
                      imageSource={require('../assets/baju1.png')}
                  />
                  <Text></Text>
                  <Text> </Text>
                  <Text style={styles.textli}>Navy blue long sleeve tshirt with Hillary Outdoors logo screen printed on the back in orange and ‘Hillary Outdoors’ text on the sleeve.</Text>
                  <Text> </Text>
                  <Text style={styles.textli}>Rp.800.000</Text>
                </View>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <View style={styles.tengah}>
                <Text style={styles.text}>Federate Men's Shirt</Text>
                  <ImageDetail
                      imageSource={require('../assets/baju2.png')}
                  />
                  <Text></Text>
                  <Text> </Text>
                  <Text style={styles.textli}>Navy blue long sleeve tshirt with Hillary Outdoors logo screen printed on the back in orange and ‘Hillary Outdoors’ text on the sleeve.</Text>
                  <Text> </Text>
                  <Text style={styles.textli}>Rp.700.000</Text>
                </View>

                <Text></Text>
                <Text></Text>
                <Text></Text>
              <View style={styles.tengah}>
                  <Text style={styles.text}>Beast Hoodie</Text>
                  <ImageDetail
                      imageSource={require('../assets/baju3.png')}
                  />
                  <Text></Text>
                  <Text> </Text>
                  <Text style={styles.textli}>Cotton, polyester -Drawstrings -Front and back detail Machine wash cold with similar colors. Tumble dry on low. Do not dry-clean or iron</Text>
                  <Text> </Text>
                  <Text style={styles.textli}>Rp.1.200.000</Text>
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

export default Baju;