// MainStackNavigator.js

import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import ChatDetailScreen from './screens/ChatDetailScreen';
import Members from './screens/Members';
import VisitorsScreen from './screens/VisitorsScreen';
import NoticeBoard from './screens/NoticeBoard';
import AmenitiesScreen from './screens/Amenities';
import HelpDesk from './screens/HelpDesk';
import Notification from './screens/Notification';
import PaymentScreen from './screens/PaymentScreen';
import Setting from './screens/Setting';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="ChatDetailScreen"
        component={ChatDetailScreen}
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="Members"
        component={Members}
        options={{
          gestureDirection: 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
       <Stack.Screen
        name="HelpDesk"
        component={HelpDesk}
        options={{
          gestureDirection: 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="Visitors"
        component={VisitorsScreen}
        options={{
          gestureDirection: 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
        <Stack.Screen
        name="NoticeBoard"
        component={NoticeBoard}
        options={{
          gestureDirection: 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
       <Stack.Screen
        name="Amenity"
        component={AmenitiesScreen}
        options={{
          gestureDirection: 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
       <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          gestureDirection: 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
       <Stack.Screen
        name="Payments"
        component={PaymentScreen}
        options={{
          gestureDirection: 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
       <Stack.Screen
        name="Setting"
        component={Setting}
        options={{
          gestureDirection: 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
