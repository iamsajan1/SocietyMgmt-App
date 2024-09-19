import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Avatar, Icon, IconButton } from 'react-native-paper';
 
const CustomCard = ({ title, description, imageUrl, date, time }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.dateTimeContainer}>
          <Icon source="calendar-clock" size={24} color="black" />
          <Text style={styles.dateTimeText}>{date} - {time}</Text>
        </View>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
    flexDirection: 'column',
    marginHorizontal: '2.5%',
    padding: 10,
  },
  cardContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color:'#0E344B'
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  dateTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  dateTimeText: {
    marginLeft: 5,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 15,
    alignSelf: 'center',
    marginBottom: 10,
  },
});

export default CustomCard;
