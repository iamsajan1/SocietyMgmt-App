import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Notification = () => {
   const notifications = [
    { id: 1, label: 'Maintenance', description: 'Maintenance fee payment due on March 15, 2024', time: '10:00 AM', image: 'https://tse1.mm.bing.net/th?id=OIP.lChqN_G5mk469LFZ7ZFmUAAAAA&pid=Api&P=0&h=180' },
    { id: 2, label: 'Meeting', description: 'Society meeting scheduled for March 20, 2024 at 6:00 PM', time: '2:00 PM', image: 'https://tse1.mm.bing.net/th?id=OIP.lChqN_G5mk469LFZ7ZFmUAAAAA&pid=Api&P=0&h=180' },
    { id: 3, label: 'Maintenance', description: 'Water supply maintenance work scheduled on March 18, 2024', time: '4:30 PM', image: 'https://tse1.mm.bing.net/th?id=OIP.lChqN_G5mk469LFZ7ZFmUAAAAA&pid=Api&P=0&h=180' },
   ];

  return (
    <View style={{marginTop:10}}>
       {notifications.map(notification => (
        <View key={notification.id} style={styles.notification}>
          <Image source={{ uri: notification.image }} style={styles.image} />
          <View style={styles.notificationContent}>
            <Text style={styles.label}>{notification.label}</Text>
            <Text style={styles.description}>{notification.description.length > 50 ? `${notification.description.slice(0, 50)}...` : notification.description}</Text>
          </View>
          <Text style={styles.time}>{notification.time}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    elevation:3,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  notificationContent: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  time: {
    fontSize: 14,
    color: 'black',
    marginBottom: 35,
  },
});

export default Notification;
