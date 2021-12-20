import React, {useState} from "react";
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import { View,Text,StyleSheet,ScrollView,TouchableHighlight,Image } from "react-native";
import Aux from '../Auxiliary/Auxiliary';

const shallots = () =>{
    return(
        <Aux>
            <ScrollView>
                <View style={styles.outer}>
                    <View style={styles.inner}>
                        <Text style={styles.angio}>Shallots</Text>
                    </View>
                    <View style={styles.inner}>
                        <Text style={styles.angios}>The shallot is a botanical variety (a cultivar) of the onion. Until 2010, the shallot was classified as a separate species, Allium ascalonicum, a name that is a synonym of Allium cepa, the species name of the onion. A. cepa is the correct name for the shallot species</Text>
                        <Text style={styles.found}>Found in: In Europe, the Pikant, Atlas, and Ed's Red types of shallots are the most common.In parts of southern France, the grey type is grown widely.</Text>
                        <Text style={styles.found}>Total Types: 3 Main types</Text>
                        <Text style={styles.found}>Grow: Shallots are most commonly grown from cloves. Place each clove in the soil with the thick end pointing down and the top just above the soil line. Plant them around 6 inches apart in rows, and space each row around 12 inches apart. These plants do not need a support structure to grow on.</Text>
                        <Text style={styles.found}>Water:Water the plant when the soil is dry around 1 inch down.</Text>
                        <Image style={styles.image} source={require('../Images/shallots.jpg')} />
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

export default shallots;