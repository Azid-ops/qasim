import React from "react";
import studentLogin from "../Pages/login";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentSignup from '../../../Student/Signup/Pages/signup';
import Home from '../../../Home/home';
import Angiosperms from '../../../Plants/angiosperms';
import MoneyPlant from "../../../Plants/moneyPlant";
import RubberPlant from "../../../Plants/rubberPlant";
import peachLily from "../../../Plants/peachLily";
import Potatoes from '../../../Vegetables/potatoes';
import shallots from "../../../Vegetables/shallots";
import Aux from "../../../Auxiliary/Auxiliary";
import garlic from "../../../Vegetables/garlic";
import adminsSignup from "../../Signup/Pages/admin";
import AdminLogin from "../Pages/admin";
import dashboard from "../../../Admin/Dashboard/dashboard";

const Stack = createNativeStackNavigator();
const studentLoginComponent = () =>{
    return(
        <Aux>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Student Login" component={studentLogin} options={{ title: 'Student Login' }}/>
                    <Stack.Screen name="Admin Signup" component={StudentSignup} options={{ title: 'Student Signup' }}/>
                    <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
                    <Stack.Screen name="Angiosperms" component={Angiosperms} options={{ title: 'Angiosperms' }} />
                    <Stack.Screen name="MoneyPlant" component={MoneyPlant} options={{ title: 'Money Plant' }} />
                    <Stack.Screen name="RubberPlant" component={RubberPlant} options={{ title: 'Rubber Plant' }} />
                    <Stack.Screen name="PeaceLily" component={peachLily} options={{ title: 'Peace Lily Plant' }} />
                    <Stack.Screen name="potatoes" component={Potatoes} options={{ title: 'Potatoes' }} />
                    <Stack.Screen name="shallots" component={shallots} options={{ title: 'Shallots' }} />
                    <Stack.Screen name="garlic" component={garlic} options={{ title: 'Garlic' }} />
                    <Stack.Screen name="Admins Signup" component={adminsSignup} options={{ title: 'Admin Signup' }} />
                    <Stack.Screen name="Admin Login" component={AdminLogin} options={{ title: 'Admin Login' }} />
                    <Stack.Screen name="admin Screen" component={dashboard} options={{ title: 'Admin DashBoard' }} />

                    
                </Stack.Navigator>
            </NavigationContainer>
        </Aux>
        
    )
}

export default studentLoginComponent;