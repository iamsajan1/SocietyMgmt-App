import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-paper';
 import SvgUri from 'react-native-svg-uri'; 

const ModalContent = ({ toggleModal }) => {
  return (
    <TouchableWithoutFeedback onPress={toggleModal}>
      <View style={styles.centeredView}>
        <TouchableWithoutFeedback>
          <View style={styles.outerModalView}>
            <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
              <Icon source="close" size={24} color="black" />
            </TouchableOpacity>
            <Text>This is the modal content!</Text>
            <Text style={styles.label}>Send Message</Text>
            <View style={styles.cardContainer}>
              <View style={styles.card}>
                <SvgUri
                  width="50"
                  height="50"
                  source={{ uri: 'https://example.com/svg/image1.svg' }}
                />
                <Text style={styles.cardTitle}>Title 1</Text>
              </View>
              <View style={styles.card}>
                <SvgUri
                  width="50"
                  height="50"
                  source={{ uri: 'https://example.com/svg/image2.svg' }} 
                />
                <Text style={styles.cardTitle}>Title 2</Text>
              </View>
            </View>
            <Text style={styles.label}>Security Alert</Text>
            <View style={styles.cardContainer}>
              <View style={styles.card}>
                <SvgUri
                  width="50"
                  height="50"
                  source={{ uri: 'https://example.com/svg/image3.svg' }}
                />
                <Text style={styles.cardTitle}>Title 3</Text>
              </View>
              <View style={styles.card}>
                <SvgUri
                  width="50"
                  height="50"
                  source={{ uri: 'https://example.com/svg/image4.svg' }}
                />
                <Text style={styles.cardTitle}>Title 4</Text>
              </View>
              <View style={styles.card}>
                <SvgUri
                  width="50"
                  height="50"
                  source={{ uri: 'https://example.com/svg/image5.svg' }}
                />
                <Text style={styles.cardTitle}>Title 5</Text>
              </View>
              <View style={styles.card}>
                <SvgUri
                  width="50"
                  height="50"
                  source={{ uri: 'https://example.com/svg/image6.svg' }}
                />
                <Text style={styles.cardTitle}>Title 6</Text>
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
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  card: {
    alignItems: 'center',
  },
  cardTitle: {
    marginTop: 5,
  },
});

export default ModalContent;
