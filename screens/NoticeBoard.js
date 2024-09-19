import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const notices = [
  {
    id: 1,
    title: 'Important Notice 1',
    content: 'This is the content of the first notice. Please read it carefully.',
    isNew: true,
  },
  {
    id: 2,
    title: 'Important Notice 1',
    content: 'This is the content of the first notice. Please read it carefully.',
    isNew: true,
  },
  {
    id: 3,
    title: 'Important Notice 1',
    content: 'This is the content of the first notice. Please read it carefully.',
    isNew: false,
  },
  {
    id: 4,
    title: 'Important Notice 1',
    content: 'This is the content of the first notice. Please read it carefully.',
    isNew: false,
  },
  {
    id: 5,
    title: 'Important Notice 2',
    content: 'This is the content of the second notice. Pay close attention to it.',
    isNew: false,
  },
];

const NoticeCard = ({ title, content, isNew }) => (
  <View style={styles.card}>
    {isNew && <View style={styles.newTag}><Text style={styles.newTagText}>New</Text></View>}
    <View style={styles.contentWrapper}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.textContent}>{content}</Text>
      </View>
    </View>
    <View style={styles.divider} />
    <View style={styles.footer}>
      <Text style={styles.postedBy}>Posted by Admin</Text>
      <Text style={styles.dateTime}>{new Date().toLocaleString()}</Text>
    </View>
  </View>
);

const NoticeBoard = () => {
  return (
    <View style={styles.container}>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={notices}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <NoticeCard title={item.title} content={item.content} isNew={item.isNew} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    marginHorizontal: 15,
    marginTop: 10
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 3,
    padding: 15,
    marginBottom: 10,
    borderLeftWidth: 8,
    borderBlockColor:'#0E344B'
  },
  newTag: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#0E344B',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderTopRightRadius: 8
  },
  newTagText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  contentWrapper: {
    flexDirection: 'row',
  },
  leftLine: {
    width: 4,
    height: '100%',
    backgroundColor: 'red',
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'black',
  },
  textContent: {
    fontSize: 16,
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  postedBy: {
    fontSize: 14,
    fontStyle: 'italic',
    color:'black',
  },
  dateTime: {
    fontSize: 14,
    color: 'gray',
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
});

export default NoticeBoard;
