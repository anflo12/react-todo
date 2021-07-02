import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import { View, Text } from 'react-native'
import CompleteTasks from '../screens/CompleteTasks';
import TodoAllScreen from '../screens/TodoAllScreen'
import UnCompletedTask from '../screens/UncompletedTask';

export default function TabsNavigation() {
 const Tab = createMaterialTopTabNavigator();
    return (
        <Tab.Navigator  >
      <Tab.Screen name="All"  component={TodoAllScreen} />
      <Tab.Screen name="Completed" component={CompleteTasks} />
      <Tab.Screen name="Uncompleted" component={UnCompletedTask} />
      <Tab.Screen name="Favorite" component={TodoAllScreen} />
    </Tab.Navigator>
    )
}
