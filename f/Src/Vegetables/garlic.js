import React, {useState} from "react";
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import { View,Text,StyleSheet,ScrollView,TouchableHighlight,Image } from "react-native";
import Aux from '../Auxiliary/Auxiliary';

const garlic = () =>{
    return(
        <Aux>
            <ScrollView>
                <View style={styles.outer}>
                    <View style={styles.inner}>
                        <Text style={styles.angio}>Garlic</Text>
                    </View>
                    <View style={styles.inner}>
                        <Text style={styles.angios}>Garlic (Allium sativum) is an herb related to onion, leeks, and chives. It is commonly used for conditions related to the heart and blood system.Garlic produces a chemical called allicin. This is what seems to make garlic work for certain conditions. Allicin also makes garlic smell. Some products are made "odorless" by aging the garlic, but this process can also change the effects of garlic.</Text>
                        <Text style={styles.found}>Found in: Garlic is native to central Asia but grows wild in Italy and southern France and is a classic ingredient in many national cuisines.</Text>
                        <Text style={styles.found}>Total Types: 3 types</Text>
                        <Text style={styles.found}>Temprature: 40F</Text>
                        <Text style={styles.found}>Grow:Select a gardening area that receives 6 to 8 hours of sunlight per day. If you plant in the spring, wait until the soil has thawed and drained. Once soil crumbles apart easily, it’s time to plant. For an easy and large harvest, garlic grower Robin Jarry of Hope, Maine, suggests using heavily mulched raised beds, especially in heavy soil. “I plant in raised beds for good drainage, and then mulch with about 6 inches of old hay after the ground freezes. I never water my garlic—I like low-maintenance vegetables!” Raised beds should be 2 to 3 feet wide and at least 10 to 12 inches tall.Before planting cloves, work a couple tablespoons of 5-10-10 complete fertilizer, bone meal or fish meal into the soil several inches below where the base of the garlic will rest.</Text>
                        <Text style={styles.found}>Water:1/2-inch-to-1-inch of water per week</Text>
                        <Image style={styles.image} source={require('../Images/garlic.jpg')} />
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

export default garlic;