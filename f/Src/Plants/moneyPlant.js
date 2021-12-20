import React, {useState} from "react";
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import { View,Text,StyleSheet,ScrollView,TouchableHighlight,Image } from "react-native";
import Aux from '../Auxiliary/Auxiliary';

const MoneyPlant = () =>{
    return(
        <Aux>
            <ScrollView>
                <View style={styles.outer}>
                    <View style={styles.inner}>
                        <Text style={styles.angio}>Money Plant</Text>
                    </View>
                    <View style={styles.inner}>
                        <Text style={styles.angios}>The Chinese Money Plant has rounded flat coin-shaped leaves; hence, it’s common name. Its delicate stems will dance as a breeze blows through a filtered light window. Where the stem attaches to the underside of the leaf, a yellowish dot appears on the top side of the leaf, making it more unique to enjoy. Stand it as a centerpiece or in a grouping. It is sure to get attention and admiration.</Text>
                        <Text style={styles.found}>Found in: Mostly Found in China</Text>
                        <Text style={styles.found}>Total Species: 9 species</Text>
                        <Text style={styles.found}>Light Intensity: Medium to bright indirect light with southern exposure.Donot put this in direct sunlight</Text>
                        <Text style={styles.found}>Water:Weekely Water this plant.If the leaves start to droop, that’s a sign it needs more water.</Text>
                        <Image style={styles.image} source={require('../Images/moneyplant.jpg')} />
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

export default MoneyPlant;