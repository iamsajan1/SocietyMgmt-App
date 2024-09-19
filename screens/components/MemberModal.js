import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { IconButton } from "react-native-paper";

const MemberModal = ({ visible, member, onClose }) => {
    const navigation = useNavigation();
  const handleBackgroundPress = () => {
    if (visible) {
      onClose();
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={handleBackgroundPress}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <IconButton
                icon="close"
                size={24}
                color="blue"
                onPress={onClose}
                style={styles.closeButton}
              />
              {member && (
                <>
                  <Image
                    source={{ uri: member.image }}
                    style={styles.modalMemberImage}
                  />
                  <Text style={styles.modalMemberName}>{member.name}</Text>
                  <Text style={styles.modalMemberAddress}>
                    {member.address}
                  </Text>
                  <View style={styles.iconRow}>
                    <View style={styles.iconContainer}>
                      <IconButton
                        style={{ backgroundColor: "#e1ebf7" }}
                        icon="application-cog-outline"
                        size={20}
                        iconColor='#0E344B'
                       />
                      <Text style={styles.iconText}>Demo App</Text>
                    </View>
                    <View style={styles.verticalDivider} />
                    <View style={styles.iconContainer}>
                      <IconButton
                        style={{ backgroundColor: "#e1ebf7" }}
                        icon="home-outline"
                        size={20}
                        iconColor='#0E344B'

                      />
                      <Text style={styles.iconText}>Flat No: 211</Text>
                    </View>
                    <View style={styles.verticalDivider} />
                    <View style={styles.iconContainer}>
                      <IconButton
                        style={{ backgroundColor: "#e1ebf7" }}
                        icon="home-city-outline"
                        size={20}
                        iconColor='#0E344B'

                      />
                      <Text style={styles.iconText}>Block no</Text>
                    </View>
                  </View>
                  <View style={styles.buttonRow}>
  <TouchableOpacity style={styles.Phonebutton}>
    <IconButton
      icon="phone"
      size={20}
      iconColor="white"
    />
    <Text style={styles.buttonText}>Call</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.Chatbutton}  onPress={() => navigation.navigate('ChatDetailScreen')}>
    <IconButton
      icon="message-settings-outline"
      size={20}
      iconColor="white"

    />
    <Text style={styles.buttonText}>Chat</Text>
  </TouchableOpacity>
</View>

                </>
              )}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "90%",
  },
  modalMemberName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    alignSelf: "center",
    color:'black',
  },
  modalMemberImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: "center",
  },
  modalMemberAddress: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
    alignSelf: "center",
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  iconContainer: {
    alignItems: "center",
  },
  iconText: {
    textAlign: "center",
    marginTop: 5,
    maxWidth: 50,
    color:'black'
  },
  verticalDivider: {
    width: 1,
    height: "100%",
    backgroundColor: "gray",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  Phonebutton: {
    backgroundColor:'#6f97ad',
    padding: 3,
    borderRadius: 5,
    width: "48%",
    alignItems: "center",
    flexDirection:"row"
  },
 Chatbutton: {
    backgroundColor: "#06ba25",
    padding: 3,
    borderRadius: 5,
    width: "48%",
    alignItems: "center",
    flexDirection:"row"
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default MemberModal;
