import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const payments = [
  {
    id: 1,
    date: '2024-03-13',
    amount: 100,
    description: 'Monthly maintenance fee',
    status: 'paid',
    isNew: false,
  },
  {
    id: 2,
    date: '2024-03-10',
    amount: 50,
    description: 'Late fee',
    status: 'pending',
    isNew: true,
  },
  {
    id: 3,
    date: '2024-03-15',
    amount: 75,
    description: 'Utility bill',
    status: 'canceled',
    isNew: false,
  },
];

const PaymentCard = ({ date, amount, description, status, isNew }) => {
  let buttonColor;
  switch (status) {
    case 'paid':
      buttonColor = '#4CAF50'; 
      break;
    case 'pending':
      buttonColor = '#FFA500'; 
      break;
    case 'canceled':
      buttonColor = '#FF0000';
      break;
    default:
      buttonColor = '#4CAF50'; 
  }

  return (
    <View style={styles.card}>
      {isNew && <View style={styles.newTag}><Text style={styles.newTagText}>New</Text></View>}
      <View style={styles.content}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.description}>{description}</Text>
        <View style={styles.divider} />
        <View style={styles.footer}>
          <Text style={{ fontSize: 14, fontWeight: 'bold' }}>${amount}</Text>
          <Text style={styles.dueDate}>Due date: {date}</Text>
        </View>
      </View>
      <TouchableOpacity style={[styles.button, { backgroundColor: buttonColor }]}>
        <Text style={styles.buttonText}>{status === 'canceled' ? 'Cancelled' : 'Paid'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const PaymentScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={payments}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <PaymentCard
            date={item.date}
            amount={item.amount}
            description={item.description}
            status={item.status}
            isNew={item.isNew}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    marginHorizontal: 17,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 3,
    padding: 15,
    marginBottom: 10,
  },
  content: {
    flex: 1,
  },
  description: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
    fontWeight:'600'
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
  footer: {
    flexDirection: 'colomn',
    justifyContent: 'space-between',
    alignItems:'flex-start',

  },
  dueDate: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'gray',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '110%',
    marginTop: 10,
    borderRadius: 7,
    alignSelf: 'flex-start',
    marginLeft:-15,
    marginBottom:-15,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  newTag: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#051330',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  newTagText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default PaymentScreen;
