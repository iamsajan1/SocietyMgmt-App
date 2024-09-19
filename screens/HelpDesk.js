import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Button } from 'react-native';

const HelpDesk = () => {
  const [activeTab, setActiveTab] = useState('community');

  const communityComplaints = [
    { id: 1, title: 'Water Leakage', description: 'Water leaking from the main pipeline.', resolved: false, complainerImage: 'https://content.jdmagicbox.com/comp/ghaziabad/b3/011pxx11.xx11.171117102358.j3b3/catalogue/active-gym-ghaziabad-86lm7.jpg', solverImage: null },
    { id: 2, title: 'Loud Noise', description: 'Loud noise from the neighboring apartment late at night.', resolved: true, complainerImage: 'https://content.jdmagicbox.com/comp/ghaziabad/b3/011pxx11.xx11.171117102358.j3b3/catalogue/active-gym-ghaziabad-86lm7.jpg', solverImage: null },
    { id: 3, title: 'Water Leakage', description: 'Water leaking from the main pipeline.', resolved: false, complainerImage: 'https://content.jdmagicbox.com/comp/ghaziabad/b3/011pxx11.xx11.171117102358.j3b3/catalogue/active-gym-ghaziabad-86lm7.jpg', solverImage: null },
    { id: 4, title: 'Loud Noise', description: 'Loud noise from the neighboring apartment late at night.', resolved: true, complainerImage: 'https://content.jdmagicbox.com/comp/ghaziabad/b3/011pxx11.xx11.171117102358.j3b3/catalogue/active-gym-ghaziabad-86lm7.jpg', solverImage: null },
    { id: 5, title: 'Water Leakage', description: 'Water leaking from the main pipeline.', resolved: false, complainerImage: 'https://content.jdmagicbox.com/comp/ghaziabad/b3/011pxx11.xx11.171117102358.j3b3/catalogue/active-gym-ghaziabad-86lm7.jpg', solverImage: null },
    { id: 6, title: 'Loud Noise', description: 'Loud noise from the neighboring apartment late at night.', resolved: true, complainerImage: 'https://content.jdmagicbox.com/comp/ghaziabad/b3/011pxx11.xx11.171117102358.j3b3/catalogue/active-gym-ghaziabad-86lm7.jpg', solverImage: null },
    { id: 7, title: 'Water Leakage', description: 'Water leaking from the main pipeline.', resolved: false, complainerImage: 'https://content.jdmagicbox.com/comp/ghaziabad/b3/011pxx11.xx11.171117102358.j3b3/catalogue/active-gym-ghaziabad-86lm7.jpg', solverImage: null },
    { id: 8, title: 'Loud Noise', description: 'Loud noise from the neighboring apartment late at night.', resolved: true, complainerImage: 'https://content.jdmagicbox.com/comp/ghaziabad/b3/011pxx11.xx11.171117102358.j3b3/catalogue/active-gym-ghaziabad-86lm7.jpg', solverImage: null },
    { id: 9, title: 'Water Leakage', description: 'Water leaking from the main pipeline.', resolved: false, complainerImage: 'https://content.jdmagicbox.com/comp/ghaziabad/b3/011pxx11.xx11.171117102358.j3b3/catalogue/active-gym-ghaziabad-86lm7.jpg', solverImage: null },
    { id: 10, title: 'Loud Noise', description: 'Loud noise from the neighboring apartment late at night.', resolved: true, complainerImage: 'https://content.jdmagicbox.com/comp/ghaziabad/b3/011pxx11.xx11.171117102358.j3b3/catalogue/active-gym-ghaziabad-86lm7.jpg', solverImage: null },
    { id: 11, title: 'Water Leakage', description: 'Water leaking from the main pipeline.', resolved: false, complainerImage: 'https://content.jdmagicbox.com/comp/ghaziabad/b3/011pxx11.xx11.171117102358.j3b3/catalogue/active-gym-ghaziabad-86lm7.jpg', solverImage: null },
    { id: 12, title: 'Loud Noise', description: 'Loud noise from the neighboring apartment late at night.', resolved: true, complainerImage: 'https://content.jdmagicbox.com/comp/ghaziabad/b3/011pxx11.xx11.171117102358.j3b3/catalogue/active-gym-ghaziabad-86lm7.jpg', solverImage: null },
    { id: 13, title: 'Water Leakage', description: 'Water leaking from the main pipeline.', resolved: false, complainerImage: 'https://content.jdmagicbox.com/comp/ghaziabad/b3/011pxx11.xx11.171117102358.j3b3/catalogue/active-gym-ghaziabad-86lm7.jpg', solverImage: null },
    { id: 14, title: 'Loud Noise', description: 'Loud noise from the neighboring apartment late at night.', resolved: true, complainerImage: 'https://content.jdmagicbox.com/comp/ghaziabad/b3/011pxx11.xx11.171117102358.j3b3/catalogue/active-gym-ghaziabad-86lm7.jpg', solverImage: null },
    { id: 15, title: 'Water Leakage', description: 'Water leaking from the main pipeline.', resolved: false, complainerImage: 'https://content.jdmagicbox.com/comp/ghaziabad/b3/011pxx11.xx11.171117102358.j3b3/catalogue/active-gym-ghaziabad-86lm7.jpg', solverImage: null },
    { id: 16, title: 'Loud Noise', description: 'Loud noise from the neighboring apartment late at night.', resolved: true, complainerImage: 'https://content.jdmagicbox.com/comp/ghaziabad/b3/011pxx11.xx11.171117102358.j3b3/catalogue/active-gym-ghaziabad-86lm7.jpg', solverImage: null },
    { id: 17, title: 'Water Leakage', description: 'Water leaking from the main pipeline.', resolved: false, complainerImage: 'https://content.jdmagicbox.com/comp/ghaziabad/b3/011pxx11.xx11.171117102358.j3b3/catalogue/active-gym-ghaziabad-86lm7.jpg', solverImage: null },
    { id: 18, title: 'Loud Noise', description: 'Loud noise from the neighboring apartment late at night.', resolved: true, complainerImage: 'https://content.jdmagicbox.com/comp/ghaziabad/b3/011pxx11.xx11.171117102358.j3b3/catalogue/active-gym-ghaziabad-86lm7.jpg', solverImage: null },

   ];

  const personalIssues = [
    { id: 1, title: 'Internet Connection Issue', description: 'Internet connection was down for 2 hours.', resolved: false, complainerImage: null, solverImage: 'https://content.jdmagicbox.com/comp/ghaziabad/b3/011pxx11.xx11.171117102358.j3b3/catalogue/active-gym-ghaziabad-86lm7.jpg' },
    { id: 2, title: 'AC Maintenance', description: 'AC in the bedroom was not cooling properly.', resolved: true, complainerImage: null, solverImage: 'https://content.jdmagicbox.com/comp/ghaziabad/b3/011pxx11.xx11.171117102358.j3b3/catalogue/active-gym-ghaziabad-86lm7.jpg' },
    { id: 3, title: 'Internet Connection Issue', description: 'Internet connection was down for 2 hours.', resolved: false, complainerImage: null, solverImage: 'https://content.jdmagicbox.com/comp/ghaziabad/b3/011pxx11.xx11.171117102358.j3b3/catalogue/active-gym-ghaziabad-86lm7.jpg' },
    { id: 4, title: 'AC Maintenance', description: 'AC in the bedroom was not cooling properly.', resolved: true, complainerImage: null, solverImage: 'https://content.jdmagicbox.com/comp/ghaziabad/b3/011pxx11.xx11.171117102358.j3b3/catalogue/active-gym-ghaziabad-86lm7.jpg' },
    { id: 5, title: 'Internet Connection Issue', description: 'Internet connection was down for 2 hours.', resolved: false, complainerImage: null, solverImage: 'https://content.jdmagicbox.com/comp/ghaziabad/b3/011pxx11.xx11.171117102358.j3b3/catalogue/active-gym-ghaziabad-86lm7.jpg' },
    { id: 6, title: 'AC Maintenance', description: 'AC in the bedroom was not cooling properly.', resolved: true, complainerImage: null, solverImage: 'https://content.jdmagicbox.com/comp/ghaziabad/b3/011pxx11.xx11.171117102358.j3b3/catalogue/active-gym-ghaziabad-86lm7.jpg' },
    { id: 7, title: 'Internet Connection Issue', description: 'Internet connection was down for 2 hours.', resolved: false, complainerImage: null, solverImage: 'https://content.jdmagicbox.com/comp/ghaziabad/b3/011pxx11.xx11.171117102358.j3b3/catalogue/active-gym-ghaziabad-86lm7.jpg' },
    { id: 8, title: 'AC Maintenance', description: 'AC in the bedroom was not cooling properly.', resolved: true, complainerImage: null, solverImage: 'https://content.jdmagicbox.com/comp/ghaziabad/b3/011pxx11.xx11.171117102358.j3b3/catalogue/active-gym-ghaziabad-86lm7.jpg' },

   ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const raiseComplaint = () => {
     console.log('Complaint raised!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'community' ? styles.activeTab : null]}
          onPress={() => handleTabChange('community')}
        >
          <Text style={[styles.tabText, activeTab === 'community' ? styles.activeTabText : null]}>Community</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'personal' ? styles.activeTab : null]}
          onPress={() => handleTabChange('personal')}
        >
          <Text style={[styles.tabText, activeTab === 'personal' ? styles.activeTabText : null]}>Personal</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {activeTab === 'community' ? (
          communityComplaints.map(complaint => (
            <View key={complaint.id} style={styles.card}>
              {complaint.complainerImage && <Image source={{ uri: complaint.complainerImage }} style={styles.image} />}
              <View style={styles.detailsContainer}>
                <Text style={styles.title}>{complaint.title}</Text>
                <Text style={styles.description}>{complaint.description}</Text>
                {complaint.resolved ? (
                  <View style={styles.tagContainer}>
                    <Text style={[styles.tag, { backgroundColor: 'green' }]}>Resolved</Text>
                  </View>
                ) : (
                  <View style={styles.tagContainer}>
                    <Text style={[styles.tag, { backgroundColor: '#f54565' }]}>Pending</Text>
                  </View>
                )}
              </View>
            </View>
          ))
        ) : (
          personalIssues.filter(issue => issue.resolved).map(issue => (
            
            <View key={issue.id} style={styles.card}>
              {issue.solverImage && <Image source={{ uri: issue.solverImage }} style={styles.image} />}
              <View style={styles.detailsContainer}>
                <Text style={styles.title}>{issue.title}</Text>
                <Text style={styles.description}>{issue.description}</Text>
                <View style={styles.tagContainer}>
                  <Text style={[styles.tag, { backgroundColor: '#49ba69' }]}>Resolved</Text>
                </View>
              </View>
            </View>
          ))
        )}
      </ScrollView>
      <TouchableOpacity style={styles.buttonContainer} onPress={raiseComplaint}>
        <Text style={styles.buttonText}>Raise New Complaint</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
     borderRadius: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    margin:5,
    borderRadius: 7,
    borderWidth: 0.2,
  },
  activeTab: {
    backgroundColor: '#0E344B', 
    borderRadius: 7,
    elevation: 3,
  },
  tabText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  activeTabText: {
    color: 'white', 
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
    color:'black'
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
  },
  status: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'gray',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
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
  tagContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    borderTopRightRadius:8,
     marginTop:-25,
    marginRight:-25,
  },
});

export default HelpDesk;
