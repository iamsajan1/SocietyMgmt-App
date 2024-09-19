import React from 'react';
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Icon, IconButton } from 'react-native-paper';

const GatePassModal = ({ modalVisible, toggleModal }) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={modalVisible}
    onRequestClose={toggleModal}>
    <TouchableWithoutFeedback onPress={toggleModal}>
      <View style={styles.modalContainer}>
        <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
          <IconButton icon="close" iconColor="white" />
        </TouchableOpacity>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.modalTitle}>Gate Pass</Text>
          </View>
          <View style={styles.userInfoContainer}>
            <Image
              source={{
                uri: 'https://pbs.twimg.com/media/F0rf8QOXgAEMYw8?format=jpg&name=large',
              }}
              style={styles.userAvatar}
            />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>Santosh kumar</Text>
              <Text style={styles.address}>sec 18 noida</Text>
            </View>
          </View>
          <View style={styles.divider} />

          <Image
            style={styles.qrCode}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Qr-1.svg/220px-Qr-1.svg.png',
            }}
          />
          <Text style={styles.entryCode}>Entry Code</Text>
          <View style={styles.entryCodeContainer}>
  <Text style={styles.entryCode}>Entry Code: 123456</Text>
  <TouchableOpacity style={styles.copyIcon} onPress={''}>
    <Icon source="content-copy" size={24} color="black" />
  </TouchableOpacity>
</View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={[styles.button, {backgroundColor: 'white'}]}>
              <Text style={styles.buttonText2}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {backgroundColor:  '#0E344B'}]}>
              <Text style={styles.buttonText}>Download</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  </Modal>
);

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  header: {
    backgroundColor:'#0E344B',
    marginLeft: -20,
    marginRight: -20,
    marginTop: -20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 7,
    flexDirection: 'row',
    justifyContent: 'center',
       },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    alignItems:'center',
    justifyContent:'center',
    alignContent: 'center',
  },
  closeButton: {
    top: 5,
   right: 5,
   padding: 5,
   marginLeft: '80%',
   color: 'white',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'center',
  },
  divider: {
    height: 1,
    marginLeft:-15,
    width: '115%',
    backgroundColor: 'transparent',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    borderStyle: 'dotted',
    marginVertical: 10,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  entryCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginLeft:-5,
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F5', // Background color for the grid
    padding: 10, // Padding around the grid
    borderRadius: 8, // Border radius for the grid
    elevation: 3, // Elevation effect
  },
  entryCode: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  copyIcon: {
    padding: 5, // Padding for the copy icon
    borderRadius: 5, // Border radius for the copy icon
    backgroundColor: '#E0E0E0', // Background color for the copy icon
  },
  userInfo: {
    flexDirection: 'column',
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
   
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
   },
  address: {
    marginBottom: 10,
  },
  qrCode: {
    width: 200,
    height: 200,
    marginBottom: 10,
    alignSelf: 'center',
  },
  entryCode: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width:'100%'
  },
  button: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginHorizontal: 5,
    elevation:3,
    borderWidth:0.3,
    padding:10,
    paddingHorizontal:10
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText2: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GatePassModal;
