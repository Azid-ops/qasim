import React, {useState} from "react";
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import { View,Text,StyleSheet,ScrollView,TouchableHighlight,Image } from "react-native";
import Aux from '../Auxiliary/Auxiliary';

const rubberPlant = () =>{
    return(
        <Aux>
            <ScrollView>
                <View style={styles.outer}>
                    <View style={styles.inner}>
                        <Text style={styles.angio}>RubberPlant</Text>
                    </View>
                    <View style={styles.inner}>
                        <Text style={styles.angios}>Rubber trees, formally ficus elastica, can be enjoyed as either medium-sized house plants or grown to become focal point, beautiful indoor trees. If you’re patient enough to grow your own, plants that start out younger when you buy them adapt better to indoor living than starting with a more mature plant. They can grow to impressive heights within a few years, especially if you put the plants outside during the summer. Keeping the plants in small pots will restrict their growth, if you want to keep them smaller.</Text>
                        <Text style={styles.found}>Found in: Islamabad,Rawalipindi,Karachi,Lahore</Text>
                        <Text style={styles.found}>Total Types: 11 types</Text>
                        <Text style={styles.found}>Light Intensity: Rubber plants like bright light and a lot of it, but not direct sunlight.</Text>
                        <Text style={styles.found}>Water:Rubber plant’s water needs vary according to season: In the growing season (summer), the plant should be kept moist. This includes wiping the leaves with a damp cloth or even misting them. During the dormant season, your plant may only need water once or twice a month. Watch for droopy leaves, which indicate a need for more water. Leaves that turn yellow and brown and drop signal over-watering.</Text>
                        <Image style={styles.image} source={require('../Images/rubber.jpg')} />
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

export default rubberPlant;