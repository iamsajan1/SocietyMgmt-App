import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';

const ComplaintModal = ({ visible, onClose, userAvatar }) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          <View style={styles.avatarContainer}>
            <Text>User Avatar:</Text>
            <Image source={{ uri: userAvatar }} style={styles.avatar} />
          </View>
          <TextInput
            placeholder="Enter your complaint..."
            multiline
            numberOfLines={5}
            style={styles.input}
          />
          <Button title="Submit" onPress={() => console.log('Complaint submitted')} />
        </View>
      </View>
    </Modal>
  );
};

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
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    color: 'blue',
    fontSize: 16,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    height: 100,
  },
});

export default ComplaintModal;
