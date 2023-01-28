import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Splash} from "../pages";
import {Dashboard} from '../pages';
import {Pencapaian} from '../pages';
import {Detail} from '../pages';
import {Isian} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
    return(
<Stack.Navigator>
    <Stack.Screen
    name="Splash"
    component={Splash}
    options={{headerShown: false}}
    />

<Stack.Screen
    name="Dashboard"
    component={Dashboard}
    options={{headerShown: false}}
    />

<Stack.Screen
    name="Pencapaian"
    component={Pencapaian}
    options={{headerShown: false}}
    />

<Stack.Screen
    name="Detail"
    component={Detail}
    options={{headerShown: false}}
    />

<Stack.Screen
    name="Isian"
    component={Isian}
    options={{headerShown: false}}
    />

</Stack.Navigator>
    );
}

export default Router;