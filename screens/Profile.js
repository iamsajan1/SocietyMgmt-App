import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Avatar, Divider, IconButton, Card, Icon} from 'react-native-paper';
import GatePassModal from './components/GatePassModal';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            flexDirection: 'row',
            marginTop: 15,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 22}}> Profile</Text>
          <TouchableOpacity onPress={() =>
                navigation.navigate('Setting', {animation: 'slide_from_right'})
              }   >
            <Icon source="cog" size={25} />
          </TouchableOpacity>
        </View>
        <Card style={styles.upperCard}>
          <View style={styles.header}>
            <View style={styles.userInfo}>
              <Avatar.Image
                size={60}
                source={{
                  uri: 'https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg',
                }}
              />
              <View style={styles.userInfoText}>
                <Text style={styles.username}>Santosh kumar</Text>
                <Text>Profile View</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={toggleModal}
              style={styles.qrCodeContainer}>
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Qr-1.svg/220px-Qr-1.svg.png',
                }}
                style={styles.qrCode}
              />
            </TouchableOpacity>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.icons}>
            <View style={styles.iconWithText}>
              <IconButton
                style={{backgroundColor: '#fff'}}
                icon="application-cog-outline"
                iconColor='#0E344B'
                 size={20}
                onPress={() => console.log('Icon 1 Pressed')}
              />
              <Text>Demo App</Text>
            </View>
            <View style={styles.verticalDivider} />
            <View style={styles.iconWithText}>
              <IconButton
                style={{backgroundColor: '#fff'}}
                icon="home-outline"
                iconColor='#0E344B'
                size={20}
                onPress={() => console.log('Icon 2 Pressed')}
              />
              <Text>Flat No: 211</Text>
            </View>
            <View style={styles.verticalDivider} />
            <View style={styles.iconWithText}>
              <IconButton
                style={{backgroundColor: '#fff'}}
                icon="home-city-outline"
                iconColor='#0E344B'
                size={20}
                onPress={() => console.log('Icon 3 Pressed')}
              />
              <Text>Block no:3</Text>
            </View>
            <IconButton
              icon="share-variant"
              color="black"
              size={24}
              onPress={() => console.log('Share Pressed')}
            />
          </View>
        </Card>
        <View style={styles.households}>
          <Text style={styles.householdTitle}>Households</Text>
          <View style={styles.householdCard}>
            <View style={styles.familyHeader}>
              <View>
                <Text style={styles.householdName}>My Family</Text>
                <Text style={{color: 'black', marginLeft: 10}}>
                  Click on add button to add Member
                </Text>
              </View>
              <TouchableOpacity
  onPress={toggleModal} // Add this line to open the modal
  style={styles.addButton}>
  <Icon source="plus" color="white" size={20} />
  <Text style={{marginRight: 10, color:'white'}}>Add</Text>
</TouchableOpacity>

            </View>
            <ScrollView  showsHorizontalScrollIndicator ={false} horizontal style={{marginLeft: 10}}>
              {[
                {
                  name: 'Alica',
                  relation: 'Mother',
                  icon: 'account-mother',
                  imageUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiP4cqmmaRzsKvwI96pBidPIXkLp6UpQdDQTJz9cEBzw&s',
                },
                {
                  name: 'Hemasworth',
                  relation: 'Son',
                  icon: 'account-child',
                  imageUrl:
                    'https://tse2.mm.bing.net/th?id=OIP.PZsMLTIgXaEsdCA0VjTo7gHaLH&pid=Api&P=0&h=180',
                },
                {
                  name: 'Peet',
                  relation: 'Father',
                  icon: 'account-tie',
                  imageUrl:
                    'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
                },
                {
                  name: 'Princi',
                  relation: 'Daughter',
                  icon: 'account-child',
                  imageUrl:
                    'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                },
                {
                  name: 'Sukanya',
                  relation: 'Grandmother',
                  icon: 'account-grandmother',
                  imageUrl:
                    'https://media.istockphoto.com/id/664186346/photo/grandmother.jpg?s=612x612&w=0&k=20&c=UcJNwyyA_G_2veuhZmJU39Qp2-Lm_wMFEhvV26gX_Sc=',
                },
                {
                  name: 'Taraknath',
                  relation: 'Grandfather',
                  icon: 'account-grandfather',
                  imageUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS14Tc8mNtn6xT0fqR0mGCGj0Up0m6honIzFZKYsoi_WN7195vX-PVDALeZbQ&s',
                },
              ].map((member, index) => (
                <Card key={index} style={styles.familyMemberCard}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Avatar.Image size={50} source={{uri: member.imageUrl}} />
                    <IconButton
                      icon="qrcode"
                      iconColor='gray'
                      onPress={() => console.log('QR Code Pressed')}
                    />
                  </View>
                  <Text style={styles.familyMemberName}>{member.name}</Text>
                  <Text>{member.relation}</Text>
                </Card>
              ))}
            </ScrollView>
            <View style={styles.divider} />

            <View style={styles.familyHeader}>
              <View>
                <Text style={styles.householdName}>Daily Help</Text>
                <Text style={{color: 'black', marginLeft: 10}}>
                 Add maid and helper for quick entry
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => console.log('Add Family Member Pressed')}
                style={styles.addButton}>
                <Icon source="plus" color="white" size={20} />
                <Text style={{marginRight: 10, color:'white'}}>Add</Text>
              </TouchableOpacity>
            </View>
            <ScrollView  showsHorizontalScrollIndicator ={false}  horizontal style={{marginLeft: 10}}>
              {[
                {
                  name: 'Robort',
                  relation: 'maid',
                  icon: 'account-mother',
                  imageUrl:
                    'https://cdn.pixabay.com/photo/2013/04/12/17/50/man-103041_1280.jpg',
                },
                {
                  name: 'Deepak',
                  relation: 'Laundary',
                  icon: 'account-child',
                  imageUrl:
                    'https://previews.123rf.com/images/dinodia/dinodia1709/dinodia170910050/85786755-south-asian-indian-grandfather-looking-at-camera.jpg',
                },
                {
                  name: 'Bill Gates',
                  relation: 'milkman',
                  icon: 'account-tie',
                  imageUrl:
                    'https://www.shutterstock.com/shutterstock/photos/495577102/display_1500/stock-photo-handsome-old-man-and-beautiful-young-girl-are-hugging-looking-at-camera-and-smiling-while-sitting-495577102.jpg',
                },
                {
                  name: 'Sanchi',
                  relation: 'cleaner',
                  icon: 'account-child',
                  imageUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlMQIjfg3joDOweSHw68dIKCTYTwFESBvIAU4EkBBaHQ&s',
                },
                
              ].map((member, index) => (
                <Card key={index} style={styles.familyMemberCard}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Avatar.Image size={50} source={{uri: member.imageUrl}} />
                    <IconButton
                      icon="qrcode"
                      iconColor='gray'
                      onPress={() => console.log('QR Code Pressed')}
                    />
                  </View>
                  <Text style={styles.familyMemberName}>{member.name}</Text>
                  <Text>{member.relation}</Text>
                </Card>
              ))}
            </ScrollView>
            <View style={styles.divider} />

            <View style={styles.familyHeader}>
              <View>
                <Text style={styles.householdName}>My vehicles</Text>
                <Text style={{color: 'black', marginLeft: 10}}>
                  add vehicle for quick entry
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => console.log('Add Family Member Pressed')}
                style={styles.addButton}>
                <Icon source="plus" color="white" size={20} />
                <Text style={{marginRight: 10, color:'white'}}>Add</Text>
              </TouchableOpacity>
            </View>
            <ScrollView  showsHorizontalScrollIndicator ={false} horizontal style={{marginLeft: 10}}>
              {[
                {
                  name: 'up44-a-2223',
                  relation: 'BMW',
                   imageUrl:
                    'https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym13JTIwY2FyfGVufDB8fDB8fHww',
                },
                {
                  name: 'up44-b-2223',
                  relation: 'Son',
                  icon: 'rolls royce',
                  imageUrl:
                    'https://images3.alphacoders.com/131/1314801.jpg',
                },
                
              ].map((member, index) => (
                <Card key={index} style={styles.familyMemberCard}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Avatar.Image size={50} source={{uri: member.imageUrl}} />
                    <IconButton
                      icon="qrcode"
                      iconColor='gray'
                       onPress={() => console.log('QR Code Pressed')}
                    />
                  </View>
                  <Text style={styles.familyMemberName}>{member.name}</Text>
                  <Text>{member.relation}</Text>
                </Card>
              ))}
            </ScrollView>
            <GatePassModal
              modalVisible={modalVisible}
              toggleModal={toggleModal}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  upperCard: {
    backgroundColor: '#edf4f7',
    borderRadius: 10,
    elevation: 5,
    marginBottom: 10,
    padding: 10,
    marginHorizontal: 15,
    margin: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfoText: {
    marginLeft: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: '600',
    color:'#0E344B'
  },
  qrCodeContainer: {
    alignItems: 'center',
  },
  qrCode: {
    width: 50,
    height: 50,
    marginRight:20
  },
  divider: {
    backgroundColor: 'black',
    marginVertical: 10,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  verticalDivider: {
    height: '100%',
    width: 1,
    backgroundColor: 'black',
    marginHorizontal: 5,
  },
  iconWithText: {
    flexDirection: 'colomn',
    alignItems: 'center',
  },
  households: {
    marginTop: 5,
    backgroundColor: '#f0f0f0',
  },
  householdTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    alignSelf: 'center',
    marginTop: 5,
  },
  householdCard: {
    backgroundColor: '#fff',
  },
  familyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  householdName: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
    color:'#0E344B'
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
  addButton: {
    backgroundColor: '#0E344B',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    marginTop: 15,
    padding: 10,
    paddingVertical: 5,
  },
  familyMemberCard: {
    marginHorizontal: 5,
    width: 130,
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 10,
  },
  familyMemberName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    color:'#0E344B'
  },
});

export default Profile;
