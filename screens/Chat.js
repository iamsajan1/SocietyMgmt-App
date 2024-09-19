import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
 
const ChatScreen = () => {
  const chatData = [
    { name: 'Sheetal kumari', message: 'Hi, Good Morning', time: '10:00 AM', avatarUri: 'https://i.pinimg.com/736x/50/95/bf/5095bf6a1fc7a17889eab36dc6856225.jpg' },
    { name: 'Mahak Singh', message: 'Hi, Good Morning', time: '11:00 PM', avatarUri: 'https://i.pinimg.com/236x/41/7b/67/417b67c2c946c28e2cca22d777b84df8.jpg' },
    { name: 'Shweta kumari', message: 'Hi, Good Morning', time: '12:00 AM', avatarUri: 'https://i.pinimg.com/236x/81/77/27/817727019b66c85c1df95a9668d8ecbf.jpg' },
    { name: 'Deepak kumar', message: 'Hi, Good Morning', time: '01:00 AM', avatarUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlgf-i2-SRvJE4pUh-3CLWDRMneg93m3qTtg6Ku7thOw&s' },
    { name: 'Susil kumar', message: 'Hi, Good Morning', time: '01:00 PM', avatarUri: 'https://i.pinimg.com/originals/3c/50/92/3c509227f9855e0d9d8409a5dd3dbdc8.jpg' },
    { name: 'Lalit kumar', message: 'Hi, Good Morning', time: '02:00 AM', avatarUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWIBcrFDiN_vQbed01TWHAJVL1IbQs3hGdw&usqp=CAU' },
    { name: 'Simpi', message: 'Hi, Good Morning', time: '06:00 AM', avatarUri: 'https://i.pinimg.com/236x/db/b9/cb/dbb9cbe3b84da22c294f57cc7847977e.jpg' },
    { name: 'Dimple', message: 'Hi, Good Morning', time: '08:00 AM', avatarUri: 'https://i.pinimg.com/236x/d8/45/41/d84541b5f68bf144543b4e9a7f1cfe4a.jpg' },
    { name: 'Shikhar Singh', message: 'Hi, Good Morning', time: '11:00 PM', avatarUri: 'https://i0.wp.com/bareillycollege.org/wp-content/uploads/2022/07/zac-efron-1.jpg?resize=298%2C446&ssl=1' },
    { name: 'Mohit Kumar', message: 'Hi, Good Morning', time: '09:00 PM', avatarUri: 'https://i0.wp.com/i.pinimg.com/736x/e8/41/66/e841666f04edcd91683ddae585ed0ef8.jpg?resize=160,120' },
    { name: 'Sundar', message: 'Hi, Good Morning', time: '08:00 AM', avatarUri: 'https://i.pinimg.com/736x/d0/90/38/d09038bb16a433bd1fe2f1be47ed0782.jpg' },
    { name: 'Tanu kumari', message: 'Hi, Good Morning', time: '12:00 AM', avatarUri: 'https://i.pinimg.com/736x/65/59/37/6559374e52a921ad76785d2175db21c2.jpg' },
    { name: 'Titu kumari', message: 'Hi, Good Morning', time: '04:00 AM', avatarUri: 'https://i.pinimg.com/originals/7c/12/fe/7c12fe4a4927f65a58f69d9c8a8ebd73.jpg' },
    { name: 'Tushar kumar', message: 'Hi, Good Morning', time: '04:00 PM', avatarUri: 'https://i.pinimg.com/originals/98/a7/73/98a773fe685aa1e6b2082ef60bdc7538.jpg' },
  ];
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {chatData.map((data, index) => (
          <TouchableOpacity onPress={() => navigation.navigate('ChatDetailScreen')}>
            <ChatMessage data={data} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};


const ChatMessage = ({ data }) => {
  const { name, message, time, avatarUri } = data;

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
      <Avatar.Image size={50} source={{ uri: avatarUri }} />
      <View style={{ marginLeft: 10 }}>
        <Text style={{ fontWeight: 'bold',color:'#0E344B' }}>{name}</Text>
        <Text>{message}</Text>
      </View>
      <Text style={{ position: 'absolute', right: 10 }}>{time}</Text>
    </View>
  );
};
const ResidentialScreen = () => {
  return (
    <View>
      <Text>Residential Tab</Text>
    </View>
  );
};

const Tab = createMaterialTopTabNavigator();
const CustomTabBar = ({ state, descriptors }) => {
  const navigation = useNavigation(); 

  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate(route.name)} 
          style={[styles.tabBarButton, state.index === index ? styles.tabBarButtonFocused : null]}
        >
          <Text style={[styles.tabBarText, state.index === index ? styles.tabBarTextFocused : null]}>
            {descriptors[route.key].options.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const Chat = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
        <Tab.Screen name="Chat" component={ChatScreen} options={{ title: 'Chat' }} key="chat" />
        <Tab.Screen name="Residential" component={ResidentialScreen} options={{ title: 'Residential' }} key="residential" />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  tabBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 0.5
  },
  tabBarButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  tabBarButtonFocused: {
    backgroundColor: '#0E344B',
  },
  tabBarText: {
    fontWeight: 'bold',
    color: 'black', // Default text color
  },
  tabBarTextFocused: {
    color: 'white', // Text color when tab is focused
  },
});

export default Chat;
