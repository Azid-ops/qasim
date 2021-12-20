import React, {useState} from "react";
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import { View,Text,StyleSheet,ScrollView,TouchableHighlight,Image } from "react-native";
import Aux from '../Auxiliary/Auxiliary';

const Home = () =>{
    const navigation = useNavigation();

    return(
        <Aux>
            <ScrollView>
                <View style={styles.main}>
                    <View style={styles.outer}>
                        <View style={styles.inner}>
                            <TouchableHighlight 
                                style={styles.button}
                            >
                                    <Text style={styles.login}>
                                    Plants
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>

                    <View style={styles.outer}>
                        <View style={styles.inner}>
                            <TouchableHighlight 
                                style={styles.button}
                                onPress={()=>{
                                    navigation.navigate("Angiosperms")
                                }}
                            >
                                    <Text style={styles.login}>
                                    Angiosperms
                                </Text>
                            </TouchableHighlight>
                        </View>

                        <View style={styles.inner}>
                            <TouchableHighlight 
                                style={styles.button}
                                onPress={()=>{
                                    navigation.navigate("MoneyPlant")
                                }}
                            >
                                    <Text style={styles.login}>
                                    Money Plant
                                </Text>
                            </TouchableHighlight>
                        </View>

                        <View style={styles.inner}>
                            <TouchableHighlight 
                                style={styles.button}
                                onPress={()=>{
                                    navigation.navigate("RubberPlant")
                                }}
                            >
                                    <Text style={styles.login}>
                                    Rubber Plant
                                </Text>
                            </TouchableHighlight>
                        </View>

                        <View style={styles.inner}>
                            <TouchableHighlight 
                                style={styles.button}
                                onPress={()=>{
                                    navigation.navigate("PeaceLily")
                                }}
                            >
                                    <Text style={styles.login}>
                                    Peach Lily
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    
                    <View style={styles.outer}>
                        <View style={styles.inner}>
                            <TouchableHighlight 
                                style={styles.button}
                            >
                                    <Text style={styles.login}>
                                    Vegetables
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>

                    <View style={styles.outer}>
                        <View style={styles.inner}>
                            <TouchableHighlight 
                                style={styles.button}
                                onPress={() => {
                                    navigation.navigate("potatoes")
                                }}
                            >
                                    <Text style={styles.login}>
                                    Potatoes
                                </Text>
                            </TouchableHighlight>
                        </View>

                        <View style={styles.inner}>
                            <TouchableHighlight 
                                style={styles.button}
                                onPress={() => {
                                    navigation.navigate("shallots")
                                }}
                            >
                                <Text style={styles.login}>
                                    Shallots
                                </Text>
                            </TouchableHighlight>
                        </View>

                        <View style={styles.inner}>
                            <TouchableHighlight 
                                style={styles.button}
                                onPress={() => {
                                    navigation.navigate("garlic")
                                }}
                            >
                                    <Text style={styles.login}>
                                    Garlic
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>        
            </ScrollView>
            
            
        </Aux>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop:"2%",
    },
    info:{
        fontSize: 20,
    },
    next: {
        color:"black",
        fontSize:20,
        marginTop:20
    },
    main: {
        marginTop:"20%"
    },
    myText: {
        color:"white"
    },
    inner:
    {
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        flex:0.4,
        flexDirection:"row",
        marginTop:"5%",
        backgroundColor:"green",
        borderRightColor:"white",
        borderRightWidth:3,
        paddingTop:5,
        paddingBottom:5,
    },
    scroll:{
        paddingBottom:"100%"
    },
    out:
    {
        backgroundColor:"green",
        padding:10,
        borderRadius:10,
        marginTop:"3%"
    },
    angioImg: {
        width:"80%",
        height:"50%",
        marginTop:"10%"
    },
    outer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center",
        marginTop:"5%"
    }
    ,
    plants: {
        marginLeft:10,
        marginRight:10,
        marginTop:"3%"
    },
    outer1:{
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center",
        marginTop:"10%",
        marginLeft:"2%",
        marginRight:"2%",
        paddingBottom:160
    },
    plant: {
        fontSize:20
    },
    login:{
        color:"white" 
    },
    angio: {
        marginTop:"5%"
    }
});

export default Home;