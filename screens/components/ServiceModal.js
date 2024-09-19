import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
import { Avatar, IconButton } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

const ServiceModal = ({ modalVisible, toggleModal }) => {
  const [service, setService] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [problem, setProblem] = useState('');

  const handleDateChange = (event, newDate) => {
    if (newDate !== undefined) {
      setSelectedDate(newDate);
      setShowDatePicker(Platform.OS === 'ios'); // On iOS, close date picker after selection
    }
  };

  const handleTimeChange = (event, newTime) => {
    if (newTime !== undefined) {
      setSelectedTime(newTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setShowTimePicker(Platform.OS === 'ios'); // On iOS, close time picker after selection
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={toggleModal}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <IconButton
            icon="close"
            size={24}
            onPress={toggleModal}
            style={styles.closeIcon}
          />
          <View style={{alignItems:'center',marginTop:-55}}>
          <Avatar.Image style={{backgroundColor:'#e4eaf5',borderColor:'#fff',borderWidth:3}} size={70} source={{ uri: 'https://www.pngmart.com/files/15/Builder-Carpenter-Vector-PNG-File.png' }} />
          <Text style={styles.title}>Book for Appliance Repair</Text>
          </View>

          <Text style={styles.label}>Enter required service:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter the service you need"
            onChangeText={text => setService(text)}
            value={service}
          />

          <View style={styles.row}>
            <Text style={styles.label}>Book visit on:</Text>
            <View style={styles.dateTimeContainer}>
              <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                <TextInput
                  style={styles.inputInline}
                  placeholder="Select date"
                  value={selectedDate.toLocaleDateString()}
                  editable={false}
                  onFocus={() => setShowDatePicker(true)}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setShowTimePicker(true)}>
                <TextInput
                  style={styles.inputInline}
                  placeholder="Select time"
                  value={selectedTime}
                  editable={false}
                  onFocus={() => setShowTimePicker(true)}
                />
              </TouchableOpacity>
            </View>
          </View>

          {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}

          {showTimePicker && (
            <DateTimePicker
              value={new Date()}
              mode="time"
              display="default"
              onChange={handleTimeChange}
            />
          )}

          <Text style={styles.label}>Briefly describe your problem:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your problem"
            onChangeText={text => setProblem(text)}
            value={problem}
            multiline={true}
          />

          <TouchableOpacity style={styles.submitButton} onPress={toggleModal}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation:3

   },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    width: "92%",
    shadowOpacity: 0.25,
    elevation: 5,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor:'#f5f5f5'

 
  },
  title: {
     fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 18,

  },
  input: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '95%',
    borderRadius: 10,
    backgroundColor:'#fff',
    elevation:3

    
  },
  row: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 15,
  },
  inputInline: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '100%',
    borderRadius: 10,
    marginRight: 10,
    backgroundColor:'#fff',
    elevation:3

  },
  submitButton: {
    backgroundColor:  '#0E344B',
    padding: 15,
    margin: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '95%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  dateTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  closeIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default ServiceModal;
