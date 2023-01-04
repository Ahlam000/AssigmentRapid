import React, {useLayoutEffect, useState, useEffect} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

import ManageScreen from '../screens/Manage';
import MoreScreen from '../screens/MoreScreen';
import OrderScreen from '../screens/OrderScreen';
import SalesScreen from '../screens/SalesScreen';

import StartScreen from '../screens/Start';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />

      <Stack.Navigator initialRouteName={'Start'}>
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomAdminScreens"
          component={BottomAdminScreens}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomSalesmanScreens"
          component={BottomSalesmanScreens}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export function BottomAdminScreens() {
  return (
    <Tab.Navigator
      firstRoute="Home"
      screenOptions={({route}) => ({
        tabBarShowLabel: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',

        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          position: 'absolute',
          height: 75,
          zIndex: 10,
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
        },

        // tabBarIconStyle:{flex:0}
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={!focused ? 'home-circle-outline' : 'home-circle'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Manage"
        component={ManageScreen}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={!focused ? 'account-settings' : 'account-settings-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={!focused ? 'alpha-m' : 'alpha-m-box-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Order"
        component={OrderScreen}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={!focused ? 'alpha-o' : 'alpha-o-box-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Sales"
        component={SalesScreen}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={!focused ? 'alpha-s' : 'alpha-s-box-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export function BottomSalesmanScreens() {
  return (
    <Tab.Navigator
      firstRoute="Home"
      screenOptions={({route}) => ({
        tabBarShowLabel: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',

        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          position: 'absolute',
          height: 75,
          zIndex: 10,
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
        },

        // tabBarIconStyle:{flex:0}
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={!focused ? 'home-circle-outline' : 'home-circle'}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={!focused ? 'alpha-m' : 'alpha-m-box-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Sales"
        component={SalesScreen}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={!focused ? 'alpha-s' : 'alpha-s-box-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
