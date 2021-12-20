import React, {useState} from "react";
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import { View,Text,StyleSheet,ScrollView,TouchableHighlight,Image } from "react-native";
import Aux from '../Auxiliary/Auxiliary';

const Angiosperms = () =>{
    return(
        <Aux>
            <ScrollView>
                <View style={styles.outer}>
                    <View style={styles.inner}>
                        <Text style={styles.angio}>Angiosperms</Text>
                    </View>
                    <View style={styles.inner}>
                        <Text style={styles.angios}>Angiosperms are seed-bearing vascular plants. Their reproductive structures are flowers in which the ovules are enclosed in an ovary. Angiosperms are found in almost every habitat from forests and grasslands to sea margins and deserts. Angiosperms display a huge variety of life forms including trees, herbs, submerged aquatics, bulbs and epiphytes. The largest plant families are Orchids, and Compositae (daisies) and Legumes (beans).</Text>
                        <Text style={styles.found}>Found in: In all terrestrial and aquatic habitats on earth</Text>
                        <Text style={styles.found}>Total Species: 352,000 species</Text>
                        <Text style={styles.found}>Light Intensity: Require Low Light</Text>
                        <Text style={styles.found}>Temprature: From 70 to 80 Degree</Text>
                        <Image style={styles.image} source={require('../Images/Snake-gourd-bloom.jpg')} />
                    </View>
                    
                </View>
            </ScrollView>
        </Aux>
    )
}

const styles = StyleSheet.create({

    outer: {
        justifyContent:"center",
        textAlign:"center",
        alignItems:"center",
    },
    image:{
        width:400,
        height:300,
        marginTop:"10%"
    },
    inner:{
        marginTop:"5%"
    },
    angio:{
        fontSize:20,
    },
    angios:{
        marginLeft:"2%",
        marginRight:"2%"
    },
    found:{
        marginTop:"2%",
        marginLeft:"2%"
    }
});

export default Angiosperms;