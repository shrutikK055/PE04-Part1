import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';

import ProfileCard from './components/ProfileCard';

const profiles = Array.from({ length: 6 }, (_, i) => ({
  id: i.toString(),
}));

export default function App() {
  const [expandedId, setExpandedId] = useState(null);

  const handlePress = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={profiles}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item.id)}>
            <ProfileCard expanded={expandedId === item.id} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    paddingTop: 50,
  },
  list: {
    alignItems: 'center',
  },
  row: {
    justifyContent: 'space-around',
    marginBottom: 20,
  },
});
