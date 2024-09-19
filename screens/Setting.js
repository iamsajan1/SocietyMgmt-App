import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Setting = () => {
  const settings = [
    { title: 'Edit Profile', icon: 'person-outline', color: '#fff' },
    { title: 'Language', icon: 'language-outline', color: '#fff' },
    { title: 'Get Support', icon: 'help-circle-outline', color: '#fff' },
    { title: 'Terms and Conditions', icon: 'document-outline', color: '#fff' },
    { title: 'Privacy Policy', icon: 'lock-closed-outline', color: '#fff' },
    { title: 'Logout', icon: 'log-out-outline', color: '#fff' },
  ];

  const renderSettingItem = ({ title, icon, color }) => (
    <TouchableOpacity
      style={[styles.itemContainer, { backgroundColor: color }]}
      onPress={() => console.log(title)}
      activeOpacity={0.8}
    >
      <View style={styles.iconContainer}>
        <Icon name={icon} size={24} color={title === 'Logout' ? 'red' : 'black'} />
      </View>
      <Text style={[styles.itemText, { color: title === 'Logout' ? 'red' : 'black' }]}>{title}</Text>
      <Icon name="chevron-forward-outline" size={24} color="black" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {settings.map(setting => renderSettingItem(setting))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    elevation: 3,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  iconContainer: {
    marginRight: 15,
  },
  itemText: {
    fontSize: 16,
    flex: 1,
  },
});

export default Setting;
