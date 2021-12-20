import React, {useState} from "react";
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import { View,Text,StyleSheet,ScrollView,TouchableHighlight,Image } from "react-native";
import Aux from '../Auxiliary/Auxiliary';

const peachLily = () =>{
    return(
        <Aux>
            <ScrollView>
                <View style={styles.outer}>
                    <View style={styles.inner}>
                        <Text style={styles.angio}>Peace Lily</Text>
                    </View>
                    <View style={styles.inner}>
                        <Text style={styles.angios}>Peace lilies make excellent houseplants for the home or office. These lovely plants not only brighten up a living space, but are also excellent at cleaning the air of the room they are in. Most commonly, these plants have dark green leaves and white “flowers.” What most people think of as the flower is actually a specialized leaf bract that grows hooded over the flowers.</Text>
                        <Text style={styles.found}>Found in: Islamabad,Rawalipindi,Karachi,Lahore</Text>
                        <Text style={styles.found}>Total Species: 40 species</Text>
                        <Text style={styles.found}>Light Intensity: Peace lilies that are placed in more light tend to produce the lovely white spathes and flowers more, while peace lilies in low light will bloom less and will look more like a traditional foliage plant</Text>
                        <Text style={styles.found}>Water:Check once a week if they need Water or not. Do not over water them</Text>
                        <Image style={styles.image} source={require('../Images/peace.png')} />
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

export default peachLily;