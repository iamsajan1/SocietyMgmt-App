import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {Button, Avatar, IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Card = ({title, description, image, onPress}) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <Image source={{uri: image}} style={styles.image} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
    <View>
      
    </View>
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              backgroundColor: '#fff',
              width: '100%',
              padding: 20,
              marginBottom: 15,
            }}>
            <View style={styles.userProfile}>
              <Avatar.Image
                size={50}
                source={{
                  uri: 'https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg',
                }}
              />
              <View style={styles.userInfo}>
                <Text style={styles.userName}>Deepak Kumar</Text>
                <Text style={styles.userAddress}>
                  1234 Main Street, City, Country
                </Text>
              </View>
            </View>
            <IconButton
              icon="bell-outline"
              iconColor="#000"
              size={24}
              style={styles.bellIcon}
              onPress={() =>
                navigation.navigate('Notification', {animation: 'slide_from_right'})
              }            />
            <ImageBackground
              source={{
                uri: 'https://www.investopedia.com/thmb/wjDOveixbbMuowzNqkM1mk2EGUw=/2309x1299/filters:fill(auto,1)/GettyImages-1177821654-3bf2182f078e408291d277a901994590.jpg',
              }}
              style={styles.banner}
              imageStyle={styles.bannerImage}>
              <Text style={styles.newTag}>NEW</Text>
              <Text style={styles.bannerTitleText}>Notice:</Text>
              <Text style={styles.bannerText}>
                Tomorrow is grand party every one is invited .
              </Text>
            </ImageBackground>
            <Text style={styles.userName}> Community</Text>
          </View>
          <View style={styles.row}>
            <Card
              onPress={() =>
                navigation.navigate('Members', {animation: 'slide_from_right'})
              }
              title="Member"
              description="Connect society Members"
              image="https://png.pngitem.com/pimgs/s/36-366092_people-friends-group-family-men-and-women-teamwork.png"
            />
            <Card
              onPress={() =>
                navigation.navigate('Visitors', {animation: 'slide_from_right'})
              }
              title="Visitors"
              description="chack new visitors"
              image="https://tse3.explicit.bing.net/th?id=OIP.tzjBELKN6M7mZTDjQp86tQHaIy&pid=Api&P=0&h=180"
            />
          </View>
          <View style={styles.row}>
            <Card
              onPress={() =>
                navigation.navigate('NoticeBoard', {animation: 'slide_from_right'})
              }
              title="Notice Board"
              description="see imp notice"
              image="https://tse4.mm.bing.net/th?id=OIP.rx8aqCiruN8ha_hjeaDYvgAAAA&pid=Api&P=0&h=180"
            />
            <Card
            onPress={() =>
                navigation.navigate('Payments', {animation: 'slide_from_right'})
              }
              title="Payment"
              description="check recent payments"
              image="https://i.pinimg.com/originals/f9/66/a0/f966a00fe1f82256af1276d6d2f95abb.png"
            />
          </View>
          <View style={styles.row}>
            <Card
               onPress={() =>
                navigation.navigate('Amenity', {animation: 'slide_from_right'})
              }
              title="Book Amenities"
              description="pre book society amenities"
              image="https://tse1.mm.bing.net/th?id=OIP.lChqN_G5mk469LFZ7ZFmUAAAAA&pid=Api&P=0&h=180"
            />
            <Card
             onPress={() =>
                navigation.navigate('HelpDesk', {animation: 'slide_from_right'})
              }
              title="Help Desk"
              description="complaints & suggestionsa "
              image="https://tse3.mm.bing.net/th?id=OIP.pyey1Cr45IPEnzGocjJ4wwHaHt&pid=Api&P=0&h=180"
            />
          </View>
        </View>
      </ScrollView>
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
    borderRadius: 16,
    elevation: 5,
    position: 'relative',
    borderLeftWidth:8,
 
  },
  bannerImage: {
    borderRadius: 10,
  },
  newTag: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'black',
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
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    zIndex: 1,
    marginLeft: 12,
  },
  bannerTitleText: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    zIndex: 1,
    marginTop: 20,
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
    color:'black'
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
  row: {
    flexDirection: 'row',
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
    flexDirection: 'row',
    margin: 5,
  },
  cardContent: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'black'
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 15,
    alignSelf: 'flex-end',
    marginRight: 10,
     marginTop: 80,
  },
});

export default Home;
