import React, {useState} from "react";
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import { View,Text,StyleSheet,ScrollView,TouchableHighlight,Image } from "react-native";
import Aux from '../Auxiliary/Auxiliary';

const potatoes = () =>{
    return(
        <Aux>
            <ScrollView>
                <View style={styles.outer}>
                    <View style={styles.inner}>
                        <Text style={styles.angio}>Potatoes</Text>
                    </View>
                    <View style={styles.inner}>
                        <Text style={styles.angios}>Potatoes were introduced to Europe from the Americas in the second half of the 16th century by the Spanish. Today they are a staple food in many parts of the world and an integral part of much of the world's food supply. As of 2014, potatoes were the world's fourth-largest food crop after maize (corn), wheat, and rice.[</Text>
                        <Text style={styles.found}>Found in: Wild potato species can be found throughout the Americas, from Canada to southern Chile.[</Text>
                        <Text style={styles.found}>Total Types: 5000 types</Text>
                        <Text style={styles.found}>Grow: Dig straight, shallow trenches, 2 to 3 feet apart, in prepared soil. Plant seed potatoes 12 inches apart and cover with about 3 inches of soil. When the shoots reach 10 to 12 inches tall, use a hoe or shovel to scoop soil from between rows and mound it against the plants, burying the stems halfway.</Text>
                        <Text style={styles.found}>Water:1-2 inches of water per week</Text>
                        <Image style={styles.image} source={require('../Images/Potatoes.jpg')} />
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

export default potatoes;