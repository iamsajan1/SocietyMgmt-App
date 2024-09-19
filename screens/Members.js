import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import MemberModal from './components/MemberModal';

const membersData = [
  {
    id: 1,
    name: 'Santosh Kumar Shrivastav',
    address: '123 Street, City | Evergreen Society',
    role: 'Member',
    image: 'https://i.pinimg.com/originals/f1/e3/86/f1e3868d29826539cf92a4febf78bbaf.jpg',
  },
  {
    id: 2,
    name: 'Vikas Kumar yadav',
    address: '123 Street, City | Evergreen Society',
    role: 'Admin',
    image:
      'https://wallpaperaccess.com/full/1953965.jpg',
  },
  {
    id: 3,
    name: 'Prince kumar kori',
    address: '123 Street, City| Evergreen Society',
    role: 'Committee',
    image: 'https://i.pinimg.com/736x/e1/6e/fa/e16efaf92c76f9f4a5efb9c70a316844.jpg',
  },
  {
    id: 3,
    name: 'Santosh Kumar Shrivastav',
    address: '123 Street, City | Evergreen Society',
    role: 'Member',
    image: 'https://i.pinimg.com/originals/f1/e3/86/f1e3868d29826539cf92a4febf78bbaf.jpg',
  },
  {
    id: 1,
    name: 'Vikas Kumar yadav',
    address: '123 Street, City | Evergreen Society',
    role: 'Admin',
    image:
      'https://wallpaperaccess.com/full/1953965.jpg',
  },
  {
    id: 2,
    name: 'Prince kumar kori',
    address: '123 Street, City | Evergreen Society',
    role: 'Committee',
    image: 'https://i.pinimg.com/736x/e1/6e/fa/e16efaf92c76f9f4a5efb9c70a316844.jpg',
  },
  {
    id: 2,
    name: 'Vikas Kumar yadav',
    address: '123 Street, City | Evergreen Society',
    role: 'Admin',
    image:
      'https://wallpaperaccess.com/full/1953965.jpg',
  },
  {
    id: 3,
    name: 'Prince kumar kori',
    address: '123 Street, City | Evergreen Society',
    role: 'Committee',
    image: 'https://i.pinimg.com/736x/e1/6e/fa/e16efaf92c76f9f4a5efb9c70a316844.jpg',
  },
  {
    id: 3,
    name: 'Santosh Kumar Shrivastav',
    address: '123 Street, City | Evergreen Society',
    role: 'Member',
    image: 'https://i.pinimg.com/originals/f1/e3/86/f1e3868d29826539cf92a4febf78bbaf.jpg',
  },
  {
    id: 2,
    name: 'Prince kumar kori',
    address: '123 Street, City | Evergreen Society',
    role: 'Committee',
    image: 'https://i.pinimg.com/736x/e1/6e/fa/e16efaf92c76f9f4a5efb9c70a316844.jpg',
  },
  {
    id: 1,
    name: 'Santosh Kumar Shrivastav',
    address: '123 Street, City | Evergreen Society',
    role: 'Member',
    image: 'https://i.pinimg.com/originals/f1/e3/86/f1e3868d29826539cf92a4febf78bbaf.jpg',
  },
  {
    id: 2,
    name: 'Vikas Kumar yadav',
    address: '123 Street, City | Evergreen Society',
    role: 'Admin',
    image:
      'https://wallpaperaccess.com/full/1953965.jpg',
  },
  {
    id: 1,
    name: 'Santosh Kumar Shrivastav',
    address: '123 Street, City | Evergreen Society',
    role: 'Member',
    image: 'https://i.pinimg.com/originals/f1/e3/86/f1e3868d29826539cf92a4febf78bbaf.jpg',
  },
  {
    id: 2,
    name: 'Vikas Kumar yadav',
    address: '123 Street, City | Evergreen Society',
    role: 'Admin',
    image:
      'https://wallpaperaccess.com/full/1953965.jpg',
  },
];

const MembersScreen = ({data}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberPress = member => {
    setSelectedMember(member);
    setModalVisible(true);
  };

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableNativeFeedback onPress={() => handleMemberPress(item)}>
            <View style={styles.card}>
              <View style={styles.cardContent}>
                <Image
                  source={{uri: item.image}}
                  style={styles.listImage}
                />
                <View style={styles.memberInfo}>
                  <Text style={styles.memberName}>{item.name}</Text>
                  <Text style={styles.memberAddress}>{item.address}</Text>
                </View>
              </View>
            </View>
          </TouchableNativeFeedback>
        )}
      />
      <MemberModal
        visible={modalVisible}
        member={selectedMember}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

const MembersTab = () => (
  <MembersScreen
    data={membersData.filter(member => member.role === 'Member')}
  />
);
const AdminsTab = () => (
  <MembersScreen data={membersData.filter(member => member.role === 'Admin')} />
);
const CommitteeTab = () => (
  <MembersScreen
    data={membersData.filter(member => member.role === 'Committee')}
  />
);

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: 'blue'}}
    style={{backgroundColor: 'white'}}
    labelStyle={{color: 'black'}}
  />
);

const Members = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'members', title: 'Members' },
    { key: 'admins', title: 'Admins' },
    { key: 'committee', title: 'Committee' },
  ]);

  const renderScene = SceneMap({
    members: MembersTab,
    admins: AdminsTab,
    committee: CommitteeTab,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: index === 0 ? '#0E344B' : '#0E344B',
        height: 3, 
      }}
      style={{ backgroundColor: 'white' }}
      labelStyle={{
        color: index === 0 ? '#0E344B' : '#0E344B', 
        fontWeight: index === 0 ? 'bold' : 'bold',
      }}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
    />
  );
};

const styles = StyleSheet.create({
  memberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 12,
    fontWeight: 'bold',
    color:'black',
  },
  memberAddress: {
    color: 'gray',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  listImage:{
    width: 60,
    height: 60,
    borderRadius: 10,
    marginBottom: 6,
    marginTop: 6,
    marginLeft: 6,
    marginRight: 10,
  },
  modalMemberName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMemberAddress: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  closeButtonText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 3,
    elevation: 5,
    marginTop: 10,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 16,
    fontWeight: '600',
    color:'black',
  },
  memberAddress: {
    color: 'gray',
  },
});

export default Members;
