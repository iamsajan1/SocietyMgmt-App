import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import { Icon } from 'react-native-paper';

const ModalContent = ({ toggleModal }) => {
  return (
    <TouchableWithoutFeedback onPress={toggleModal}>
      <View style={styles.centeredView}>
        <TouchableWithoutFeedback>
          <View style={styles.outerModalView}>
            <Text style={styles.label}>Send Message</Text>
            <View style={styles.cardContainer}>
              <View style={styles.card}>
                <Image
                  style={styles.cardImage}
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2734/2734227.png' }} 
                />
                <Text style={styles.cardTitle}>Admin</Text>
              </View>
              <View style={styles.card}>
                <Image
                  style={styles.cardImage}
                  source={{ uri: 'https://cdn4.iconfinder.com/data/icons/hotel-and-restaurant-1-8/50/34-1024.png' }} 
                />
                <Text style={styles.cardTitle}>Security</Text>
              </View>
            </View>
            <Text style={styles.label}>Security Alert</Text>
            <View style={styles.cardContainer}>
              <View style={styles.card}>
                <Image
                  style={styles.cardImage}
                  source={{ uri: 'https://www.pngall.com/wp-content/uploads/5/Fire-Safety-PNG-Image.png' }}
                />
                <Text style={styles.cardTitle}>Fire Alert</Text>
              </View>
              <View style={styles.card}>
                <Image
                  style={styles.cardImage}
                  source={{ uri: 'https://pluspng.com/img-png/png-lift-direction-down-elevator-lift-up-icon-459.png' }}
                />
                <Text style={styles.cardTitle}>Stuck In Lift</Text>
              </View>
            </View>
            <View style={styles.cardContainer}>
              <View style={styles.card}>
                <Image
                  style={styles.cardImage}
                  source={{ uri: 'https://clipground.com/images/animals-png-4.png' }}
                />
                <Text style={styles.cardTitle}>Animal Threat</Text>
              </View>
              <View style={styles.card}>
                <Image
                  style={styles.cardImage}
                  source={{ uri: 'https://www.plixer.com/wp-content/uploads/2018/04/insider-threats_employees.png' }} 
                />
                <Text style={styles.cardTitle}>Visiters Threat</Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerModalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    paddingHorizontal:20,
     paddingVertical:2,
     paddingBottom:8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor:'#ebeff2',
    margin:30,
    marginTop:140

  },
 
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    alignSelf:'flex-start', 
    marginLeft:8,
    color:'#0E344B'
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  card: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    margin:5
   },
  cardImage: {
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  cardTitle: {
    textAlign: 'center',
    color:'#0E344B'
  },
});

export default ModalContent;
