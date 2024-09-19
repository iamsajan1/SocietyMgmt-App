import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { IconButton } from 'react-native-paper';

const initialAmenityData = [
  {
    id: 1,
    type: 'Gym',
    status: 'Canceled',
    date: '2024-03-12',
    confirmedBy: 'John Doe',
    imageUrl: 'https://content.jdmagicbox.com/comp/ghaziabad/b3/011pxx11.xx11.171117102358.j3b3/catalogue/active-gym-ghaziabad-86lm7.jpg',
    paymentMethod: 'Credit Card',
    rate: '$20',
  },
  {
    id: 4,
    type: 'Gym',
    status: 'Pending',
    date: '2024-03-12',
    confirmedBy: 'John Doe',
    imageUrl: 'https://content.jdmagicbox.com/comp/ghaziabad/b3/011pxx11.xx11.171117102358.j3b3/catalogue/active-gym-ghaziabad-86lm7.jpg',
    paymentMethod: 'Credit Card',
    rate: '$20',
  },
  {
    id: 5,
    type: 'Gym',
    status: 'Confirmed',
    date: '2024-03-12',
    confirmedBy: 'John Doe',
    imageUrl: 'https://content.jdmagicbox.com/comp/ghaziabad/b3/011pxx11.xx11.171117102358.j3b3/catalogue/active-gym-ghaziabad-86lm7.jpg',
    paymentMethod: 'Credit Card',
    rate: '$20',
  },
  {
    id: 2,
    type: 'Pool',
    status: 'Pending',
    date: '2024-03-13',
    confirmedBy: 'Alice Smith',
    imageUrl: 'https://leisurepools.eu/wp-content/uploads/2020/06/best-type-of-swimming-pool-for-my-home_2.jpg',
    paymentMethod: 'PayPal',
    rate: '$30',
  },
  {
    id: 3,
    type: 'Tennis Court',
    status: 'Canceled',
    date: '2024-03-14',
    confirmedBy: '-',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUP91h3uu1jaKhKPqllrtmeIdHiAzkJykHNB8Z6UmeJkrUzt8g0uDXP5c7pS2AbaOvbOo&usqp=CAU',
    paymentMethod: 'Cash',
    rate: '$25',
  },
];

const Amenities = () => {
  const [amenityData, setAmenityData] = useState(initialAmenityData);
  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return '#ffc107';
      case 'Confirmed':
        return '#28a745'; 
      case 'Canceled':
        return '#dc3545'; 
      default:
        return '#6c757d  '; 
    }
  };
const renderItem = ({ item }) => (
  <View style={styles.amenityCard}>
          <Text style={styles.amenityType}>{item.type}</Text>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image source={{ uri: item.imageUrl }} style={styles.amenityImage} />
      <View style={styles.amenityDetails}>
        <View style={{ flexDirection: 'row', alignItems: 'center',}}>
          <IconButton icon="calendar" size={16} color="#6c757d  " style={styles.icon} />
          <Text style={styles.amenityDateTime}>16 Aug 2023 to 27 Aug 2023</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:-20 }}>
          <IconButton icon="clock-outline" size={16} color="#6c757d  " style={styles.icon} />
          <Text style={styles.amenityDateTime}>10:00 AM to 06:30 pm</Text>
        </View>
        <Text style={[styles.amenityConfirmedBy, {marginLeft:15, marginTop:-10 }]}>Confirmed by: {item.confirmedBy}</Text>
         <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          </View>
         </View>
      </View>
      <View style={styles.tagContainer}>
        <Text style={[styles.tag, { backgroundColor: getStatusColor(item.status) }]}>{item.status}</Text>
      </View>
    </View>
    <View style={styles.divider} />
    <View style={{justifyContent:'space-between',flexDirection:'row'}}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <IconButton icon="checkbox-marked-circle" size={16}  iconColor="green" style={styles.Tickicon} />
        <Text style={styles.paymentMethod}>{item.paymentMethod}</Text>
      </View>
      <View>
        <Text style={styles.rate}>{item.rate}</Text>
      </View>
    </View>
  </View>
);


  return (
    <View style={styles.container}>
      <FlatList
        data={amenityData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContainer}
      />
           <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => console.log("Book Amenities")}>
          <Text style={styles.buttonText}>Book Amenities</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#FFFFFF",
  },
  flatListContainer: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    paddingBottom: 60,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    backgroundColor:  '#0E344B',
    paddingVertical: 15,
    borderRadius: 8,
    marginHorizontal: 18,
    alignItems: 'center',
  },
  
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  amenityCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 6,
    paddingHorizontal: 10,
     marginBottom: 15,
    flex: 1,
  },
  amenityImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginTop:10
   },
  amenityDetails: {
    flex: 1,
  },
  amenityType: {
    fontSize: 17,
    fontWeight: '700',
     marginLeft: 10  ,
     color:'black'
   },
  amenityDateTime: {
    fontSize:12,
    color: 'gray',
    fontWeight:'400',
   },
  amenityConfirmedBy: {
    fontSize: 12,
    color: '#6c757d  ',
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: 'transparent',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    borderStyle: 'dotted',
    marginVertical: 10,
  },
  amenityActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    marginLeft: 2, 
  },
  Tickicon: {
    marginRight: 5,
     
  },
  icon:{
    marginRight: 0,

  },
  tagContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  tag: {
    marginTop:-25,
    marginRight:-15,
    paddingHorizontal: 8,
    paddingVertical: 4,
     color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    borderTopRightRadius:7
  },
  paymentMethod: {
    fontSize: 12,
    color: '#6c757d  ',
    marginRight: 5,
  },
  rate: {
    fontSize: 18,
    color: 'black',
    fontWeight:'700',
    marginRight:10
  },
});

export default Amenities;
