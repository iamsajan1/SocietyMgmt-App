import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, TextInput } from 'react-native';
import { Avatar, IconButton } from 'react-native-paper';

const ChatDetailScreen = ({ navigation }) => {
    const [messageText, setMessageText] = useState('');
    const [chatData, setChatData] = useState([
        { id: '1', sender: 'User', message: 'Hello', time: '10:00 AM' },
        { id: '2', sender: 'Me', message: 'Hi there', time: '10:05 AM' },
        { id: '3', sender: 'User', message: 'How are you?', time: '10:07 AM' },
        { id: '4', sender: 'Me', message: 'I\'m good, thanks!', time: '10:10 AM' },
    ]);

    const renderChatMessage = ({ item }) => (
        <View style={item.sender === 'Me' ? styles.myMessageContainer : styles.otherMessageContainer}>
            {item.sender !== 'Me' && (
                <Avatar.Image size={40} source={{ uri: 'https://boysprofilepics.yolasite.com/resources/Attitude%20Boy%20Pic%20HD.png?timestamp=1530947307549' }} style={{ marginRight: 10 }} />
            )}
            <View style={styles.messageContent}>
                <Text style={styles.messageText}>{item.message}</Text>
                <Text style={styles.messageTime}>{item.time}</Text>
            </View>
        </View>
    );

    const sendMessage = () => {
        if (messageText.trim() !== '') {
            const newMessage = {
                id: `${chatData.length + 1}`,
                sender: 'Me',
                message: messageText,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };
            setChatData([newMessage, ...chatData]);
            setMessageText('');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <IconButton icon="arrow-left" size={24} />
                </TouchableOpacity>
                <View style={styles.userInfo}>
                    <Avatar.Image size={40} source={{ uri: 'https://i.pinimg.com/736x/d5/30/9a/d5309a7535b15aebb984b0cb0a963f3e.jpg' }} />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.userName}>Anjali Singh</Text>
                        <Text style={styles.userAddress}>Sec 18 noida </Text>
                    </View>
                </View>
                <IconButton icon="phone" onPress={() => console.log('Call button pressed')} />
            </View>
            <FlatList
                data={chatData}
                renderItem={renderChatMessage}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.chatContainer}
                inverted
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={messageText}
                    onChangeText={setMessageText}
                    placeholder="Type your message..."
                    multiline
                />
                <IconButton icon="send" onPress={sendMessage} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    userAddress: {
        color: 'gray',
    },
    myMessageContainer: {
        flexDirection: 'row', // Added flexDirection: row
        alignSelf: 'flex-end',
        alignItems: 'center', // Added alignItems: center
        backgroundColor: '#DCF8C6',
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        padding: 10,
        maxWidth: '70%',
    },
    otherMessageContainer: {
        flexDirection: 'row', // Added flexDirection: row
        alignSelf: 'flex-start',
        alignItems: 'center', // Added alignItems: center
        backgroundColor: '#E5E5EA',
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        padding: 10,
        maxWidth: '70%',
    },
    messageContent: {
        flex: 1, // Added flex: 1
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    messageText: {
        fontSize: 16,
        marginRight: 10,
    },
    messageTime: {
        fontSize: 12,
        color: 'gray',
    },
    chatContainer: {
        flexGrow: 1,
        paddingBottom: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    input: {
        flex: 1,
        marginRight: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 15,
    },
});

export default ChatDetailScreen;
