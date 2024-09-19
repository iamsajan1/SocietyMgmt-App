import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Button,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {IconButton} from 'react-native-paper';
import GatePassModal from './components/GatePassModal';

const initialVisitorsData = [
  {
    id: 1,
    name: 'Brooklyn Simmons (Maid)',
    date: 'March 15   ',
    timing: '10:00 AM - 12:00 PM',
    position: 'Inside',
    image:
      'https://i.pinimg.com/originals/81/e1/90/81e190b82a82b2de0287de4ca85cdd9c.jpg',
  },
  {
    id: 2,
    name: 'Prince Simmons(Cab Driver)',
    date: 'March 16   ',
    timing: '02:00 PM - 04:00 PM',
    position: 'Pre Approved',
    image:
      'https://thumbs.dreamstime.com/b/simple-indian-village-boy-5235704.jpg',
  },
  {
    id: 3,
    name: 'Vikash kumar Petson',
    date: 'March 17    ',
    timing: '09:00 AM - 11:00 AM',
    position: 'Service Booked',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUDj8VYnsMu3iAjMI5MNO0HnVo2cZ87QbHv7M5JEDp6bNJkwYxvyep7TUQLGdiOVV_Sjs&usqp=CAU',
  },
  {
    id: 4,
    name: 'Appliances Repair ',
    date: 'March 17    ',
    timing: '09:00 AM - 11:00 AM',
    position: 'Service Booked',
    image:
      'https://media.licdn.com/dms/image/C4D03AQFj3p3aNK0F8w/profile-displayphoto-shrink_800_800/0/1644213438758?e=2147483647&v=beta&t=4P0mtjoOJQHqnpTrR-pUpL4hQgScNdQEGRRxEX8DYXc',
  },
  {
    id: 5,
    name: 'Bakay Simoons Decker',
    date: 'March 17    ',
    timing: '09:00 AM - 11:00 AM',
    position: 'Service Booked',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw7Q28ZJ-jjpZ480zkqfXp_rtc2_gUsJ0LKA&usqp=CAU',
  },
];
const VisitorsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [visitorsData, setVisitorsData] = useState(initialVisitorsData);

  const handleDelete = id => {
    setVisitorsData(visitorsData.filter(item => item.id !== id));
  };
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const renderActionButton = (iconName, text, color, onPress) => (
    <TouchableOpacity onPress={onPress} style={styles.actionButton}>
      <IconButton icon={iconName} size={20} color={color} />
      <Text style={styles.actionText}>{text}</Text>
    </TouchableOpacity>
  );
 

  const getPositionColor = position => {
    switch (position) {
      case 'Inside':
        return 'green';
      case 'Pre Approved':
        return 'blue';
      case 'Service Booked':
        return 'orange';
      default:
        return 'gray';
    }
  };

  const renderItem = ({item}) => (
    <View style={styles.visitorCard}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={{uri: item.image}} style={styles.visitorImage} />
        <View style={styles.visitorDetails}>
          <Text style={styles.visitorName}>{item.name}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.visitorDateTime}>{item.date}</Text>
            <Text style={styles.visitorDateTime}>{item.timing}</Text>
          </View>
          <Text
            style={[
              styles.visitorPositions,
              {
                color: getPositionColor(item.position),
                textDecorationLine: 'underline',
              },
            ]}>
            {item.position}
          </Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.visitorActions}>
        {renderActionButton('phone', 'Call', 'blue', () => console.log('Call'))}
        {renderActionButton('delete', 'Delete', 'red', () =>
          handleDelete(item.id),
        )}
        {renderActionButton(
          'view-list-outline',
          'Gate Pass',
          'green',
          toggleModal,
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={visitorsData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContainer}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => console.log('Pre Approved Visitors')}>
        <Text style={styles.buttonText}>Pre Approved Visitors</Text>
      </TouchableOpacity>
      <GatePassModal modalVisible={modalVisible} toggleModal={toggleModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  flatListContainer: {
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
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
    fontSize: 18,
    fontWeight: 'bold',
  },
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
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  closeButton: {
    marginTop: 20,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    color: 'blue',
    fontSize: 16,
  },
  userInfo: {
    flexDirection: 'colomn',
    alignItems: 'center',
    marginBottom: 10,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
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
  },
  button: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    color: 'blue',
    fontSize: 16,
  },
  visitorCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 6,
    paddingHorizontal: 10,
     paddingVertical:5,
    marginBottom: 15,
    flex: 1,
  },
  visitorImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 15,
  },
  visitorDetails: {
    flex: 1,
  },
  visitorName: {
    fontSize: 15,
    fontWeight: '700',
    color:'black'
  },
  visitorDateTime: {
    color: 'gray',
    marginRight: 10,
    fontSize:12
  },
  visitorPositions: {
    marginRight: 10,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: 'transparent',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    borderStyle: 'dotted',
    marginTop: 10,
  },
  visitorActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    marginLeft: -10,
  },
});

export default VisitorsScreen;
