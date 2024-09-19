import React, { useState } from 'react';
import { View, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme, IconButton } from 'react-native-paper';
import Home from './screens/Home';
import Chat from './screens/Chat';
import Task from './screens/Task';
import Services from './screens/Services';
import Profile from './screens/Profile';
import ModalContent from './screens/components/CoustomModal';
 
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const theme = useTheme();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisible(!isModalVisible);
        }}
      >
        <ModalContent toggleModal={toggleModal} />
      </Modal>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: 'grey',
          inactiveTintColor: '#8E8E93',
          activeBackgroundColor: '#d3e4f5',
          labelStyle: {
            fontSize: 10,
            fontWeight: '500',
            marginBottom: 5,
          },
          style: {
            borderTopWidth: 0,
            elevation: 10,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <IconButton icon="home-outline" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({ color, size }) => (
              <IconButton icon="chat-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Tasks"
          component={Task}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <View style={styles.middleTab}>
                <IconButton icon="shield-account-outline" iconColor="#ffffff" size={30} />
              </View>
            ),
          }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              toggleModal();
            },
          }}
        />
        <Tab.Screen
          name="Services"
          component={Services}
          options={{
            tabBarLabel: 'Services',
            tabBarIcon: ({ color, size }) => (
              <IconButton icon="cog-outline" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <IconButton icon="account-outline" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  middleTab: {
    backgroundColor: '#0E344B',
    borderRadius: 35,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderWidth: 10,
    borderColor: '#ffff',
    overflow: 'hidden',
  },
});

export default BottomTabNavigator;
