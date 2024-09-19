import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, Modal, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Button, Avatar, IconButton ,Card as TitleCard  } from 'react-native-paper';
import CustomCard from './CoustomCard';
import ServiceModal from './components/ServiceModal';
const Card = ({ title, description, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.cardContent}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>

      </View>
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  );
};
const Services = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Email:', email);
  };

  return (
    <View style={{paddingBottom:50}}>
      <View style={{ padding: 10, backgroundColor: '#fff' }}>
        <Text style={{ color: 'gray', fontSize: 25, marginLeft: 12, fontWeight: 'bold' }}> Services</Text>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View style={{ backgroundColor: '#fff', width: '100%', padding: 20, marginBottom: 15 }}>
            <View style={styles.userProfile}>
            </View>
            <Text style={styles.userrequirement}> Your booking </Text>
            <CustomCard
              title="Home Painting"
              description="your painter is on the way"
              imageUrl="https://webstockreview.net/images/handyman-clipart-painter-decorator-1.png"
              date="2024-03-09"
              time="10:00 AM - 12:00 PM"
            />
            <Text style={styles.userName}> Community</Text>
          </View>
          <View style={styles.row}>
          <Card
            title="Home Cleaning"
            image="https://mylupeshousecleaning.co/wp-content/uploads/2017/11/PNG.png"
            onPress={toggleModal}
          />
        <Card
        onPress={toggleModal}
          title="appliances  and repair"
          image="https://www.pinclipart.com/picdir/big/31-319994_electrician-clipart-washing-machine-repair-appliance-repairman-cartoon.png" 
        />
      </View>
      <View style={styles.row}>
        <Card
        onPress={toggleModal}
          title="Carpenter Services"
            image="https://www.pngmart.com/files/15/Builder-Carpenter-Vector-PNG-File.png"
        />
        <Card
        onPress={toggleModal}
          title="Home Painting"
           image="https://tse3.mm.bing.net/th?id=OIP.W2EArW-rJHkGALBQTMyDXQHaIB&pid=Api&P=0&h=180"
        />
      </View>
      <View style={styles.row}>
        <Card
        onPress={toggleModal}
          title="Pulmbing service"
            image="https://webstockreview.net/images/plumbing-clipart-hvac-18.png"
        />
        <Card
        onPress={toggleModal}
          title="Packer & Movers"
           image="https://i.pinimg.com/originals/37/7f/dc/377fdc422dea3d764ad1c398b3f1fc16.png" 
        />
      </View>

      <View style={styles.row}>
        <Card
        onPress={toggleModal}
          title="Home Sanitize"
           image="https://ppe.covid19.nj.gov/static/6e5542bb70ea03b77212cae048fcea3d/f3583/hand_sanitizer.png"  
        />
        <Card
        onPress={toggleModal}
          title="Hair & beauty"
           image="https://tse4.mm.bing.net/th?id=OIP.TWYu4r9iumVL_0ozkHuFmAHaHa&pid=Api&P=0&h=180"  
        />
      </View>
      <View style={styles.row}>
        <Card
        onPress={toggleModal}
          title="Home Shifting "
           image="https://tse2.mm.bing.net/th?id=OIP.Basv4k8_eaetoongxAhoAAHaFN&pid=Api&P=0&h=180" 
        />
        <Card
        onPress={toggleModal}
          title="boundary Services "
           image="https://cdn3.iconfinder.com/data/icons/hotel-facility/1024/ic_laundry_service-512.png" 
        />
      </View>
      <View style={styles.row}>
        <Card
        onPress={toggleModal}
          title="Gardening"
           image="http://clipart-library.com/img/1217301.png"
        />
        <Card 
        onPress={toggleModal}
          title="Cooking"
           image="https://cdn3.iconfinder.com/data/icons/cooking-at-home/252/cooking-home-eating-food-001-1024.png" 
        />
      </View>
    </View>
    </ScrollView>
    <ServiceModal modalVisible={modalVisible} toggleModal={toggleModal} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
    elevation: 5,
    position: 'relative',
  },
  bannerImage: {
    borderRadius: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 200,
    },
  newTag: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'red',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 12,
    zIndex: 1,
  },
  bannerText: {
     top: 10,
    right: 10,
    backgroundColor: 'transparent',
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
     zIndex: 1,
     marginLeft:12
  },
  bannerTitleText:{
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'transparent',
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    zIndex: 1,
    marginTop:20
  },
  userProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userInfo: {
    marginLeft: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userAddress: {
    fontSize: 14,
    color: '#666',
  },
  bellIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  content: {
    marginTop: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: 'gray',
    padding: 10,
    margin: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
      marginBottom: 5,
     marginLeft: 15,
     marginRight: 15,
     justifyContent:'space-between'

  },
  card: {
    width: '45%', // Adjust the width to fit two cards per row with some spacing
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
    flexDirection: 'column', // Change flexDirection to column
    marginHorizontal: '2.5%', // Add horizontal margin for spacing between cards
    padding: 10, // Add padding for spacing between card content and border
  },
  cardContent: {
    flex: 1, // Change to flex 1 to allow content to expand vertically
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    color:'#0E344B'
   },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  userrequirement:{
    fontSize: 18,
    fontWeight: 'bold',
    marginTop:0, marginBottom:8

  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 15,
    alignSelf: 'center', // Align the image to the center horizontally
    marginBottom: 10, // Adjust marginBottom to provide spacing between image and description
  },
});

export default Services;